import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import {AiOutlineDownload} from "react-icons/ai";
import styles from "./navbar.module.scss";
import {Socials} from "./Socials";

export const Navbar = () => {
const currentPath = usePathname();
const newPath = currentPath.includes("/ru")
  ? currentPath.replace("/ru", "/en")
  : `${currentPath}/ru`.replace("//", "/");


  return (
    <header className={styles.heading}>
      {/* <- left */}
      <div className={styles.headingLeft}>
        <Socials />

        {/* Switch */}
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Link prefetch={false} href={newPath} className={styles.switch} aria-label="Change language">
            {currentPath.includes("/ru") ? "RU" : "EN"}
          </Link>
        </motion.span>
      </div>

      {/* right -> */}
      <div className={styles.headingButtons}>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <a
            href={currentPath.includes("/ru") ? "https://drive.google.com/file/d/1ghjjoYpni4_JFbGbkLglSkN-XxweMXAc/view?usp=sharing" : "https://drive.google.com/file/d/12ACsLZVCNNoia912n1D0CXtvDtTzrUrw/view?usp=sharing"}
            target="_blank"
            rel="nofollow"
            title="Resume">
            <button className={styles.outlineButton} aria-label="View Resume">
              CV
              <AiOutlineDownload size="2.4rem" />
            </button>
          </a>
        </motion.span>
      </div>
    </header>
  );
};
