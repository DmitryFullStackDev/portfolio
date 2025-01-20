import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import { Socials } from "../nav/Socials";
import {linkedin, mail} from "@/components/utils/const";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {t("section")}
            <span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            {t("p1")}{" "}
            <a
              href={`https://www.linkedin.com/in/${linkedin}/`}
              target="_blank"
              rel="nofollow"
              aria-label="Contact me on LinkedIn">
              LinkedIn
            </a>
            {t("p2")}
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactLinks}>
            <a
              className={styles.contactLink}
              href={`mailto:${mail}`}
              target="_blank"
              rel="nofollow"
              aria-label="Send me an email">
              <AiFillMail size="2.4rem" />
              <span>{mail}</span>
            </a>
          </div>
        </Reveal>
        <Reveal width="100%">
          <Socials />
        </Reveal>
      </div>
    </section>
  );
};
