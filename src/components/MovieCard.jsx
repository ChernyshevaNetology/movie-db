import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieCard = ({ title, img, description }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      <CardMedia
        className={"movie-card"}
        component="img"
        height="300"
        image={img}
        alt="movie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { MovieCard };
