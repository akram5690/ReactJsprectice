import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UpcomingMissions = () => {
  const missions = [
    { name: "Artemis II", agency: "NASA", launch: "2025", destination: "Crew mission around the Moon" },
    { name: "Artemis III", agency: "NASA", launch: "2026", destination: "First crewed Moon landing since Apollo 17" },
    { name: "Chandrayaan-4", agency: "ISRO", launch: "2025-26", destination: "Follow-up Moon mission" },
    { name: "Luna 26", agency: "Roscosmos", launch: "2027", destination: "Lunar orbiter mission" },
    { name: "Luna 27", agency: "Roscosmos", launch: "2028", destination: "Lunar lander mission" },
    { name: "Shukrayaan-1", agency: "ISRO", launch: "2025-26", destination: "Venus Orbiter Mission" },
    { name: "Mars Sample Return", agency: "NASA/ESA", launch: "2027-2028", destination: "Bringing Mars samples to Earth" },
    { name: "JUICE", agency: "ESA", launch: "2029", destination: "Studying Jupiter’s moons" },
    { name: "Dragonfly", agency: "NASA", launch: "2027", destination: "Drone mission to Titan (Saturn's moon)" },
    { name: "Europa Clipper", agency: "NASA", launch: "2025", destination: "Investigating Jupiter’s moon Europa" },
    { name: "Tianwen-3", agency: "CNSA (China)", launch: "2028-2030", destination: "Mars sample return mission" },
  ];

  const [search, setSearch] = useState("");

  // Filter missions based on search input
  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(search.toLowerCase()) ||
    mission.agency.toLowerCase().includes(search.toLowerCase()) ||
    mission.launch.toLowerCase().includes(search.toLowerCase()) ||
    mission.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">🚀 Upcoming Space Missions</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="🔍 Search missions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mission Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-lg">
          <thead className="table-dark">
            <tr>
              <th>Mission Name</th>
              <th>Agency</th>
              <th>Launch Date</th>
              <th>Destination/Purpose</th>
            </tr>
          </thead>
          <tbody>
            {filteredMissions.length > 0 ? (
              filteredMissions.map((mission, index) => (
                <tr key={index}>
                  <td className="fw-bold">{mission.name}</td>
                  <td>{mission.agency}</td>
                  <td>{mission.launch}</td>
                  <td>{mission.destination}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-danger fw-bold">No matching results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingMissions;
