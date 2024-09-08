import React from "react";
import { Button } from "@mui/material";
import { ChildCardProps } from "../types/childCardInterface";

const ChildCard: React.FC<ChildCardProps> = ({
  name,
  id,
  checkedIn,
  onCheckin,
  onCheckout,
}) => {
  return (
    <div className="bg-lightGrey rounded-xl mb-2 px-4 py-6 max-w-prose md:grid grid-cols-3">
      <p className="mb-2 md:mb-0 md:flex items-center">{name}</p>
      <Button
        onClick={() => onCheckin(id)}
        disabled={checkedIn}
        variant="contained"
        color="primary"
      >
        Check-In
      </Button>
      <Button onClick={() => onCheckout(id)} disabled={!checkedIn}>
        Check-Out
      </Button>
    </div>
  );
};

export default ChildCard;
