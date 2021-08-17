import React, { Fragment } from "react";

//import axios from "axios";

import {
  Hero,
  Navigation,
  Introductory,
  Newspapper,
  Blog,
  Services,
  Footer
} from "../src/sections";

const IndexPage = () => (
  <Fragment>
    <Hero />
    <Navigation />
    <Introductory />
    <Newspapper />
    <Blog />
    <Services />
    <Footer />
  </Fragment>
);

export default IndexPage;

/*export const getStaticProps = async () => {
  const { data } = await axios.get(
    "http://diegotuatara.unaux.com/wp-json/wp/v2/posts"
  );

  return {
    props: { latestsPosts: data }
  };
};*/
