// src/components/StatsCard.js
import React from "react";
import "./StatsCard.css";

const StatsCard = ({ platform, icon, followers, username }) => {
  return (
    <div className="stats-card">
      <img src={icon} alt={platform} style={{ width: "50px", height: "50px", marginBottom: "5px", marginTop: "15px" }} />
      <h3 className="platform-name">{platform}</h3>
      <p className="username">@{username}</p>
      <h2 className="follower-count">{followers.toLocaleString()}</h2>
    </div>
  );
};

export default StatsCard;