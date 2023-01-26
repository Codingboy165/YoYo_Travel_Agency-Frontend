import { Box, Grid, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import { Country } from "../model/Country";

const Home = ({ countries }: any) => {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(8);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [currentRecords, setCurrentRecords] = useState<any[]>([]);

  useEffect(() => {
    if (countries) {
      setPagesNumber(Math.ceil(countries.length / recordsPerPage));
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      setCurrentRecords(countries.slice(indexOfFirstRecord, indexOfLastRecord));
    }
  }, [countries, currentPage]);

  const handlePaginationChange = (e: any, page: any) => {
    setCurrentPage(page);
  };

  return (
    <Box className="App">
      <Container maxWidth="lg">
        <div className="header">
          <h1>Welcome to the YoYo travel agency</h1>
        </div>
        <Grid container spacing={2}>
          {currentRecords?.map((country: any) => (
            <Grid item md={3} key={country.id}>
              <CardContainer
                id={country.id}
                cardName={country.name}
                img={`./images/${country.imageSrc}.jpg`}
                description={country.description}
              ></CardContainer>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 0",
            backgroundColor: "#FFF",
            marginTop: "30px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "30px",
            width: "500px",
          }}
        >
          <Pagination
            count={pagesNumber}
            page={currentPage}
            onChange={handlePaginationChange}
          />
        </div>
      </Container>
    </Box>
  );
};

export default Home;
