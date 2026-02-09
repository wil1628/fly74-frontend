
import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

    const [flights, setFlights] = useState([]);


  useEffect(() => {
    api.get("/flights")
      .then(response => {
        setFlights(response.data);
      })
      .catch(error => {
        console.error("Error cargando vuelos:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={"flex justify-center text-4xl m-2 text-cyan-900 font-bold"}>Fly74 Frontend</h1>
      <h2 className={"flex font-bold justify-center text-amber-800"}>Lista de vuelos:</h2>

      {flights.length === 0 ? (
        <p className={"text-amber-800"}>No hay vuelos registrados.</p>
      ) : (
        <ul className={"font-bold flex justify-center list-inside m-4"}>
          {flights.map(flight => (
            <li key={flight.id}>
              {flight.code} - {flight.origin} → {flight.destination}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default App;