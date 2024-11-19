'use client'
import {Navbar} from '@/components/nav/Navbar';
import {SideBar} from '@/components/nav/SideBar';
import {Hero} from '@/components/hero/Hero';
import styles from "@/components/utils/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Navbar />
          <Hero />
        </main>
      </div>
    </>
  );
};


export default Home

