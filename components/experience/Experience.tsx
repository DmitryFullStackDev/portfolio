import {useMessages, useTranslations} from "next-intl";
import {SectionHeader} from "@/components/utils/SectionHeader";
import {ExperienceItem} from "./ExperienceItem";
import {ModalItem} from "@/components/experience/ModalItem";

export const Experience = () => {
  const t = useTranslations("Experience");
  const messages = useMessages();
  const desc1 = (messages.Experience as { desc1: string[] }).desc1;
  const desc2 = (messages.Experience as { desc2: string[] }).desc2;
  const desc3 = (messages.Experience as { desc3: string[] }).desc3;
  const desc4 = (messages.Experience as { desc4: string[] }).desc4;

  const contributions1 = (messages.Experience as { contributions1: string[] }).contributions1;
  const contributions2 = (messages.Experience as { contributions2: string[] }).contributions2;
  const contributions3 = (messages.Experience as { contributions3: string[] }).contributions3;
  const contributions4 = (messages.Experience as { contributions4: string[] }).contributions4;



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
