import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFkODM4Nzc3ZGY2MDU4NWUzZjk1MDciLCJhY2NvdW50SWQiOiIzMjg0MmMzNjMwODc0NTlkOWYyNTk4Yjk4NmYiLCJpYXQiOjE3MTMyMTgxMDYsImV4cCI6MTcxMzIyMzI5MH0.qD38nB2Q-q9ptouCgtF1gGDSzwuVQ0PuMLlKCkqhkUY";

const authenticate = async (userData, referralCode) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/login?referralCode=${referralCode}`,
      {
        publicAddress: "0xx",
        email: "tanmay@gmail.com",
        telegramId: 2134334,
        telegramUsername: "twaykar",
        telegramIsPremium: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// response : token, status (new user)

const getProfile = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// response : for profile section

const logout = async (accessToken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// in profile

// accessToken
const getAllTasks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// for tasks closed view

const getTaskById = async (taskId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/tasks/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// task open view

const verifyTask = async (taskId, accessToken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/tasks/verify/:userId/:taskId`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// verify task button - success: true/false

const claimReward = async (taskId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/tasks/claim/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// coins and message

const connectTwitter = async (twitterDetails, accessToken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/connect/twitter`,
      {
        twitterId: 328739,
        titterUsername: "twaykar8",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// verify task button - success: true/false

const getLeaderboard = async (level) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/leaderboard?level=${level}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// array with { accountID, username, coins }

const getUserStats = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/userStats`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// For landing page : coins, rank. directRefferal, IndirectRefferals, totalUsers,currentLeague,

const getAccountRaffleInfo = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/raffleInfo`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};

// Dino and Tasks section - coins, rank, doneTasks[ ], highestCard, drawnCards[ ]
// And tasks section to filter

export {
  authenticate,
  getProfile,
  logout,
  getAllTasks,
  getTaskById,
  verifyTask,
  claimReward,
  connectTwitter,
  getLeaderboard,
  getUserStats,
  getAccountRaffleInfo,
};

// 11 routes - non game
