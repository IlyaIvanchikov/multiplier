import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import classes from './auth.module.scss';
import owl from '../../resources/images/main/owl.png';
import ModalComponent from '../parameters/modal/modal';
import { reducer, initialState } from '../../container/main/state/reducer';

import React, { useState, useReducer } from 'react';
import axios from 'axios';

interface HandleParamsSubmit {
  event: React.FormEvent<HTMLFormElement>;
}

interface HandleParamsAuth {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const Auth = ({ setAuth, setName }: HandleParamsAuth) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const URL = 'https://pifagoriyatsk.ru';

  const handleSubmit = ({ event }: HandleParamsSubmit) => {
    event.preventDefault();
    const loginData = { username, password };
    axios
      .post(`${URL}/wp-json/jwt-auth/v1/token`, loginData)
      .then((res) => {
        if (res.data.token) {
          const { token } = res.data;
          // setName(user_display_name);
          dispatch({
            type: 'CREATE_LOCAL_DATA',
            localParameters: {
              token,
            },
          });
          return token;
          // setAuth(true);
        }
      })
      .then((token: string) => {
        console.log(token);
        axios.get(`${URL}/wp-json/wp/v2/users/me?context=edit`, {
          headers: {
            authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGlmYWdvcml5YXRzay5ydSIsImlhdCI6MTYyMDg0OTU2OCwibmJmIjoxNjIwODQ5NTY4LCJleHAiOjE2MjE0NTQzNjgsImRhdGEiOnsidXNlciI6eyJpZCI6IjkzIn19fQ.n3HOYCaMduSac-kpFivseM8UDyunadRArtwQrPpgQqg`,
          },
        })
          .then((resp) => {
            localStorage.setItem('token', token);
            console.log(resp);
          })
        // .then((res) => {
        //   if (res.status === 200) {
        //     setIsLogged(true);
        //     localStorage.setItem('user', `${res.data.id} ${res.data.id}`);
        //     console.log(res.data);
        //   }
        // })
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_LOCAL_DATA',
          localParameters: {
            token: '',
            name: '',
          },
        });
        setName('');
        setShowModal(true);
      });
  };

  const handleHideModal = () => {
    setShowModal(false);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <Container className={classes.wrapper}>
        <Row className="flex-row justify-content-sm-center">
          <ModalComponent
            showModal={showModal}
            handleCloseModalClick={handleHideModal}
            handleChooseModalClick={handleHideModal}
            nameButton="Хорошо"
            title="Ошибка авторизации"
            modalParams={true}
            size="sm"
          >
            {' '}
            <p>Неверный логин или пароль</p>
          </ModalComponent>
          <Col sm={12} lg={9}>
            <div>
              <Form
                className={classes.form}
                onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                  handleSubmit({ event })
                }
              >
                <h2 className="text-center">Авторизация:</h2>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Введите ваше имя:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="имя"
                    className={classes.label}
                    required={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Введите пароль:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="пароль"
                    className={classes.label}
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="formPlaintextButton"
                  className="mb-1"
                >
                  <Col
                    sm="4"
                    lg="5"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <p>
                      <a href="https://pifagoriyatsk.ru/wp-login.php?action=lostpassword">
                        Забыли пароль?
                      </a>
                    </p>
                  </Col>
                  <Col
                    sm="8"
                    lg="7"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Button
                      type="submit"
                      className={classes.formControlButton}
                      style={{
                        minWidth: '100%',
                        height: '70%',
                        minHeight: '40px',
                        marginBottom: '2%',
                      }}
                    >
                      Авторизоваться
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <img src={owl} alt="owl" className={classes.img} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
