import React from 'react';
import { FiCode, FiAward, FiStar, FiArrowUpRight } from 'react-icons/fi';
import './Stats.css';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: <FiCode />,
      number: "4",
      label: "TOTAL PROJECTS",
      description: "Full-stack & frontend solutions crafted"
    },
    {
      id: 2,
      icon: <FiAward />,
      number: "3",
      label: "CERTIFICATES",
      description: "Professional skills validated"
    },
    {
      id: 3,
      icon: <FiStar />,
      number: "8.38",
      label: "CGPA",
      description: "B.Tech Computer Engineering, 2027"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon-container">
                {stat.icon}
              </div>
              <span className="stat-number">{stat.number}</span>
            </div>

            <div className="stat-card-bottom">
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>

            <div className="stat-arrow">
              <FiArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;