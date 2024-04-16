import React, { useEffect, useState } from "react";
import {
  claimReward,
  getAccountRaffleInfo,
  getAllTasks,
  getTaskById,
  verifyTask,
} from "./api";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const response = await getAllTasks();
        console.log(response);
        setTasks(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };

    const fetchDoneTasks = async () => {
      try {
        const response = await getAccountRaffleInfo();
        console.log(response);
        setCompletedTasks(response);
      } catch (error) {
        console.error("Error: ", error);
        //   Toastify("Error uploading file");
      }
    };

    fetchDoneTasks();
    fetchAllTasks();
  }, []);

  const getTask = async (taskId) => {
    try {
      const response = await getTaskById(taskId);
      console.log(response);
      setTask(response);
    } catch (error) {
      console.error("Error: ", error);
      //   Toastify("Error uploading file");
    }
  };

  const fetchTaskStatus = async () => {
    try {
      const response = await verifyTask(task._id);
      console.log(response);
    } catch (error) {
      console.error("Error: ", error);
      //   Toastify("Error uploading file");
    }
  };

  const fetchTaskRewardStatus = async () => {
    try {
      const response = await claimReward(task._id);
      console.log(response);
    } catch (error) {
      console.error("Error: ", error);
      //   Toastify("Error uploading file");
    }
  };

  return (
    <div>
      {task ? (
        <div>
          <p>Task Name: {task.taskName}</p>
          <p>Icon : {task.type}</p>
          <p>Reward : {task.coins}</p>
          <p>Action : {task.type}</p>
          <p>Status : {task.status}</p>
          <button onClick={fetchTaskStatus}>veriify task</button>
          <button onClick={fetchTaskRewardStatus}>claim reward</button>
        </div>
      ) : (
        tasks?.map((item) => {
          return (
            <div
              onClick={() => {
                getTask(item._id);
              }}
              key={item._id}
              style={{ border: "2px red solid" }}
            >
              <p>Task Name: {item.taskName}</p>
              <p>Icon : {item.type}</p>
              <p>Reward : {item.coins}</p>
              <p>Category : {item.category}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
