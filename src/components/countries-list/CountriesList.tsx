import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { CountriesContext } from "../../contexts/countries";
import { CountryStackParamsType } from "../../routes/CountryRoute";
import CountryCard from "../country-card/CountryCard";
import styles from "./styles";

const CountriesList: React.FC = () => {
  const { countries, fetchCountries, loading, error } =
    useContext(CountriesContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<CountryStackParamsType>>();

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
          onPress={() =>
            navigation.navigate("CountryDetail", { country: item })
          }
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
