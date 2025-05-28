import Image from "next/image";
import {Reveal} from "@/components/utils/Reveal";
import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {AiFillGithub, AiOutlineExport} from "react-icons/ai";
import {Modal} from "../showcase/Modal";
import styles from "./gallery.module.scss";

interface Props {
  desc: string;
  link: string;
  img: string;
  tech: string[];
  title: string;
  code: string[];
}

export const GalleryItem = ({ desc, link, img, title, code, tech }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);


  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.itemCover}>
          <Image
            priority
            src={img}
            alt={`An image of the ${title} project.`}
            width={1000}
            height={0}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.itemCopy}>
          <Reveal width="100%">
            <div className={styles.itemTitle}>
              <h4>{title}</h4>
              <div className={styles.itemTitleLine} />

              {code.map(el => (
                <a href={el} key={el} target="_blank" rel="nofollow"  title="GitHub" aria-label="View Code">
                  <AiFillGithub size="2.8rem" />
                </a>
              ))}

              <a href={link} target="_blank" rel="nofollow" title="Demo" aria-label="View Website">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.itemTech}>{tech.join(" - ")}</div>
          </Reveal>
        </div>
      </motion.div>
      <Modal
        modal={<>{desc}</>}
        link={link}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        img={img}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
