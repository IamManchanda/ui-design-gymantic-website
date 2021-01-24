import Head from "next/head";
import { Fragment } from "react";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Motto from "../components/Motto";
import Register from "../components/Register";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Trainers from "../components/Trainers";

function PageHome() {
  return (
    <Fragment>
      <Head>
        <title>UI Design: gYmantic Website</title>
      </Head>

      <div className="container">
        <Header />
        <Showcase />
        <Motto />
        <Features />
        <Trainers />
        <Testimonials />
        <Clients />
        <div className="scroll" />
        <Register />
        <Footer />
      </div>
    </Fragment>
  );
}

export default PageHome;
