import React, { useEffect, useState } from "react";
import { getProfile } from "./api";

export const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        console.log(response);
        setProfile(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };
    fetchProfile();
  }, []);
  return (
    <div>
      <p>{profile.profileName}</p>
      <p>Current Address: {profile.publicAddress}</p>
      <p>Coins: {profile.coins}</p>
    </div>
  );
};
