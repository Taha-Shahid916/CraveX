import React from "react";

const UserShimmer = () => {
  return (
    <div className="users-container">
      <h2 className="section-title">Meet Our Team</h2>
      {[1, 2, 3].map((index) => (
        <div className="user-card-shimmer" key={index}>
          <div className="shimmer-avatar"></div>
          <div className="shimmer-name"></div>
          <div className="shimmer-location"></div>
          <div className="shimmer-bio">
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
          </div>
          <div className="shimmer-social-icons">
            <div className="shimmer-icon"></div>
            <div className="shimmer-icon"></div>
            <div className="shimmer-icon"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserShimmer;