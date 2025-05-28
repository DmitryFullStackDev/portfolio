import {useTranslations} from "next-intl";

export const useGetProjects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "Search-x app",
      img: "/gallery/search.png",
      code: ["https://github.com/DmitryFullStackDev/searchX/tree/main"],
      link: "https://search-x-zeta.vercel.app/",
      tech: ["React", "TypeScript", "Styled-components", "Redux", "Webpack"],
      desc: t("desc3"),
    },
    {
      title: "Tapping goose game",
      img: "/gallery/goose.png",
      code: ["https://github.com/DmitryFullStackDev/goose-fe", 'https://github.com/DmitryFullStackDev/gooseBE'],
      link: "https://goose-fe.vercel.app",
      tech: ["React", "Nest", "Postgresql", "TypeScript", "Redux"],
      desc: t("desc12"),
    },
    {
      title: "3d studio",
      img: "/gallery/3dStudio.png",
      code: ["https://github.com/DmitryFullStackDev/threeReact/tree/main"],
      link: "https://three-react-three.vercel.app/",
      tech: ["React", "Three", "Vite", "Styled-components", "Emailjs"],
      desc: t("desc10"),
    },
    {
      title: "Full stack GitHib app",
      img: "/gallery/gitHub.png",
      code: ["https://github.com/DmitryFullStackDev/graphqlGit/tree/main", "https://github.com/DmitryFullStackDev/GitOAuth/tree/main"],
      link: "https://graphql-git.vercel.app/",
      tech: ["React", "Express", "Graphql", "Mui"],
      desc: t("desc7"),
    },
    {
      title: "Rick graphQl",
      img: "/gallery/rickGraphQl.png",
      code: ["https://github.com/DmitryFullStackDev/rickGraphQl/tree/main"],
      link: "https://rick-graph-ql.vercel.app/",
      tech: ["React", "Graphql", "Mui"],
      desc: t("desc1"),
    },
    {
      title: "Swapi app",
      img: "/gallery/swapi.png",
      code: ["https://github.com/DmitryFullStackDev/swapiTest/tree/main"],
      link: "https://swapi-test-pied.vercel.app/",
      tech: ["React", "TypeScript", "Mui", "Redux", "Redux-saga"],
      desc: t("desc2"),
    },
    {
      title: "Racers list app",
      img: "/gallery/racers.png",
      code: ["https://github.com/DmitryFullStackDev/racersList/tree/main"],
      link: "https://racers-list.vercel.app/",
      tech: ["Angular", "TypeScript", "Ngrx"],
      desc: t("desc4"),
    },
    {
      title: "Users list app",
      img: "/gallery/users.png",
      code: ["https://github.com/DmitryFullStackDev/test/tree/main"],
      link: "https://test-eight-zeta-65.vercel.app/",
      tech: ["React", "TypeScript", "Redux", "Redux-saga"],
      desc: t("desc5"),
    },
    {
      title: "Full stack Logistic app",
      img: "/gallery/logistic.png",
      code: ["https://github.com/DmitryFullStackDev/TestLogistic/tree/main", "https://github.com/DmitryFullStackDev/TestLogisticBack"],
      link: "https://test-logistic-eta.vercel.app/?date=1747657619734",
      tech: ["React", "TypeScript", "Express", "Redux", "Redux-saga"],
      desc: t("desc5"),
    },
    {
      title: "Full stack Stops app",
      img: "/gallery/stops.png",
      code: ["https://github.com/DmitryFullStackDev/stopsFE/tree/main", "https://github.com/DmitryFullStackDev/stopsBE"],
      link: "https://stops-fe.vercel.app/",
      tech: ["Vue", "TypeScript", "Express", "Vuex"],
      desc: t("desc8"),
    },
    {
      title: "3d Person",
      img: "/gallery/3dPerson.png",
      code: ["https://github.com/DmitryFullStackDev/3dPersone/tree/main"],
      link: "https://3d-persone.vercel.app/",
      tech: ["React", "Three", "Vite"],
      desc: t("desc9"),
    },
    {
      title: "Submarine",
      img: "/gallery/submarine.png",
      code: ["https://github.com/DmitryFullStackDev/submarine/tree/main"],
      link: "https://submarine-omega.vercel.app/",
      tech: ["React", "Three"],
      desc: t("desc11"),
    },
  ];

  return (
      projects
  );
};
