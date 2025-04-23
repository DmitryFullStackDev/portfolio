import ReactDOM from "react-dom";
import {motion} from "framer-motion";
import styles from "./modal.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  tech: string[];
  modal: JSX.Element;
}

export const Modal = ({
  modal,
  setIsOpen,
  isOpen,
  title,
  tech,
}: Props) => {
  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
          <div className={styles.suppliedContent}>{modal}</div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
