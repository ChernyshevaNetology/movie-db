import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

const MoviePagination = ({ currentPage, handlePageChange }) => {
  const params = useParams();
  console.log("---------------------------------");
  console.log("params from MoviePagination", params);
  console.log("---------------------------------");

  return (
    <div className="pagination">
      <Pagination
        onChange={handlePageChange}
        page={currentPage}
        count={100}
        color="secondary"
        renderItem={(item) => (
          <PaginationItem
            component={NavLink}
            to={`/movies/${item.page}`}
            {...item}
          />
        )}
      />
    </div>
  );
};

export { MoviePagination };
