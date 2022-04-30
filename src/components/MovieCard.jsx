import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, img, description }) => {
  return (
    <Card className={"movie-card"} sx={{ maxWidth: 280, marginBottom: 5 }}>
      <CardMedia component="img" height="320" image={img} alt="movie" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${description.slice(0, 200)} `}
        </Typography>
        <Link to={`${id}`}>
          <Typography> Read more </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export { MovieCard };
