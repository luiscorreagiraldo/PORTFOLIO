import React from "react";
import Social from '../Home/Social'
import Data from '../Home/Data'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container  grid">
        <div className="home__content grid">
            <Social/>
            <div className="home__img"></div>
            <Data/>
        </div>
      </div>

    </section>
  );
};

export default Home;
