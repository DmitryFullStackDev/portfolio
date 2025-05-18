import {useMessages, useTranslations} from "next-intl";
import {SectionHeader} from "@/components/utils/SectionHeader";
import {ExperienceItem} from "./ExperienceItem";
import {ModalItem} from "@/components/experience/ModalItem";

export const Experience = () => {
  const t = useTranslations("Experience");
  const rawMessages = useMessages();
  const experienceMessages = rawMessages.Experience;

  if (typeof experienceMessages !== "object" || experienceMessages === null) {
    throw new Error("Invalid format for messages.Experience");
  }

  const {
    desc1,
    desc2,
    desc3,
    desc4,
    contributions1,
    contributions2,
    contributions3,
    contributions4,
  } = experienceMessages as unknown as {
    desc1: string[];
    desc2: string[];
    desc3: string[];
    desc4: string[];
    contributions1: string[];
    contributions2: string[];
    contributions3: string[];
    contributions4: string[];
  };

  const experiences = [
    {
      title: t("exp1"),
      role: t("role1"),
      date: t("date1"),
      location: t("loca1"),
      description: desc1,
      modal: <ModalItem team={'team1'} companyOverview={'companyOverview1'} contributions={contributions1}/>,
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "SASS",
        "Styled-components",
        "PostgreSql",
        "Express",
        "Firebase"
      ],
    },
    {
      title: t("exp2"),
      role: t("role2"),
      date: t("date2"),
      location: t("loca2"),
      description: desc2,
      modal: <ModalItem team={t('team2')} companyOverview={t('companyOverview2')} contributions={contributions2}/>,
      tech: [
        "React",
        "TypeScript",
        "Context",
        "Mui"
      ],
    },
    {
      title: t("exp3"),
      role: t("role3"),
      date: t("date3"),
      location: t("loca3"),
      description: desc3,
      modal: <ModalItem team={t('team3')} companyOverview={t('companyOverview3')} contributions={contributions3}/>,
      tech: [
        "React",
        "TypeScript",
        "Redux",
        "Styled-components",
      ],
    },
    {
      title: t("exp4"),
      role: t("role4"),
      date: t("date4"),
      location: t("loca4"),
      description: desc4,
      modal: <ModalItem team={t('team4')} companyOverview={t('companyOverview4')} contributions={contributions4}/>,
      tech: [
        "React",
        "JavaScript",
        "CSS",
        "HTML",
        "SASS",
        "Webpack"
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("section")} dir="l" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
