import React, { useContext, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { CountriesContext } from "../../contexts/countries";
import CountryCard from "../country-card/CountryCard";
import styles from "./styles";

const CountriesList: React.FC = () => {
  const { countries, fetchCountries, loading, error } =
    useContext(CountriesContext);

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error!</Text>;
  }

  return (
    <FlatList
      data={countries}
      renderItem={({ item }) => (
        <CountryCard
          key={item.name}
          name={item.name}
          flagPng={item.flagPng}
          style={styles.card}
        />
      )}
      keyExtractor={(item) => item.name}
      style={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={2}
    />
  );
};

export default CountriesList;
