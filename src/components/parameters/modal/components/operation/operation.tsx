import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import classes from './operation.module.scss';
import { ButtonID } from '../../../../../ts/store';

const nameButton: string[] = [
  'Умножение',
  'Простое деление',
  'Дробное деление',
  'Квадрат числа',
  'Корень квадратный',
  'Корень квадратный (проф.)',
];

export const Operation = ({ handleButtonClick }: ButtonID) => {
  return (
    <Container>
      <Row>
        {nameButton.map((item: string, index: number) => (
          <Col xs={12} key={index} className="d-flex justify-content-center">
            <Button
              key={index}
              className={classes.btn}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
