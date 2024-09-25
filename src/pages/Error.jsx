import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import ErrorInner from "../components/ErrorInner";


const Error = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <div>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Team"} />

      {/* header five
      <HeaderTwo /> */}

      {/* ErrorInner */}
      <ErrorInner />

      {/* FooterFive
      <FooterFive /> */}
    </div>
  );
};

export default Error;
