import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import CountriesList from "../../components/countries-list/CountriesList";
import SearchInput from "../../components/search-input/SearchInput";
import styles from "./styles";

type Props = {};

const Root: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchInput />
      <CountriesList />
    </SafeAreaView>
  );
};

export default Root;
