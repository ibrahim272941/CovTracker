import React from 'react'
import {useState ,useEffect} from 'react';
function TotalCases({
  countryInfo,
  cases,
  deaths,
  recovered,
  todayCases,
  todayDeaths,
  active,
  critical,
  country
}) 

 { return (
   <div className="countries">
     <div className="cases">
       <img src={countryInfo.flag} />
     </div>
     <div className="overview">
       <h3>{country}</h3>
       <p>Total Cases : {cases / 1_000_000 + "M"}</p>
       <p>Total Deaths : {deaths}</p>
       <p>Recovered : {recovered}</p>
       <p>Today Cases : {todayCases}</p>
       <p>Today Deaths : {todayDeaths}</p>
       <p>Active Cases : {active}</p>
       <p>Critical Cases : {critical}</p>
     </div>
   </div>
 );
}

export default TotalCases
