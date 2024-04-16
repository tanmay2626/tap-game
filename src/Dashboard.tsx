import React, { useEffect, useState } from "react";
import { getUserStats } from "./api";

export const Stats = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchAllStats = async () => {
      try {
        const response = await getUserStats();
        console.log(response);
        setStats(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };
    fetchAllStats();
  }, []);
  return <div>Dashboard</div>;
};
