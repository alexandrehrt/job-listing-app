import React from 'react';

import { Container } from '../styles/Components/Card';

export default function Card(jobOffer) {

const {
  company, 
  position,
  role, 
  level,
  logo,
  novo, 
  featured,
  postedAt, 
  contract, 
  location, 
  languages
} = jobOffer.props

  return (
    <Container featured={featured}>
      <div id='info'>
          <img src={`./${logo}`} alt='Company' />
        <div>
          <div id='jobInfo'>
            <span id='cia-name'>{company}</span>
            {novo ? <span id='new-job'>NEW!</span> : null }
            {featured ? <span id='featured'>FEATURED</span> : null }
          </div>
          <p>{position}</p>
          <span id='details'>{postedAt} &bull; {contract} &bull; {location}</span>
        </div>
      </div>

      <ul id='requirements'>
        <li>{role}</li>
        <li>{level}</li>
        {languages.map(language => {
          return (
            <li key={language}>{language}</li>
          )
        })}
      </ul>
    </Container>
  )
}

