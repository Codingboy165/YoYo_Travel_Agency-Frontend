import React, { useState, useEffect } from "react";
import { SaveDestination } from "../model/SaveDestination";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import destinationImage from "../images/hotels.jpg";
import { useParams } from "react-router";
import TransitionAlerts from "../components/Alert";

const CreateDestination = ({ saveDestination }: SaveDestination) => {
  const params = useParams();
  const [destinationName, setDestinationName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [rooms, setrooms] = useState("");
  const [isError, setIsError] = useState(false);
  const [cityID, setCityID] = useState(params?.cityID);
  const [isOpen, setIsOpen] = useState(false);

  const handleDestinationSubmit = (e: any) => {
    e.preventDefault();
    if (
      destinationName.length < 5 ||
      price.length < 1 ||
      type.length < 1 ||
      rooms.length < 1 ||
      description.length < 81
    ) {
      setIsError(true);
    } else {
      saveDestination({
        destinationName,
        price,
        type,
        description,
        rooms,
        cityID,
        address,
      });
      setIsOpen(true);
      setDestinationName("");
      setPrice("");
      setType("");
      setDescription("");
      setrooms("");
      setAddress("");
    }
  };

  const handleNameChange = (e: any) => {
    setIsError(false);
    setDestinationName(e.target.value);
  };
  const handlePriceChange = (e: any) => {
    setIsError(false);
    setPrice(e.target.value);
  };
  const handleTypeChange = (e: any) => {
    setIsError(false);
    setType(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setIsError(false);
    setDescription(e.target.value);
  };
  const handleAddressChange = (e: any) => {
    setIsError(false);
    setAddress(e.target.value);
  };
  const handleRoomsChange = (e: any) => {
    setIsError(false);
    setrooms(e.target.value);
  };
  const setNotifOpen = (type: any) => {
    setIsOpen(type);
  };

  return (
    <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TransitionAlerts
            label={
              "Destination saved succesfull. Now you can create another destination."
            }
            isOpen={isOpen}
            setOpen={(type: any) => setNotifOpen(type)}
          ></TransitionAlerts>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography
                variant="h5"
                color={"#000"}
                sx={{ textAlign: "center" }}
              >
                Create a destination
              </Typography>
              <Grid sx={{ padding: "40px 0" }} container spacing={0}>
                <Grid item>
                  <TextField
                    error={destinationName.length < 5 && isError ? true : false}
                    helperText={
                      destinationName.length < 5 && isError
                        ? "The Name should be at least 5 caracters"
                        : ""
                    }
                    required
                    id="outlined-required"
                    label="Name"
                    value={destinationName}
                    onChange={(e) => handleNameChange(e)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    error={price.length < 1 && isError ? true : false}
                    helperText={
                      price.length < 1 && isError
                        ? "This field is mandatory"
                        : ""
                    }
                    type="number"
                    id="outlined-required"
                    label="Price $"
                    value={price}
                    onChange={(e) => handlePriceChange(e)}
                  />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                  <FormControl
                    fullWidth
                    sx={{ width: "216px", margin: "0 9px" }}
                    error={type == "" && isError ? true : false}
                  >
                    <InputLabel id="type-of-accomodation">
                      Type of accomodation
                    </InputLabel>
                    <Select
                      labelId="type-of-accomodation"
                      required
                      value={type}
                      label="Type of accomodation"
                      onChange={(e) => handleTypeChange(e)}
                    >
                      <MenuItem value="HOUSE">House</MenuItem>
                      <MenuItem value="VILLA_HOUSE">Villa house</MenuItem>
                      <MenuItem value="HOTEL">Hotel</MenuItem>
                      <MenuItem value="MOTEL">Motel</MenuItem>
                      <MenuItem value="GUESTHOUSE">Guest house</MenuItem>
                    </Select>
                    <FormHelperText>
                      {type == "" && isError ? "This field is mandatory" : ""}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    required
                    error={description.length < 81 && isError ? true : false}
                    helperText={
                      description.length < 81 && isError
                        ? "The description should be at least 80 caracters"
                        : ""
                    }
                    id="outlined-required"
                    label="Description"
                    value={description}
                    onChange={(e) => handleDescriptionChange(e)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    error={address.length < 1 && isError ? true : false}
                    helperText={
                      description.length < 1 && isError
                        ? "This field is mandatory"
                        : ""
                    }
                    id="outlined-required"
                    label="Address"
                    value={address}
                    onChange={(e) => handleAddressChange(e)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="outlined-required"
                    label="Room number"
                    error={rooms.length < 1 && isError ? true : false}
                    helperText={
                      rooms.length < 1 && isError
                        ? "This field is mandatory"
                        : ""
                    }
                    value={rooms}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="number"
                    onChange={(e) => handleRoomsChange(e)}
                  />
                </Grid>
              </Grid>
            </Box>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                size="large"
                onClick={handleDestinationSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          image={destinationImage}
          alt="Img for destination page"
          sx={{ minWidth: "100%", maxHeight: "700px" }}
        />
      </Card>
    </Container>
  );
};

export default CreateDestination;
