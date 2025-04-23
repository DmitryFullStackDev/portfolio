import {AiOutlineArrowRight} from "react-icons/ai";
import {SectionHeader} from "@/components/utils/SectionHeader";
import {ShowcaseItem} from "./ShowcaseItem";
import {TransitionLink} from "../utils/TransitionLink";
import styles from "./showcase.module.scss";
import {useGetProjects} from "@/hooks/useGetProjects";
import {useTranslations} from "next-intl";

export const Showcase = () => {
  const t = useTranslations("Projects");

  const projects = useGetProjects().slice(0, 2);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("section")} dir="r" />

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>
    </section>
  );
};
