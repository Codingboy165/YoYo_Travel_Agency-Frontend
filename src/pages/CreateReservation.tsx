import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import reservationImage from "../images/reservation-page-img.jpg";
import { useParams } from "react-router";
import TransitionAlerts from "../components/Alert";
import axios from "axios";

const CreateReservation = () => {
  const params = useParams();
  const destinationID = params.destinationID;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rooms, setRooms] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleStartDateChange = (e: any) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e: any) => {
    setEndDate(e.target.value);
  };
  const handleRoomsChange = (e: any) => {
    setRooms(e.target.value);
  };

  const handleReservationSubmit = (obj: any) => {
    axios
      .post(
        `http://localhost:1001/destinations/destination/${obj.destinationID}/reservation/add`,
        {
          first_name: obj.firstName,
          last_name: obj.lastName,
          telephone_number: obj.phone,
          email: obj.email,
          start_date: obj.startDate,
          end_date: obj.endDate,
          how_many_rooms: obj.rooms,
        }
      )
      .then((response) => {
        setIsSuccessOpen(true);
        setIsErrorOpen(false);
        setErrMsg("");
        setRooms("");
        setEndDate("");
        setStartDate("");
        setEmail("");
        setPhone("");
        setLastName("");
        setFirstName("");
        return;
      })
      .catch((err) => {
        setErrMsg(err.response.data.statusMsg);
        setIsErrorOpen(true);
        setIsSuccessOpen(false);
        return;
      });
    return obj;
  };

  const setNotifOpen = (type: any) => {
    setIsErrorOpen(type);
  };

  const setSuccessNotifOpen = (type: any) => {
    setIsSuccessOpen(type);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleReservationSubmit({
      destinationID: destinationID,
      firstName,
      lastName,
      phone,
      email,
      startDate,
      endDate,
      rooms,
    });
  };
  return (
    <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TransitionAlerts
            label={
              "Resevation saved succesfull. Now you can create another reservation."
            }
            setOpen={(type: any) => setSuccessNotifOpen(type)}
            isOpen={isSuccessOpen}
          ></TransitionAlerts>
          <TransitionAlerts
            label={errMsg}
            isOpen={isErrorOpen}
            severity="error"
            setOpen={(type: any) => setNotifOpen(type)}
          ></TransitionAlerts>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <FormControl id="thisForm">
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
                  Create a reservation
                </Typography>
                <Grid sx={{ padding: "40px 0" }} container spacing={0}>
                  <Grid item>
                    <TextField
                      required
                      id="outlined-required"
                      label="First name"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Last name"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                    <TextField
                      inputProps={{ inputMode: "numeric" }}
                      required
                      id="outlined-required"
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="E-mail"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      type="date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      type="date"
                      value={endDate}
                      onChange={handleEndDateChange}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      type="number"
                      label="Rooms"
                      value={rooms}
                      onChange={handleRoomsChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  size="large"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </Button>
              </CardActions>
            </FormControl>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          image={reservationImage}
          alt="Img for reservation page"
        />
      </Card>
    </Container>
  );
};

export default CreateReservation;
