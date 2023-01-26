import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { CardComponent } from "../model/CardComponent";
import { Link } from "react-router-dom";
import "./CardContainer.css";

const CardContainer = ({
  id,
  cardName,
  img = "",
  description = "",
}: CardComponent) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Image " height="140" image={img} />
      <CardContent>
        <div style={{ height: "300px", overflowY: "auto" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/country/${id}`} style={{ textDecoration: "none" }}>
          <Button size="large" variant="contained">
            Cities
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardContainer;
