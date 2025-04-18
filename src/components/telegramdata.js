import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StatsCard.css";

const TelegramStatsCard = ({ platform, icon, username }) => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchTelegramCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/telegram/members");
        setCount(res.data.count);
      } catch (err) {
        console.error("Failed to fetch Telegram stats", err);
      }
    };

    fetchTelegramCount();
  }, []);

  return (
    <div className="stats-card telegram-card">
      <img src={icon} alt={platform} style={{ width: "50px", height: "50px", marginBottom: "5px", marginTop: "15px" }} />
      <h3 className="platform-name">{platform}</h3>
      <p className="username">@{username}</p>
      <h3 className="follower-count">{count !== null ? `${count} members` : "Loading..."}</h3>
    </div>
  );
};

export default TelegramStatsCard;
