import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";
import { Child } from "../types/childInterface";

const ChildrenList: React.FC = () => {
  const [children, setChildren] = useState<Child[]>([]);
  const accessToken = "1127a03c-ed76-41d5-9058-f9ca105c41cf";
  const [checkedInChildren, setCheckedInChildren] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await axios.get(
          `https://app.famly.co/api/daycare/tablet/group`,
          {
            params: {
              accessToken,
              groupId: "86413ecf-01a1-44da-ba73-1aeda212a196",
              institutionId: "dc4bd858-9e9c-4df7-9386-0d91e42280eb",
            },
          }
        );
        console.log("API Response:", response.data);
        setChildren(
          response.data.children.map((child: any) => ({
            childId: child.childId,
            name: {
              fullName: child.name.fullName,
            },
          }))
        );
      } catch (error) {
        console.error("Error fetching children:", error);
      }
    };
    fetchChildren();
  }, [accessToken]);

  const handleCheckin = async (id: string) => {
    try {
      const pickupTime = "16:00";

      const response = await axios.post(
        `https://app.famly.co/api/v2/children/${id}/checkins`,
        new URLSearchParams({
          accessToken,
          pickupTime,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Check-in response:", response.data);
      setCheckedInChildren((prev) => new Set(prev.add(id)));
    } catch (error) {
      console.error("Error checking in child:", error);
    }
  };

  const handleCheckout = async (id: string) => {
    try {
      const response = await axios.post(
        `https://app.famly.co/api/v2/children/${id}/checkout`,
        new URLSearchParams({
          accessToken,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Check-out response:", response.data);
      setCheckedInChildren((prev) => {
        const updated = new Set(prev);
        updated.delete(id);
        return updated;
      });
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  return (
    <div>
      {children.map((child) => (
        <ChildCard
          key={child.childId}
          id={child.childId}
          name={child.name.fullName}
          checkedIn={checkedInChildren.has(child.childId)}
          onCheckin={handleCheckin}
          onCheckout={handleCheckout}
        />
      ))}
    </div>
  );
};

export default ChildrenList;
