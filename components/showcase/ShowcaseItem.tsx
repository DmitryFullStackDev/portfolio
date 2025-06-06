import Image from "next/image";
import {Reveal} from "@/components/utils/Reveal";
import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {AiFillGithub, AiOutlineExport} from "react-icons/ai";
import styles from "./showcase.module.scss";
import {Modal} from "./Modal";

interface Props {
  desc: string;
  link: string;
  img: string;
  tech: string[];
  title: string;
  code: string[];
}

export const ShowcaseItem = ({
  link,
  desc,
  img,
  title,
  code,
  tech,
}: Props) => {
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
          className={styles.projectImage}>
          <Image
            priority
            src={img}
            alt={`An image of the ${title} project.`}
            width={1920}
            height={1080}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              {code.map(el => (
                <a href={el} key={el} target="_blank" rel="nofollow" title="GitHub" aria-label="View Code">
                  <AiFillGithub size="2.8rem" />
                </a>
              ))}

              <a href={link} target="_blank" rel="nofollow" title="Demo" aria-label="View Website">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <>
              <p className={styles.projectDescription}>
                {desc}
              </p>
              <p className={styles.projectDescription}>
              <span onClick={() => setIsOpen(true)} aria-label="View Details">Details {">"}</span>
              </p>
            </>
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
