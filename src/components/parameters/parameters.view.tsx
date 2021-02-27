import React from 'react';
import classes from './parameters.module.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormButton from './formButton/formButton';
import FormRange from './formRange/formRange';
import ModalComponent from './modal/modal';
import { Operation } from './modal/components/operation/operation';
import { SubmitFormView } from '../../ts/store';
import soundOn from '../../resources/images/soundSVG/soundOn.png';
import soundOff from '../../resources/images/soundSVG/soundOff.png';
interface EventHandlerProps extends SubmitFormView {
  showOperation: boolean;
  handleModalOperationClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseModalOperationClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleChooseModalOperationClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const ParametersView = ({
  showOperation,
  handleModalOperationClick,
  handleCloseModalOperationClick,
  handleChooseModalOperationClick,
  countGames,
  firstNumber,
  secondNumber,
  operation,
  isSound,
  setCheckIsSound,
  setValueRangeFirstNumbers,
  setValueRangeSecondNumbers,
  setValueRangeCountGames,
  setValueSelectOperation,
  handleSubmit,
}: EventHandlerProps) => {
  return (
    <Form
      className={classes.form}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit({
          event,
          countGames,
          firstNumber,
          secondNumber,
          operation,
          isSound,
        })
      }
    >
      <h2 className="text-center">Выберите параметры:</h2>
      <FormButton
        title="Математическая операция:"
        handleModalClick={handleModalOperationClick}
        nameButton={operation}
      />
      <ModalComponent
        showModal={showOperation}
        handleCloseModalClick={handleCloseModalOperationClick}
        handleChooseModalClick={handleChooseModalOperationClick}
        title="Вид операции"
        modalParams={true}
        size="sm"
      >
        {' '}
        <Operation handleButtonClick={setValueSelectOperation} />
      </ModalComponent>
      <FormRange
        title="Первое число (разряд):"
        min={1}
        max={6}
        step={1}
        currentParametersRange={firstNumber}
        setValueRange={setValueRangeFirstNumbers}
      />
      {operation !== 'Квадрат числа' &&
        operation !== 'Корень квадратный (проф.)' &&
        operation !== 'Корень квадратный' && (<FormRange
          title="Второе число (разряд):"
          min={1}
          max={6}
            step={1}
          currentParametersRange={secondNumber}
          setValueRange={setValueRangeSecondNumbers}
        />
      )}
      <FormRange
        title="Количество раундов:"
        min={1}
        max={40}
        step={1}
        currentParametersRange={countGames}
        setValueRange={setValueRangeCountGames}
      />
      <Form.Group as={Row} controlId="formPlaintextButton" className="mb-1">
        <Col sm="7" className="d-flex align-items-center justify-content-start">
          <button
            title="Отключение звука"
            className={classes.buttonIcon}
            onClick={(event) => {
              event.preventDefault();
              setCheckIsSound(!isSound);
            }}
          >
            <img
              className={classes.resultsIcon}
              alt="звук"
              src={isSound ? soundOn : soundOff}
            />
          </button>
        </Col>
        <Col
          sm="5"
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            type="submit"
            className={classes.formControlButton}
            style={{
              width: '100%',
              height: '70%',
              minHeight: '40px',
              marginBottom: '2%',
            }}
          >
            Начать
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ParametersView;
