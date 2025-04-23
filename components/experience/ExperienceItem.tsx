import {Reveal} from "@/components/utils/Reveal";
import styles from "./experience.module.scss";
import {Modal} from "./Modal";
import {useState} from "react";

interface Props {
  title: string;
  role: string;
  date: string;
  location: string;
  description: string[];
  tech: string[];
  modal: JSX.Element;
}

export const ExperienceItem = ({
  title,
  role,
  date,
  location,
  description,
  modal,
  tech,

}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div className={styles.experience}>
        <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{date}</span>
        </Reveal>
        </div>

        <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{role}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
        </div>
        <Reveal>
          <ul>
              {description.map((el, i) => (
              <li key={i} className={styles.description}>{el}</li>
              ))}
          </ul>
        </Reveal>
        <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        </Reveal>
        <Reveal>
            <div className={styles.details}>
                <span onClick={() => setIsOpen(true)} aria-label="View Details">Details {">"}</span>
            </div>
        </Reveal>
        </div>
        <Modal
            modal={modal}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            title={title}
            tech={tech}
        />
      </>
  );
};
