import React from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailedMovieInfo = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("navigate", navigate);
  console.log("params", params);
  return (
    <div>
      A page For the To Be Component Go back
      <NavLink to={-1}>
        <ArrowBackIcon />
      </NavLink>
    </div>
  );
};

DetailedMovieInfo.propTypes = {};

export { DetailedMovieInfo };
