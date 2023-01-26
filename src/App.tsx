import "./App.css";
import {
  BrowserRouter,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Models
import { Country } from "./model/Country";
import { Destination } from "./model/Destination";
import { NewDestination } from "./model/NewDestination";

// Pages
import CountryPage from "./pages/CountryPage";
import CreateDestination from "./pages/CreateDestination";
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import CreateReservation from "./pages/CreateReservation";
import Reservations from "./pages/Reservations";
import UpdateDestination from "./pages/UpdateDestination";

function App() {
  const [countries, setCountries] = useState<Country[]>();
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1001/countries")
      .then((response) => setCountries(response.data));
  }, []);

  const saveDestination = (obj: NewDestination) => {
    axios
      .post(
        `http://localhost:1001/countries/country/city=${obj.cityID}/destination/add`,
        {
          name: obj.destinationName,
          price: obj.price,
          type_of_accommodation: obj.type,
          description: obj.description,
          available_rooms: obj.rooms,
          address: obj.address,
        }
      )
      .then((response) => console.log(response.data.statusMsg))
      .catch((err) => console.log(err));
    return obj;
  };

  const saveCurrentCountry = (id: any) => {
    setCurrentCountry(id);
  };

  const saveCurrentCity = (id: any) => {
    axios
      .get(
        `http://localhost:1001/countries/country/cities/city/${id}/destinations`
      )
      .then((response) => setCurrentCity(response.data));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          element={
            <CreateDestination
              saveDestination={(obj: NewDestination) => saveDestination(obj)}
            />
          }
          path="/destination/:cityID/add"
        />
        <Route element={<Home countries={countries} />} path="/" />
        <Route
          element={
            <CountryPage
              countries={countries}
              saveCurrentCountry={(id: number) => saveCurrentCountry(id)}
              saveCurrentCity={(id: any) => saveCurrentCity(id)}
            />
          }
          path="/country/:countryID"
        />
        <Route
          element={<Destinations city={currentCity} />}
          path="/destinations/:cityId"
        />
        <Route
          element={<CreateReservation />}
          path="/reservation/:destinationID/add"
        />
        <Route element={<Reservations />} path="/reservation/:destinationID" />
        <Route
          element={<UpdateDestination />}
          path="/destination/edit/:destinationID"
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
