import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../model/Country";
import CardContainerWithoutImg from "../components/CardContainerWithoutImg";
import { Container } from "@mui/system";

const CountryPage = ({ countries, saveCurrentCity }: any) => {
  const [citieses, setCitieses] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    if (params !== undefined) {
      setCitieses(
        countries?.filter(
          (country: Country) => country?.id === Number(params.countryID)
        )[0].cities
      );
    }
  }, [countries]);

  return (
    <Box className="App">
      <Container maxWidth="lg" sx={{ minHeight: "85vh" }}>
        <div className="header">
          <h1>There are the cities, in this country:</h1>
        </div>
        <Grid container spacing={2}>
          {citieses?.map((city: any) => (
            <Grid item md={3} key={city.id}>
              <CardContainerWithoutImg
                id={city.id}
                cardName={city.name}
                saveCurrentCity={saveCurrentCity}
              ></CardContainerWithoutImg>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CountryPage;
