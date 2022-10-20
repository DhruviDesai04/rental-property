import React from "react";

import SearchIcon from '@material-ui/icons/Search';

import './Searchbar.css';

const Searchbar = ({ value, changeInput }) => {
    return (
        <div className="searchbar" id="searchbar">
            <div className="main-container">
                <div className="searchbar-content d-flex align-items-center">
                    <SearchIcon className="searchbar-icon" />
                    <input type="text" placeholder="search property for rent" value={value} onChange={changeInput} />
                </div>
            </div>
        </div>
    )
}

export default Searchbar;