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
    return (
      <>
          <h3>Company Overview</h3>
          <p>{companyOverview}</p>
          <h3>Team & Environment:</h3>
          <p>{team}</p>
          <h3>Key Contributions:</h3>
          <ul>
              {contributions.map((el, i) => (
                  <li key={i}>{el}</li>
              ))}
          </ul>
      </>
  );
};
