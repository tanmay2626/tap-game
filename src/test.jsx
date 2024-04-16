import React, { useState, useEffect } from "react";

export const Game = () => {
  const [points, setPoints] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((currentEnergy) => {
        const updatedEnergy = currentEnergy + 1;
        return updatedEnergy > 100 ? 100 : updatedEnergy;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTap = () => {
    if (energy > 0) {
      setPoints(points + 1);
      const newEnergy = Math.max(0, energy - 5);
      setEnergy(newEnergy);
    }
    setLastActiveTime(Date.now());
  };

  useEffect(() => {
    const storedPoints = parseInt(localStorage.getItem("points")) || 0;
    const storedEnergy = parseInt(localStorage.getItem("energy")) || 100;
    const storedLastActive =
      parseInt(localStorage.getItem("lastActive")) || Date.now();
    const timeNow = Date.now();
    const secondsSinceLast = Math.floor((timeNow - storedLastActive) / 1000);
    const recoveredEnergy = Math.min(100, storedEnergy + secondsSinceLast);
    setPoints(storedPoints);
    setEnergy(Math.max(0, recoveredEnergy));
    setLastActiveTime(storedLastActive);
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem("points", points);
      localStorage.setItem("energy", energy);
      localStorage.setItem("lastActive", lastActiveTime);
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [points, energy, lastActiveTime]);

  return (
    <div>
      <h1>Tap Game</h1>
      <button onClick={handleTap} disabled={energy <= 0}>
        Tap Me!
      </button>
      <p>Points: {points}</p>
      <p>Energy: {energy}</p>
    </div>
  );
};
