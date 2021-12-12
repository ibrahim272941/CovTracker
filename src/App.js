import { useRef, useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import TotalCases from "./TotalCases";
import Actuell from "./Actuell";


const allApi = "https://corona.lmao.ninja/v3/covid-19/all";
const countryApi = "https://corona.lmao.ninja/v3/covid-19/countries/";

function App() {
const [latest, setLatest] = useState({})
const [countries, setCountries] = useState([])
const [search, setSearch] = useState('')

useEffect(() => {
  getApi(countryApi);
updateApi(allApi)
}, [])

const updateApi = (api)=>[
  axios.get(api)
  .then(res=>{
    setLatest(res.data)
  })
]
const getApi = (api) =>
  axios
    .get(api)
    .then((res) => {
     
      setCountries(res.data);
      
    })
    .catch((err) => console.log(err));

// const handleSubmit = (e)=>{
//   e.preventDefault(e)

// getApi(countryApi+search)
// if(search){
//   setSearch('')
// }
 
// }
 const handleOnChange = (e) => {
 e.preventDefault();
 let txt = e.target.value
setSearch((txt).charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
 };
// const date = new Date(parseInt(latest.updated))
// const lastUpdated = date.toString();

const filterCountry = countries.filter(item=>{
  return search!==''? item.country.includes(search) : item
})
console.log(filterCountry)
  return (
    <div className="App">
      <Actuell {...latest} />
      <div className="search">
        <form onChange={handleOnChange}>
          <input
            type="search"
            placeholder="Search"

            // value={search}
          />
        </form>
      </div>
      <div className="world">
        {filterCountry.length > 0 &&
          filterCountry.map((data, i) => <TotalCases key={i} {...data} />)}
      </div>
    </div>
  );
};
export default App;
