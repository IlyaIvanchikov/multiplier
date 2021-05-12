import React from 'react';
import classes from './header.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../resources/images/header/logo.svg';
import arrow from '../../resources/images/header/arrow.svg';
import logout from '../../resources/images/header/logout.svg';

interface EventHeaderProps {
  name: string;
}

const Header = ({ name }: EventHeaderProps) => {

  const handleExit = () => {
    localStorage.clear();
  }

  const logoutComponent =
    (<div className={classes.logo} onClick={handleExit}>
      <img src={logout} alt="logout" />
    </div>);

  return (
    <Container fluid={true} className={classes.container}>
      <Row className={classes.row}>
        <Col className="flex-row justify-content-start align-items-center d-none d-md-flex">
          <div className={classes.logo}>
            <a href="https://pifagoriyatsk.ru/multiplier/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </Col>
        <Col className="flex-row justify-content-center align-items-center d-none d-lg-flex">
          <img src={arrow} alt="arrow" />
          <h1>Умножайка</h1>
        </Col>
        <Col className="d-flex flex-row justify-content-sm-end align-items-center justify-content-center">
          <h3>Добро пожаловать{name && `: ${name}`} 21312432432sdfsfsfsfsfsd4</h3>
          {name && logoutComponent}
        </Col>
      </Row>
    </Container>
  )
};

export default Header;
