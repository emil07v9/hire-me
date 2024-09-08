import React from "react";
import { Button, Typography } from "@mui/material";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import { ListPaginationProps } from "../types/listPaginationInterface";

const ListPagination: React.FC<ListPaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  // Dynamic calc. of total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center gap-8">
      <Button
        size="small"
        variant="outlined"
        onClick={prev}
        disabled={currentPage === 1}
        startIcon={<ArrowLeft />}
      >
        Prev
      </Button>
      <Typography variant="body1" color="textPrimary">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </Typography>
      <Button
        size="small"
        variant="outlined"
        onClick={next}
        disabled={currentPage === totalPages}
        endIcon={<ArrowRight />}
      >
        Next
      </Button>
    </div>
  );
};

export default ListPagination;
