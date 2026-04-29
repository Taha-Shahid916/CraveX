const ResShimmer = () => {
  return (
    <div className="shimmer-menu">
      {/* Restaurant Name Shimmer */}
      <div className="shimmer-title shimmer-animate"></div>
      
      {/* Cuisines Shimmer */}
      <div className="shimmer-subtitle shimmer-animate"></div>
      
      {/* Menu Title Shimmer */}
      <div className="shimmer-menu-title shimmer-animate"></div>

      {/* Menu Items Shimmer */}
      <ul className="shimmer-list">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item} className="shimmer-item">
            <div className="shimmer-item-info">
              <div className="shimmer-item-name shimmer-animate"></div>
              <div className="shimmer-item-price shimmer-animate"></div>
              <div className="shimmer-item-description shimmer-animate"></div>
              <div className="shimmer-item-description-short shimmer-animate"></div>
            </div>
            <div className="shimmer-item-right">
              <div className="shimmer-item-img shimmer-animate"></div>
              <div className="shimmer-button-div">
                <div className="shimmer-add-btn shimmer-animate"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResShimmer;