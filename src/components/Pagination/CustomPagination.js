import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Stack spacing={2} display="fixed">
      <Pagination
        color="secondary"
        count={numberOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </Stack>
  );
};

export default CustomPagination;
