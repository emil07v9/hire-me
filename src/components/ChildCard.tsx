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
    <div className="bg-cardGrey rounded-xl max-w-96 md:grid grid-cols-3">
      <p>{name}</p>
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
