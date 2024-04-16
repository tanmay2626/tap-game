import React, { useEffect, useState } from "react";
import { getLeaderboard } from "./api";

export const Leaderboard = () => {
  const [leads, setLeads] = useState(null);
  const [currLevel, setCurrLevel] = useState(1);
  useEffect(() => {
    const fetchAllLeads = async () => {
      try {
        const response = await getLeaderboard(currLevel);
        console.log(response);
        setLeads(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };
    fetchAllLeads();
  }, [currLevel]);

  const incrementLevel = () => {
    setCurrLevel((prev) => prev + 1);
  };

  const decrementLevel = () => {
    setCurrLevel((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={decrementLevel}>Pathi</button>
      <button onClick={incrementLevel}>Pudhe</button>
      <div>
        {leads?.map((lead) => {
          return (
            <div key={lead.id}>
              <p>{lead.username}</p>
              <p>{lead.rank}</p>
              <p>{lead.coins}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
