'use client'
import {Navbar} from '@/components/nav/Navbar';
import {SideBar} from '@/components/nav/SideBar';
import styles from "@/components/utils/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Navbar />
        </main>
      </div>
    </>
  );
};


export default Home

