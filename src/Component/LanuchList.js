import React, { useEffect, useState } from "react";
import axios from "axios";

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios
      .get("https://services.isrostats.in/api/launches")
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((error) => console.error("Error fetching launches:", error));
  }, []);
  return (
    <div className="launch-list-container">
      <h1 className="launch-list-heading">ISRO LAUNCHES</h1>
      <div className="launch-card-container">
        {launches.map((launch, index) => (
          <div key={launch.UUID} className="launch-card">
            <h3>{launch.Name}</h3>
            <p>
              <strong>Serial Number:</strong> {launch.SerialNumber}
            </p>
            <p>
              <strong>Launch Date:</strong> {launch.LaunchDate}
            </p>
            <p>
              <strong>Launch Type:</strong> {launch.LaunchType}
            </p>
            <p>
              <strong>Payload:</strong> {launch.Payload}
            </p>
            <p>
              <strong>Mission Status:</strong> {launch.MissionStatus}
            </p>
            <a href={launch.Link} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchList;
