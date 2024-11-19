import {useTranslations} from "next-intl";
import Link from "next/link";
import {Reveal} from "@/components/utils/Reveal";
import {DotGrid} from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  const t = useTranslations("Hero");
  const contact = useTranslations("Contact")('contact');


  return (
    <section className={`section-wrapper ${styles.hero}`} id="hero">
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              {t("title")}
              <span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <span>{t("tagline")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              {t("p1")}
              <br className={styles.breakline} /> {t("p2")}
            </p>
          </Reveal>
          <Reveal>
            <Link href="#contact" aria-label="Go to Contact">
              <button className={styles.contactButton}>{contact}</button>
            </Link>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
