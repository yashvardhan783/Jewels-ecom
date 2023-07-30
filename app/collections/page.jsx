'use client'

import React from 'react'
import './collection.css'
import Link from 'next/link'
import ProductList from '@/constant/List'

import { useState, useEffect } from "react";


const ProductCard = (props) => {
    const data = props.data;
    // console.log(data);
    return (
        <div class="col-md-3">

            <div class="product-single-card">
                <div class="product-top-area">
                    <div class="product-discount">
                        {data.newPrice}
                    </div>

                    <div class="product-img">
                        <div class="first-view">
                            <img src={data.Img[0].replaceAll("540", "240")} alt="logo" class="img-fluid" onerror="this.src='https://i.ibb.co/qpB9ZCZ/placeholder.png'" />
                        </div>
                        <div class="hover-view">
                            <img src={data.Img[0].replaceAll("540", "240")} alt="logo" class="img-fluid" onerror="this.src='https://i.ibb.co/qpB9ZCZ/placeholder.png'" />
                        </div>
                    </div>
                    <div class="sideicons">
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-shuffle"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h6 class="product-category"><a href="#">{data.category} </a></h6>
                    <h6 class="product-title text-truncate"><a href="#">{data.title}</a></h6>
                    <div class="d-flex align-items-center">
                        <div class="review-star me-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>

                        <span class="review-count">(13)</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center py-2">
                        <div class="old-price">
                            {data.oldPrice}

                        </div>
                        <div class="new-price">
                            {data.newPrice}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const collections = () => {


    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const allTags = ["Earring", "Mangalsutra", "Ring", "Bangels"]
    const [allPosts, setAllPosts] = useState(ProductList);

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchText, "i");
        return allPosts.filter(
            (item) =>
                regex.test(item.title) || regex.test(item.category)
        );
    };

    const handleSearchChange = (e) => {
        console.log(searchText);
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);
        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };
    return (
        <div className='Collection-cont'>

            <div className='search-cont1'>

                <div class="search1">
                    <input
                        value={searchText}
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Search for it .."
                    />
                </div>


            </div>
            <div className='jewel-cateogry'>
                {/* <p>
                    All Jewellery | 27689 DESIGNS

                </p> */}
            </div>
            <div className='tags'>
                {
                    allTags?.map((tag, id) => {
                        return (
                            <p
                                className='login-button'
                                key={id}
                                onClick={() => { handleTagClick(tag) }}
                            >
                                {tag}
                            </p>
                        );
                    })}

                {/* <p className='login-button' onClick={() => { handleTagClick() }}>Earring</p>
                <p className='login-button'>Mangalsutra</p>
                <p className='login-button'>Ring</p>
                <p className='login-button'>Bangels</p> */}
            </div>
            <div className="product-cont">
                {searchText ? (
                    searchedResults.map((elem) => (
                        <Link href={`/product/${elem.id}`} key={elem.id}>
                            <ProductCard data={elem} />
                        </Link>
                    ))
                ) : (
                    allPosts.map((elem) => (
                        <Link href={`/product/${elem.id}`} key={elem.id}>
                            <ProductCard data={elem} />
                        </Link>
                    ))
                )}

            </div>


        </div>
    )
}

export default collections