import React from 'react'

import './firstsection.css'
import Image from 'next/image'
import Link from 'next/link'



const Firstsection = (props) => {
  return (
    <div style={{ 'padding-top': '10vh' }} >
      <div div className="firstsection-maincontent" >
        <div className="firstsection-contenttext">
          <p className="firstsection-text h1">
            {/* <span> */}
            Your One-Stop Destination for Unique and Exquisite Jewelry
            Pieces
            {/* </span> */}
          </p>
          <p className="firstsection-text02 text1">
            <span>
              Here, we offer various types of jewelry, including necklaces,
              bracelets, earrings, and rings. From classic designs to modern
              styles, we have something for everyone.
            </span>
          </p>
          <div className="firstsection-headerbtn">
            <Link href='/collections'>
              <span className="firstsection-text04 btntext1">
                <span>Shop The Collection</span>
              </span>
            </Link>
          </div>
        </div>
        <img
          src="/pinkcheekedredheadwomanplayswithherpearlnecklacela2033-ur5-700h.png"
          alt="pinkcheekedredheadwomanplayswithherpearlnecklacela2033"

          className="modal-image"
        />
      </div >

      {/* <div className="secondsection-container"> */}
      <div className="secondsection-secondsection">
        <div className="secondsection-title">
          <span className="secondsection-text h2">
            New Collection
          </span>
          {/* </Link> */}
        </div>
        <div className="secondsection-image">
          <div className="secondsection-necklaces">
            <img
              src="/displayshinyluxuriousgoldenchain12058-2x5-400w.png"
              alt="displayshinyluxuriousgoldenchain12058"
              className=""
            />
            <div className="secondsection-btn">
              <span className="secondsection-text2">
                <span>Necklaces</span>
              </span>
            </div>
          </div>
          <div className="secondsection-necklaces">
            <img

              src="/highangleaestheticgoldenearringsarrangement12058-ct2s-400w.png"
              alt="highangleaestheticgoldenearringsarrangement12058"
              className=""
            />
            <div className="secondsection-btn">

              <span className="secondsection-text2">

                <span>Earrings</span>
              </span>
            </div>
          </div>
          <div className="secondsection-necklaces">
            <img
              src="/weddingring.png"
              alt="weddingrings"
              className=""
            />
            <div className="secondsection-btn">

              <span className="secondsection-text2">

                <span>Wedding Rings</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}


      {/* third secrtion */}

      <div className="third-section">
        <div className="secondsection-title2">
          <span className="secondsection-text h2">
            A diamond is a woman`s best friends!
          </span>
        </div>
        <p className='disc'> A diamond is a timeless symbol of beauty and friendship, making it the perfect gift for any woman. It is often said that diamonds are a woman's best friend, and for good reason. Not only does a diamond represent unwavering loyalty and devotion, but it is also a symbol of luxury, glamor and class. A diamond tells the world that you are proud of your loved one, and want them to have only the best. As Coco Chanel once said, "A diamond is eternity, it is real and it is unbreakable".</p>
      </div>

      {/*fourth section  */}
      <div className="fourth-section">
        <div className="secondsection-title2">
          <span className="secondsection-text h2">
            Best Sellers
          </span>
        </div>

        <div className="imag-cont1 img-cont ">
          <Link href='product/asdsa'>
            <div>

              <img src="/Rectangle18.png" alt="" srcset="" />
              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>

          <Link href='product/asdsa'>

            <div>
              <img src="/Rectangle19.png" alt="" srcset="" />

              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>


        </div>
        <div className="imag-cont2  img-cont ">

          <Link href='product/asdsa'>

            <div>
              <img src="/Rectangle20.png" alt="" srcset="" />
              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>

          <Link href='product/asdsa'>

            <div>
              <img src="/Rectangle21.png" alt="" srcset="" />

              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>

        </div>
        <div className="imag-cont3   img-cont ">

          <Link href='product/asdsa'>


            <div >
              <img src="/Rectangle22.png" alt="" srcset="" />
              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>
          <Link href='product/asdsa'>

            <div>
              <img src="/Rectangle23.png" alt="" srcset="" />

              <p className='img-title'>High angle golden earrings</p>
              <p className='img-price'>Rs 10000</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Firstsection
