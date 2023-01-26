import { Accordion, AccordionDetails, AccordionSummary, Button, Box, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardContainer from '../components/CardContainer';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const Reservations = () => {
  const params = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1001/destinations/destination/${params.destinationID}/reservations`)
      .then((response) => setReservations(response.data))
  }, []);

  const renderReservation = () => {
    if(reservations.length == 0) {
      return <div className="header">
        <h1>There are no reservation for this destination</h1>
      </div>
    } else {
      return <>
        <div className="header">
          <h1>Reservations</h1>
        </div>
         <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">E-Mail</TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right">Till</TableCell>
                <TableCell align="right">Rooms</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((row: any) => (
                <TableRow
                  key={row.destination_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.telephone_number}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.start_date}</TableCell>
                  <TableCell align="right">{row.end_date}</TableCell>
                  <TableCell align="right">{row.how_many_rooms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              {reservations?.map((country: any) => (
                <Grid item md={3} key={country.id}>
                  
                </Grid>
              ))}
            </Grid>
            </>
    }
  }

  return (
    <Box className="App">
      <Container maxWidth="lg" sx={{minHeight: '85vh', marginBottom: '50px'}}>
        {renderReservation()}
        
      </Container>
    </Box>
  )
}

export default Reservations