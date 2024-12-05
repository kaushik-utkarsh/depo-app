import "./App.css";
import React, { useEffect, useState } from "react";


const initialOrganisationData = [
  { name: "Organisation 2", marketCap: 0 },
  { name: "Organisation 3", marketCap: 0 },
  { name: "Organisation 1", marketCap: 0 },
  { name: "Organisation 4", marketCap: 0 },
  { name: "Organisation 5", marketCap: 0 },
  { name: "Organisation 6", marketCap: 0 },
  { name: "Organisation 7", marketCap: 0 },
  { name: "Organisation 8", marketCap: 0 },
  { name: "Organisation 9", marketCap: 0 },
  { name: "Organisation 10", marketCap: 0 }
]



export default function App() {
  const [organisations, setOrganisations] = useState(initialOrganisationData);
  console.log(organisations, "organisations");

  useEffect(() => {
    const interval = setInterval(() => {
      setOrganisations((prevOrganisation) => {
        const updatedOrganisation = prevOrganisation.map((org) => ({
          ...org,
          marketCap: org.marketCap + Math.floor(Math.random() * 20)
        }));


        updatedOrganisation.sort((a, b) => {
           return b.marketCap - a.marketCap
        });

        return updatedOrganisation


      })
    }, 5000)

  }, [])

  return (
    <div>
      <h1>
        Market Capitalisation
      </h1>
      <table>
        <thead>
          <tr>
            <th>
              Org
            </th>
            <th>
              Market
            </th>
          </tr>
        </thead>
        <tbody>
          {organisations.map((org, idx) => {
            return (<tr className="animated-row" key={idx}>
              <td>
                {org.name}
              </td>
              <td>
                {org.marketCap}
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}
