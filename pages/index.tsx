import React, { Fragment } from "react";

import Axios from "axios";

import {
  Hero,
  Navigation,
  Introductory,
  Blog,
  Newspapper,
  Services,
  Footer
} from "../src/sections";

const IndexPage = ({ latestsPosts }) => (
  <Fragment>
    <Hero />
    <Navigation />
    <Introductory />
    <Blog latestsPosts={latestsPosts} />
    <Newspapper />
    <Services />
    <Footer />
  </Fragment>
);

export default IndexPage;

export const getStaticProps = async () => {
  const { data } = await Axios.get(
    "http://diegotuatara.unaux.com/wp-json/wp/v2/posts"
  );

  return {
    props: { latestsPosts: data }
  };
};
