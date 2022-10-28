import Head from "next/head";
import Navbar from "../components/Navbar";
import Home1 from "../components/Home1";
import Howitworks from "../components/Howitworks";
import Nightlife from "../components/Nightlife";
import Restaurants from "../components/Restaurants";
import Greeklife from "../components/Greeklife";
import Aboutus from "../components/Aboutus";
import Partnerwithus from "../components/Partnerwithus";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";

export default function Home() {
  return (
    <>
    <Head>
      <title>Flexable</title>
      <meta name="description" content="Why wait in the line when you could just... not." />
      <link rel="icon" href="/logo1.png" />
    </Head>
    <Navbar></Navbar>
    <Home1></Home1>
    <Howitworks></Howitworks>
    <Nightlife></Nightlife>
    <Restaurants></Restaurants>
    <Greeklife></Greeklife>
    <Aboutus></Aboutus>
    <Partnerwithus></Partnerwithus>
    <Contactus></Contactus>
    <Footer></Footer>
    </>
    
  );
}
