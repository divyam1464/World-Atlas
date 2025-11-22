export const CountryCard = ({ country }) => {
    const [flags, name, population, region, capital ] = country ;
  return <li key={country.id}>{country.name.common}</li>;
};
