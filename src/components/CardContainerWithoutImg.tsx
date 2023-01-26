import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import React from "react";
import { Link} from "react-router-dom";
import { CardComponentWithoutImg } from "../model/CardComponentWithoutImg";

const CardContainerWithoutImg = ({
  id,
  cardName,
  saveCurrentCity
}: CardComponentWithoutImg) => {

  const saveCityID = () => {
    saveCurrentCity(id);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/destinations/${id}`} onClick={()=>saveCityID()}>
          <Button size="small">
            Destinations
          </Button>
        </Link>
        <Link to={`/destination/${id}/add`}>
          <Button size="small">Create destination</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardContainerWithoutImg;
