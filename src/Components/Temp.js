import React from 'react';
import "../CSS/ThapaWeather.css"

const Temp = () => {
    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" 
                type="search"
                placeholder="Search..."
                autoFocus
                id="search"
                className="searchTerm"
                />
                <button className="searchButton" type="button">
                    Search
                </button>
            </div>
        </div>
        </>
    )
}

export default Temp;
