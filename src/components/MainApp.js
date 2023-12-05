// MainApp.js
import React, { useEffect, useState } from "react";
import ScheduleDropdown from "./ScheduleDropdown";
import AttendanceList from "./AttendanceList";
import { format } from "date-fns";

const MainApp = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Fetch data from the endpoint
    fetch("https://mern-attendance-server.vercel.app/getattendance")
      .then((response) => response.json())
      .then((data) => setAttendanceData(data))
      .catch((error) =>
        console.error("Error fetching attendance data:", error)
      );

    // Set the current day
    setCurrentDay(format(new Date(), "EEEE, do MMMM"));
  }, []);

  return (
    <div className="App">
      <h2 className="font-bold text-4xl">Attendance for {currentDay}</h2>
      <ScheduleDropdown />
      <AttendanceList attendanceData={attendanceData} />
    </div>
  );
};

export default MainApp;
