import BlackFridayHero from "../components/BlackFridayHero";
import HeaderFive from "../components/HeaderFive";
import BlackFridayIndex from "../components/BlackFridayIndex";
import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import FooterOne from "../components/FooterOne";
import Aos from "aos";
import "aos/dist/aos.css";
import BlackFridayPricingCards from "../components/BlackFridayPricingCards";
import BlackFridayWhyChooseUs from "../components/BlackFridayWhyChooseUs";
import BlackfridayHelmet from "../elements/BlackfridayHelmet";



const BlackFriday = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);

    Aos.init();
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}



        <HeaderFive />

          {/* Helmet */}
      <BlackfridayHelmet title={"BlackfridayHelmet"} />



      

      <div className="black_page black_shadow-shape-left black_shadow-shape-right">
        
        <BlackFridayIndex />


        
      </div>

      

     
    

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlackFriday;
