import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay=""
        appStore=""
      ></LeftSection>
      <RightSection imageURL='media/images/console.png' productName='Console' productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' link='Learn more'></RightSection>
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link='Kite Connect'></RightSection>
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      ></LeftSection>
      <div className="text-center mb-5 mt-5 fs-4">
        <p>want to know about our technology stack? Check out the <a href="" className="text-decoration-none text-center">Zerodha.Tech</a> blog</p>
      </div>
      <Universe></Universe>
    </>
  );
}

export default ProductPage;