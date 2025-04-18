const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Social media stats data (eventually this would come from a database)
let socialMediaStats = [
  { platform: "Instagram", username: "TCET", followers: 12200, color: "#E1306C" },
  { platform: "Twitter", username: "TCET", followers: 8900, color: "#1DA1F2" },
  { platform: "Facebook", username: "TCET", followers: 10450, color: "#1877F2" },
  { platform: "YouTube", username: "TCET", followers: 15200, color: "#FF0000" }
];

// API Routes
app.get('/api/stats', (req, res) => {
  res.json(socialMediaStats);
});

// Route to update followers count
app.put('/api/stats/:platform', (req, res) => {
  const { platform } = req.params;
  const { followers } = req.body;
  
  const platformIndex = socialMediaStats.findIndex(
    stat => stat.platform.toLowerCase() === platform.toLowerCase()
  );
  
  if (platformIndex === -1) {
    return res.status(404).json({ message: 'Platform not found' });
  }
  
  socialMediaStats[platformIndex].followers = followers;
  res.json(socialMediaStats[platformIndex]);
});

// Add a new platform
app.post('/api/stats', (req, res) => {
  const { platform, username, followers, color } = req.body;
  
  // Check if platform already exists
  const exists = socialMediaStats.some(
    stat => stat.platform.toLowerCase() === platform.toLowerCase()
  );
  
  if (exists) {
    return res.status(400).json({ message: 'Platform already exists' });
  }
  
  const newPlatform = { platform, username, followers, color };
  socialMediaStats.push(newPlatform);
  
  res.status(201).json(newPlatform);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});