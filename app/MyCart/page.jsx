
'use client'

import React, { useState } from 'react';
// import Header from './Header';
// import ProductList from './ProductList';
// import Summary from './Summary';
import './mycart.css'
import Link from 'next/link';



const Header = ({ itemCount }) => {
    return (
        <header className="container">
            <h1>Shopping Cart</h1>

            {/* <ul className="breadcrumb">
                <li>Home</li>
                <li>Shopping Cart</li>
            </ul> */}

            <span className="count">{itemCount} items in the bag</span>
        </header>
    );
};
const ProductList = ({ products, onChangeProductQuantity, onRemoveProduct }) => {
    return (
        <section className="container">
            <ul className="products">
                {products.map((product, index) => {
                    return (
                        <li className="row" key={index}>
                            <div className="col left">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={product.image} alt={product.name} />
                                    </a>
                                </div>
                                <div className="detail">
                                    <div className="name">
                                        <a href="#">{product.name}</a>
                                    </div>
                                    <div className="description">{product.description}</div>
                                    <div className="price">{(product.price)}</div>
                                </div>
                            </div>

                            <div className="col right">
                                <div className="quantity">
                                    <input
                                        type="text"
                                        className="quantity"
                                        step="1"
                                        value={product.quantity}
                                        onChange={(event) => onChangeProductQuantity(index, event)}
                                    />
                                </div>

                                <div className="remove">
                                    <svg
                                        onClick={() => onRemoveProduct(index)}
                                        version="1.1"
                                        className="close"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        enableBackground="new 0 0 60 60"
                                    >
                                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                                    </svg>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

const Summary = ({
    subTotal,
    discount,
    tax,

}) => {
    const total = subTotal - discount + tax;

    return (
        <section className="container sumtotal">


            <div className="summary">
                <ul>
                    <li>
                        Subtotal <span>{(subTotal)}</span>
                    </li>
                    {discount > 0 && (
                        <li>
                            Discount <span>{(discount)}</span>
                        </li>
                    )}
                    <li>
                        Tax <span>{(tax)}</span>
                    </li>
                    <li className="total">
                        Total <span>{(total)}</span>
                    </li>
                </ul>
            </div>

            <div className="checkout">
                <button type="button">Check Out</button>
            </div>
        </section>
    );
};


const PRODUCTS = [
    {
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_1.jpg?sw=200&sh=150",
        name: "Contemporary Floral Stud Earrings",
        description: "Description for product item number 1",
        price: 5.99,
        quantity: 2
    },
    {
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97df845c/images/hi-res/51D3B1SSBABACZ_2.jpg?sw=200&sh=150",
        name: "High angle Golden Earing",
        description: "Description for product item number 1",
        price: 9.99,
        quantity: 1
    }
];
const PROMOTIONS = [
    {
        code: "SUMMER",
        discount: "50%"
    },
    {
        code: "AUTUMN",
        discount: "40%"
    },
    {
        code: "WINTER",
        discount: "30%"
    }
];

const TAX = 5;

const Page = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [promoCode, setPromoCode] = useState('');
    const [discountPercent, setDiscountPercent] = useState(0);

    const itemCount = products.reduce((quantity, product) => {
        return quantity + +product.quantity;
    }, 0);

    const subTotal = products.reduce((total, product) => {
        return total + product.price * +product.quantity;
    }, 0);

    const discount = (subTotal * discountPercent) / 100;

    const onChangeProductQuantity = (index, event) => {
        const value = event.target.value;
        const valueInt = parseInt(value);
        const cloneProducts = [...products];

        if (value === '') {
            cloneProducts[index].quantity = value;
        } else if (valueInt > 0 && valueInt < 100) {
            cloneProducts[index].quantity = valueInt;
        }

        setProducts(cloneProducts);
    };

    const onRemoveProduct = (i) => {
        const filteredProduct = products.filter((product, index) => {
            return index !== i;
        });

        setProducts(filteredProduct);
    };

    const onEnterPromoCode = (event) => {
        setPromoCode(event.target.value);
    };

    const checkPromoCode = () => {
        for (let i = 0; i < PROMOTIONS.length; i++) {
            if (promoCode === PROMOTIONS[i].code) {
                setDiscountPercent(
                    parseFloat(PROMOTIONS[i].discount.replace('%', ''))
                );
                return;
            }
        }

        alert('Sorry, the Promotional code you entered is not valid!');
    };

    return (
        <div className='myCart'>
            <Header itemCount={itemCount} />

            {products.length > 0 ? (
                <div>
                    <ProductList
                        products={products}
                        onChangeProductQuantity={onChangeProductQuantity}
                        onRemoveProduct={onRemoveProduct}
                    />

                    <Summary
                        subTotal={subTotal}
                        discount={discount}
                        tax={TAX}
                        onEnterPromoCode={onEnterPromoCode}
                        checkPromoCode={checkPromoCode}
                    />
                </div>
            ) : (
                <div className="empty-product">
                    <h3>There are no products in your cart.</h3>
                    <button >
                        <Link href='/collections' style={{color:'white'}}>
                            Shop now
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;
