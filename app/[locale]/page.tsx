'use client'
import {Navbar} from '@/components/nav/Navbar';
import {SideBar} from '@/components/nav/SideBar';
import {Hero} from '@/components/hero/Hero';
import {About} from '@/components/about/About';
import {Contact} from '@/components/contact/Contact';
import styles from "@/components/utils/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
           <Navbar />
          <Hero />
          <About />
          <Contact />
        </main>
      </div>
    </>
  );
};


export default Home

