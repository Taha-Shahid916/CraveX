const Shimmer = () => {
    return (
        <div className="shimmer-wrapper">
            {/* Shimmer for filter buttons */}
            <div className="button-shimmer-container">
                <div className="button-shimmer-card"></div>
                <div className="button-shimmer-card"></div>
                <div className="button-shimmer-card"></div>
                <div className="button-shimmer-card"></div>
                <div className="button-shimmer-card"></div>
            </div>

            {/* Shimmer for search bar */}
            <div className="search-shimmer">
                <div className="searchbar-shimmer"></div>
                <div className="Searchbutton-shimmer"></div>
            </div>

            {/* Shimmer for restaurant cards */}
            <div className="shimmer-container">
                {Array(10).fill("").map((_, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer-image"></div>
                        <div className="shimmer-title"></div>
                        <div className="shimmer-text"></div>
                        <div className="shimmer-text"></div>
                        <div className="shimmer-text"></div>
                        <div className="shimmer-button"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;