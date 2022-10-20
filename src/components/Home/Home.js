import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import Navbars from "./Navbars/Navbars";
import Searchbar from "./Searchbar/Searchbar";
import FilterList from "./FilterList/FilterList";
import List from "./List/List";
import { dataList } from "../../Data/data";
import Empty from "./Empty/Empty";
import Footer from "./Footer/Footer";

import './Home.css';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [locs, setlocs] = useState([
        { id: 1, checked: false, label: 'New York, USA' },
        { id: 2, checked: false, label: 'India' },
        { id: 3, checked: false, label: 'Ontario, Canada' },
        { id: 4, checked: false, label: 'Kolkata, India' },
        { id: 5, checked: false, label: 'Bangluru' },
        { id: 6, checked: false, label: 'Maldives' },
    ]);

    const [selectedPrice, setSelectedPrice] = useState([1000, 10000]);

    const [selectedRating, setSelectedRating] = useState(null);

    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');


    const handleSelectCategory = (event, value) =>
        !value ? null : setSelectedCategory(value);

    const handleChangeChecked = (id) => {
        const cusinesStateList = locs;
        const changeCheckedlocs = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setlocs(changeCheckedlocs);
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    const handleSelectRating = (event, value) =>
        !value ? null : setSelectedRating(value);


    const applyFilters = () => {
        let updatedList = dataList;

        // Rating Filter
        if (selectedRating) {
            updatedList = updatedList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Category Filter
        if (selectedCategory) {
            updatedList = updatedList.filter(
                (item) => item.category === selectedCategory
            );
        }

        // loc Filter
        const locsChecked = locs
            .filter((item) => item.checked)
            .map((item) =>
                // console.log(item.label)
                item.label  
            );

        if (locsChecked.length) {
            updatedList = updatedList.filter((item) =>
                locsChecked.includes(item.loc)
            );
        }

        // Search Filter
        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }

        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        setList(updatedList);

        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };

    useEffect(() => {
        applyFilters();
    }, [selectedRating, selectedCategory, locs, searchInput, selectedPrice]);

    return (
        <div className="home" id="home">
            <Row className="main-container">
                <Navbars />
            </Row>
            <Row className="searchbar-component">
                <Searchbar
                    value={searchInput}
                    changeInput={(e) => setSearchInput(e.target.value)}
                />
            </Row>
            <Row className="main-container lists-component d-flex">
                <Col sm={3}>
                    <FilterList
                        selectedCategory={selectedCategory}
                        selectCategory={handleSelectCategory}
                        selectedRating={selectedRating}
                        selectedPrice={selectedPrice}
                        selectRating={handleSelectRating}
                        locs={locs}
                        changeChecked={handleChangeChecked}
                        changePrice={handleChangePrice}
                    />
                </Col>
                <Col sm={9}>
                    {resultsFound ? <List list={list} /> : <Empty />}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default Home;