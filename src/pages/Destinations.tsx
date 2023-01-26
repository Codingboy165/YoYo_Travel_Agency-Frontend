import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const Destinations = ({ city }: any) => {
  const params = useParams();
  const [thisCity, setThisCity] = useState<any[]>([]);

  useEffect(() => {
    if (city) {
      setThisCity(city);
    }
  }, [city]);

  const fetchDestination = () => {
    axios
      .get(
        `http://localhost:1001/countries/country/cities/city/${params.cityId}/destinations`
      )
      .then((response) => setThisCity(response.data));
  };

  const deleteDestination = (id: any) => {
    axios
      .delete(`http://localhost:1001/destinations/destination/delete/${id}`)
      .then((response) => fetchDestination());
  };

  const renderDestinations = () => {
    if (thisCity.length == 0) {
      return (
        <div className="header">
          <h1>There are no destination for this city. Please add one.</h1>
        </div>
      );
    } else {
      return (
        <>
          <div className="header">
            <h1>Destinations</h1>
          </div>
          <Grid container spacing={2}>
            {thisCity?.map((destination: any) => (
              <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid item md={4}>
                    <Typography variant="h5">{destination.name}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    {destination.price} $
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="subtitle1">
                      {destination.type_of_accommodation
                        .toLowerCase()
                        .replace("_", " ")
                        .charAt(0)
                        .toUpperCase() +
                        destination.type_of_accommodation
                          .toLowerCase()
                          .replace("_", " ")
                          .slice(1)}
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Link to={`/reservation/${destination.destination_id}/add`}>
                      <Button>Add reservation</Button>
                    </Link>
                  </Grid>
                  <Grid item md={2}>
                    <Link to={`/reservation/${destination.destination_id}`}>
                      <Button>View reservations</Button>
                    </Link>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography variant="h5">Description</Typography>
                      <Typography variant="subtitle1">
                        {destination.description}
                      </Typography>
                    </Grid>
                    <Grid item md={12}>
                      <hr></hr>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Grid item> Address: {destination.address}</Grid>
                          <Grid item>
                            {" "}
                            Available rooms: {destination.available_rooms}
                          </Grid>
                        </div>

                        <Grid item>
                          <Link
                            to={`/destination/edit/${destination.destination_id}`}
                          >
                            <Button>
                              <ModeEditIcon />
                            </Button>
                          </Link>
                          <Button
                            onClick={() =>
                              deleteDestination(destination.destination_id)
                            }
                          >
                            <DeleteIcon />
                          </Button>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </>
      );
    }
  };

  return (
    <Box className="App">
      <Container maxWidth="lg" sx={{ minHeight: "85vh", marginBottom: "50px" }}>
        {renderDestinations()}
      </Container>
    </Box>
  );
};

export default Destinations;
