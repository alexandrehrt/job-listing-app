import React, { useEffect, useState } from 'react';

import { Container } from '../styles/pages/index';

import Card from '../components/Card';


export default function Home() {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(async () => {
    const response = await fetch('http://localhost:3333/companies');
    const companies = await response.json();

    setJobOffers(companies);
  }, [])


  return (
    <Container>
      <ul id='card-list'>
      {jobOffers.map(jobOffer => {
        return (
          <li id='card' key={jobOffer.id}><Card props={jobOffer}/></li>
        )
      })}
      </ul>
    </Container>
  )
}
