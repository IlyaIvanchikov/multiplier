import React from 'react';
import classes from './tableofplayerresults.module.scss';
import { Table, Row } from 'react-bootstrap';
import OneRowOfTable from '../oneRowOfResultsTable/oneRowOfResultsTable';

type TableResProps = {
  results: any[];
  timers: string[];
};

const TableOfPlayerResults = ({ results, timers }: TableResProps) => {
  return (
    <Row className={classes.table}>
      <Table responsive={true} striped={true} hover={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Пример</th>
            <th>Ваш ответ</th>
            <th>Затраченное время</th>
            <th>Правильный</th>
          </tr>
        </thead>
        <tbody>
          {results.length ? (
            results.map((item, index) => (
              <OneRowOfTable
                exercises={item}
                number={index + 1}
                key={index}
                timer={timers[index]}
              />
            ))
          ) : (
            <tr>
              <td />
              <td>Нет результатов</td>
              <td />
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  );
};

export default TableOfPlayerResults;
