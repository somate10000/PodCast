import Head from "next/head";
import NavBar from "./navBar";
import Hero from "./hero";
import Podcast from "./podcast";
import SignUp from "./signUp";
import Base from "./base";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Podcast />
      <SignUp />
      <Base />
      <Footer />
    </div>
  );
}