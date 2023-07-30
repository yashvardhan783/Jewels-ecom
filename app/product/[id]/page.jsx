'use client'
import React, { useState } from 'react'
import './product.css'
import { useParams } from "next/navigation";

import ProductList from '@/constant/List'

const ProductDetail = () => {

    const [imgId, setImgId] = useState(1);
    const params = useParams();
    const _id = params.id;
    // console.log(_id);

    let data = {};

    // console.log(ProductList.length);
    for (let index = 0; index < ProductList.length; index++) {
        if (index + 1 == _id) {
            data = ProductList[index];

            break;
        }

    }

    const Img = data.Img;
    const slideImage = () => {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    };

    const handleImageClick = (event, id) => {
        event.preventDefault();
        setImgId(id);
        slideImage();
    };

    return (
        <div className='product_details'>

            <div className="card-wrapper">
                <div className="card">
                    {/* card left */}
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                {Img.map((product, index) => {
                                    return (
                                        <img key={index} src={product} alt="shoe image" />
                                    );
                                })}

                            </div>
                        </div>
                        <div className="img-select">
                            {Img.map((product, index) => {
                                return (

                                    <div key={index} className="img-item">
                                        <a href="#" data-id="1" onClick={(e) => handleImageClick(e, 1)}>
                                            <img src={product} alt="shoe image" />
                                        </a>
                                    </div>
                                );
                            })}


                        </div>
                    </div>
                    {/* card right */}
                    <div className="product-content">
                        <h2 class="product-title">{data.title}</h2>
                        <a href="#" class="product-link">{data.category}</a>
                        <div className="product-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>4.7(21)</span>
                        </div>

                        <div className="product-price">
                            <p className="last-price">Old Price: <span>{data.oldPrice}</span></p>
                            <p className="new-price">New Price: <span>{data.newPrice} </span></p>
                        </div>

                        <div className="product-detail">
                            <h2>about this item: </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                            <ul>
                                <li>Gross Weight: <span>3.518 g</span></li>
                                <li>Gold Purity:  <span>22 Karat</span></li>
                                <li>Available: <span>in stock</span></li>
                                <li>Category: <span>Shoes</span></li>
                                <li>Shipping Area: <span>All over the world</span></li>
                                <li>Shipping Fee: <span>Free</span></li>
                            </ul>
                        </div>

                        <div className="purchase-info">
                            <input type="number" min="0" value="1" />
                            <button type="button" style={{ color: "white" }} className="login-button">
                                Add to Cart <i className="fas fa-shopping-cart"></i>
                            </button>
                            {/* <button type="button" className="btn">Compare</button> */}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;


//     const params = useParams();
//     const [imgId, setImgId] = useState(1);
//     const slideImage = () => {
//         const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//         document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
//     };

//     const handleImageClick = (event, id) => {
//         event.preventDefault();
//         setImgId(id);
//         slideImage();
//     };
//     return (
//         <div className='product_details'>
//             <div class="card-wrapper">
//                 <div class="card">

//                     <div class="product-imgs">
//                         <div class="img-display">
//                             <div class="img-showcase">
//                                 <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_1.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7619d667/images/hi-res/51D3B1SSBABACZ_2.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_1.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 {/* <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" /> */}
//                             </div>
//                         </div>
//                         <div class="img-select">
//                             {/* <div class="img-item">
//                                 <a href="#" data-id="1">
//                                     <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
//                                 </a>
//                             </div> */}
//                             <div class="img-item">
//                                 <a href="#" data-id="2">
//                                     <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_1.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 </a>
//                             </div>
//                             <div class="img-item">
//                                 <a href="#" data-id="3">
//                                     <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7619d667/images/hi-res/51D3B1SSBABACZ_2.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 </a>
//                             </div>
//                             <div class="img-item">
//                                 <a href="#" data-id="4">
//                                     <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_1.jpg?sw=1240&sh=1240" alt="shoe image" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="product-content">
//                         <h2 class="product-title">Contemporary Floral Stud Earrings</h2>
//                         <a href="#" class="product-link">earings</a>
//                         <div class="product-rating">
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star-half-alt"></i>
//                             <span>4.7(21)</span>
//                         </div>

//                         <div class="product-price">
//                             <p class="last-price">Old Price: <span>$257.00</span></p>
//                             <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
//                         </div>

//                         <div class="product-detail">
//                             <h2>about this item: </h2>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
//                             <ul>
//                                 <li>Gross Weight: <span>3.518 g</span></li>
//                                 <li>Gold Purity:  <span>22 Karat</span></li>
//                                 <li>Available: <span>in stock</span></li>
//                                 <li>Category: <span>Shoes</span></li>
//                                 <li>Shipping Area: <span>All over the world</span></li>
//                                 <li>Shipping Fee: <span>Free</span></li>
//                             </ul>
//                         </div>

//                         <div class="purchase-info">
//                             <input type="number" min="0" value="1" />
//                             <button type="button" class=" login-button">
//                                 Add to Cart <i class="fas fa-shopping-cart"></i>
//                             </button>
//                             {/* <button type="button" class="btn">Compare</button> */}
//                         </div>
//                         {/*
//                         <div class="social-links">
//                             <p>Share At: </p>
//                             <a href="#">
//                                 <i class="fab fa-facebook-f"></i>
//                             </a>
//                             <a href="#">
//                                 <i class="fab fa-twitter"></i>
//                             </a>
//                             <a href="#">
//                                 <i class="fab fa-instagram"></i>
//                             </a>
//                             <a href="#">
//                                 <i class="fab fa-whatsapp"></i>
//                             </a>
//                             <a href="#">
//                                 <i class="fab fa-pinterest"></i>
//                             </a>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Product