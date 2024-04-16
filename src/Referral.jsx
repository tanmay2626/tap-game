import React from "react";
import { useState, useEffect } from "react";
import { getUserStats, getProfile } from "./api";

export const Referral = () => {
  const [refData, setRefData] = useState([]);
  const [referralCode, setReferralCode] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      //toastify : setCopySuccess('Copied!');
    } catch (err) {
      //toastify : setCopySuccess('Failed to copy!');
    }
  };

  useEffect(() => {
    const fetchAllStats = async () => {
      try {
        const response = await getUserStats();
        console.log(response);
        setRefData(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };

    const fetchReferralCode = async () => {
      try {
        const response = await getProfile();
        console.log(response.referralCode);
        setReferralCode(response.referralCode);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };
    fetchAllStats();
    fetchReferralCode();
  }, []);
  return (
    <div>
      <p>Coins: {refData.coins}</p>
      <p>
        Total Referrals: {refData.directReferrals + refData.indirectReferrals}
      </p>
      <button onClick={handleCopy}>Copy link</button>
    </div>
  );
};
