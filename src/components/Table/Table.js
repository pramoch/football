import React from 'react';
import styles from './Table.module.css';

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Everton</td>
            <td>5</td>
            <td>4</td>
            <td>1</td>
            <td>0</td>
            <td>14</td>
            <td>7</td>
            <td>7</td>
            <td>13</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;