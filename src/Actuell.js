import React from 'react'

function Actuell({cases, deaths, recovered}) {
  return (
    <div className="actuell">
      <div className="title-cases">
        <h3>Cases</h3>
        <p>{cases}</p>
        <hr />
        <span>Last Update</span>
      </div>
      <div className="deaths">
        <h3>Deaths</h3>
        <p>{deaths}</p>
        <hr />
        <span>Last Update</span>
      </div>
      <div className="recovered">
        <h3>Recovered</h3>
        <p>{recovered}</p>
        <hr />
        <span>Last Update</span>
      </div>
    </div>
  );
}

export default Actuell;
