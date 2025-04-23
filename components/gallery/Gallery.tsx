import {useState} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowUp} from "react-icons/ai";
import {TransitionLink} from "../utils/TransitionLink";
import {GalleryItem} from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";
import {useGetProjects} from "@/hooks/useGetProjects";

const Gallery = () => {
  const [goUpBtn, setGoUpBtn] = useState(false);

  const projects = useGetProjects()

  const handleScroll = () => {
    setGoUpBtn(window.scrollY >= 350);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <main className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink
          className={styles.goBackBtn}
          href="/#projects"
          aria-label="Back to Homepage">
          <AiOutlineArrowLeft size="2.4rem" />
        </TransitionLink>

        <section className={styles.galleryItem}>
          {projects.map((project) => (
            <GalleryItem
              key={`${project.title}`}
              {...project}
            />
          ))}
        </section>

        <button
          className={styles.goUpBtn}
          style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top">
          <AiOutlineArrowUp size="2.4rem" />
        </button>
      </main>
    </>
  );
};

export default Gallery;
