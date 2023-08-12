import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import Header from "./components/global/Header";
import Designer from "./components/local/Designer";
import Company from "./components/local/Company";
import AboutUs from "./components/local/AboutUs";
import Cost from "./components/local/Cost";
import Portfolio from "./components/local/Portfolio";
import Design from "./components/local/Design";
import Cooperation from "./components/local/Cooperation";
import Blog from "./components/local/Blog";
import Faq from "./components/local/Faq";
import Footer from "./components/global/Footer";
import Contact from "./components/local/Contact";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>WEE BUILD</title>
        <meta name="description" content="WEE BUILD - repairing website made with next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Designer />
        <Company />
        <AboutUs />
        <Cost />
        <Portfolio />
        <Design />
        <Cooperation />
        <Blog />
        <Faq />
        <Contact />
        <Footer />
        <button className={styles.contact}>
          <Image src={"/icons/contact.svg"} alt='contact svg' width={70} height={70} />
        </button>
      </main>
    </>
  );
}
