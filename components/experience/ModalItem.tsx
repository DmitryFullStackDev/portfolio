import {useTranslations} from "next-intl";

interface Props {
  companyOverview: string;
  team: string;
  contributions: string[];
}

export const ModalItem = ({
  companyOverview,
  team,
  contributions,

}: Props) => {
    const t = useTranslations("Experience");

    return (
      <>
          <h3>{t('companyOverview')}</h3>
          <p>{companyOverview}</p>
          <h3>{t('teamEnvironment')}</h3>
          <p>{team}</p>
          <h3>{t('keyContributions')}</h3>
          <ul>
              {contributions.map((el, i) => (
                  <li key={i}>{el}</li>
              ))}
          </ul>
      </>
  );
};
