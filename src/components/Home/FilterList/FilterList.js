import React from "react";

import { categoryList, ratingList } from "../../../Data/data";
import FilterListToggle from "./FilterListToggle/FilterListToggle";
import Checkboxes from "./Checkboxes/Checkboxes";
import PriceSlider from "./PriceSlider/PriceSlider";

import './FilterList.css';

const FilterList = ({ 
    selectedCategory,
    selectCategory, 
    locs, 
    changeChecked, 
    selectedPrice, 
    changePrice,
    selectedRating, 
    selectRating }) => {
    return (
        <div className="filter-list" id="filter-list">
            {/* Category */}
            <div className="input-group">
                <p className="label">
                    Property Types
                </p>
                <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectCategory} />
            </div>

            {/* When */}

            {/* Location */}
            <div className="input-group">
                <p className="label">
                    Location
                </p>
                {locs.map((loc) => (
                    <Checkboxes
                        key={loc.id}
                        loc={loc}
                        changeChecked={changeChecked}
                    />
                ))}
            </div>

            {/* Price */}
            <div className="input-group">
                <p className="label-range">
                    Price
                </p>
                <PriceSlider value={selectedPrice} changePrice={changePrice} />
            </div>

            {/* Ratings */}
            <div className='input-group'>
                <p className='label'>Star Rating</p>
                <FilterListToggle
                    options={ratingList}
                    value={selectedRating}
                    selectToggle={selectRating}
                />
            </div>
        </div>
    )
}

export default FilterList;