// src/pages/Dashboard.js
import React from "react";
// import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import "./Dashboard.css";
import TelegramStatsCard from "../components/telegramdata"

const icons = {
  Instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  Twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  Facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  Telegram: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <Navbar /> */}
      <h1>User Profile</h1>
      <div className="card-grid">
        <StatsCard platform="Instagram" username="TCET" icon={icons.Instagram} followers={12200} color="#E1306C" />
        <StatsCard platform="Twitter" username="TCET" icon={icons.Twitter} followers={8900} color="#1DA1F2" />
        <StatsCard platform="Facebook" username="TCET" icon={icons.Facebook} followers={10450} color="#1877F2" />
        <TelegramStatsCard platform="Telegram" username="TCET_Group" icon={icons.Telegram} color="#0088cc" />
      </div>
    </div>
  );
};

export default Dashboard;
