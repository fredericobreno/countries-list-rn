import React from "react";

export type Country = {
  name: string;
  capital: string;
  population: number;
  flagPng: string;
};

type ContextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  countries: Country[];
  fetchCountries: (args?: { name: string }) => void;
  loading: boolean;
  error: boolean;
};

export const CountriesContext = React.createContext({} as ContextType);

const CountriesProvider: React.FC = ({ children }) => {
  const [searchText, setSearchText] = React.useState("");
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetchCountries = async (args?: { name: string }) => {
    const { name } = args || {};
    setLoading(true);

    try {
      const response = await fetch(
        name
          ? `https://restcountries.com/v3.1/name/${name}`
          : "https://restcountries.com/v3.1/all?fields=name,capital,population,flags"
      );
      const data = await response.json();

      setCountries(
        data
          .map((item: any) => ({
            name: item.name.common,
            capital: item.capital && item.capital[0],
            population: item.population,
            flagPng: item.flags.png,
          }))
          .sort((a: Country, b: Country) => (a.name > b.name ? 1 : -1))
      );
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <CountriesContext.Provider
      value={{
        searchText,
        setSearchText,
        countries,
        fetchCountries,
        loading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
