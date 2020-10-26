import React from 'react';
import './Table.scss';

const Table = () => {
  const data = [
    {
      position: 1,
      club: 'Everton',
      img: 'eve',
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
      img: 'ast',
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
      img: 'liv',
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
      img: 'lei',
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
      img: 'ars',
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
      img: 'wol',
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
      img: 'tot',
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
      img: 'che',
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
      img: 'whu',
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
      img: 'lee',
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
      img: 'mnc',
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
      img: 'sou',
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
      img: 'nwc',
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
      img: 'cry',
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
      img: 'mnu',
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
      img: 'bri',
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
      img: 'wba',
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
      img: 'bur',
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
      img: 'she',
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
      img: 'ful',
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
    <div className="table">
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th></th>
              <th className="left">Club</th>
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
                  <tr key={index}>
                    <td className="center">{team.position}</td>
                    <td><img src={require(`../../images/teams/${team.img}.png`)} alt={team.club}></img></td>
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
    </div>
  )
}

export default Table;