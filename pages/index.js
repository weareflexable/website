import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Howto from "../components/Howto";
import Nightlife from "../components/Nightlife";
import Restaurants from "../components/Restaurants";
import Events from "../components/Events";
import About from "../components/About";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Container from "../components/Container";

import Contact from "../components/Contact";

export default function Home() {
  return (
    // <>
    //   <Head>
    //     <title>Flexable</title>
    //     <meta
    //       name="description"
    //       content="Why wait in the line when you could just... not."
    //     />
    //     <link rel="icon" href="/logo1.png" />
    //   </Head>
    //   <Navbar />
    //   <Hero />
    //   <Howto />
    //   <Nightlife />
    //   <Restaurants />
    //   <Events />
    //   <About />
    //   <Partner />
    //   <Contact />
    //   <Footer />
    // </>
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Head>
        <title>Flexable</title>
        <meta
          name="description"
          content="Why wait in the line when you could just... not."
        />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <Navbar />
      <Hero />
      <Howto />
      <Nightlife />
      <Restaurants />
      <Events />
      <About />
      <Partner />
      <Footer />
    </div>
  );
}
