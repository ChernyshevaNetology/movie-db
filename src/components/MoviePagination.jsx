import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const MoviePagination = ({ currentPage, handlePageChange }) => {
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
