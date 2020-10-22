import React from 'react';
import './Table.scss';

const Table = () => {

  const data = [
    {
      position: 1,
      club: 'Everton',
      played: 5,
      won: 4,
      drawn: 1,
      lost: 0,
      gf: 14,
      ga: 7,
      gd: '+7',
      points: 13
    },
    {
      position: 2,
      club: 'Aston Villa',
      played: 4,
      won: 4,
      drawn: 0,
      lost: 0,
      gf: 12,
      ga: 2,
      gd: '+10',
      points: 12
    },
    {
      position: 3,
      club: 'Liverpool',
      played: 5,
      won: 3,
      drawn: 1,
      lost: 1,
      gf: 13,
      ga: 13,
      gd: '0',
      points: 12
    },
    {
      position: 4,
      club: 'Leicester City',
      played: 5,
      won: 3,
      drawn: 0,
      lost: 2,
      gf: 12,
      ga: 8,
      gd: '+4',
      points: 9
    },
    {
      position: 5,
      club: 'Arsenal',
      played: 5,
      won: 3,
      drawn: 0,
      lost: 2,
      gf: 8,
      ga: 6,
      gd: '+2',
      points: 9
    },
    {
      position: 6,
      club: 'Wolvehampton Wanderers',
      played: 5,
      won: 3,
      drawn: 0,
      lost: 2,
      gf: 5,
      ga: 7,
      gd: '-2',
      points: 9
    },
    {
      position: 7,
      club: 'Tottenham Hotspur',
      played: 5,
      won: 2,
      drawn: 2,
      lost: 1,
      gf: 15,
      ga: 8,
      gd: '+7',
      points: 8
    },
    {
      position: 8,
      club: 'Chelsea',
      played: 5,
      won: 2,
      drawn: 2,
      lost: 1,
      gf: 13,
      ga: 9,
      gd: '+4',
      points: 8
    },
    {
      position: 9,
      club: 'West Ham United',
      played: 5,
      won: 2,
      drawn: 1,
      lost: 2,
      gf: 11,
      ga: 7,
      gd: '+4',
      points: 7
    },
    {
      position: 10,
      club: 'Leeds United',
      played: 5,
      won: 2,
      drawn: 1,
      lost: 2,
      gf: 9,
      ga: 9,
      gd: '0',
      points: 7
    },
    {
      position: 11,
      club: 'Manchester City',
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
      gf: 7,
      ga: 7,
      gd: '0',
      points: 7
    },
    {
      position: 12,
      club: 'Southampton',
      played: 5,
      won: 2,
      drawn: 1,
      lost: 2,
      gf: 8,
      ga: 9,
      gd: '-1',
      points: 7
    },
    {
      position: 13,
      club: 'Newcastle United',
      played: 5,
      won: 2,
      drawn: 1,
      lost: 2,
      gf: 7,
      ga: 9,
      gd: '-2',
      points: 7
    },
    {
      position: 14,
      club: 'Crystal Palace',
      played: 5,
      won: 2,
      drawn: 1,
      lost: 2,
      gf: 6,
      ga: 8,
      gd: '-2',
      points: 7
    },
    {
      position: 15,
      club: 'Manchester United',
      played: 4,
      won: 2,
      drawn: 0,
      lost: 2,
      gf: 9,
      ga: 12,
      gd: '-3',
      points: 6
    },
    {
      position: 16,
      club: 'Brighton and Hove Albion',
      played: 5,
      won: 1,
      drawn: 1,
      lost: 3,
      gf: 9,
      ga: 11,
      gd: '-2',
      points: 4
    },
    {
      position: 17,
      club: 'West Bromwich Albion',
      played: 5,
      won: 0,
      drawn: 2,
      lost: 3,
      gf: 5,
      ga: 13,
      gd: '-8',
      points: 2
    },
    {
      position: 18,
      club: 'Burnley',
      played: 4,
      won: 0,
      drawn: 1,
      lost: 3,
      gf: 3,
      ga: 8,
      gd: '-5',
      points: 1
    },
    {
      position: 19,
      club: 'Sheffield United',
      played: 5,
      won: 0,
      drawn: 1,
      lost: 4,
      gf: 2,
      ga: 7,
      gd: '-5',
      points: 1
    },
    {
      position: 20,
      club: 'Fulham',
      played: 5,
      won: 0,
      drawn: 1,
      lost: 4,
      gf: 4,
      ga: 12,
      gd: '-8',
      points: 1
    }
  ]

  return (
    <div className="wrapper">
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
          {
            data.map((team, index) => {
              return (
                <tr>
                  <td className="center">{team.position}</td>
                  <td>{team.club}</td>
                  <td className="center">{team.played}</td>
                  <td className="center">{team.won}</td>
                  <td className="center">{team.drawn}</td>
                  <td className="center">{team.lost}</td>
                  <td className="center">{team.gf}</td>
                  <td className="center">{team.ga}</td>
                  <td className="center">{team.gd}</td>
                  <td className="center bold">{team.points}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;