import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { CountryStackParamsType } from "../../routes/CountryRoute";
import styles from "./styles";

const Info = ({ field, value }: { field: string; value: string | number }) => {
  return (
    <Text>
      <Text style={styles.field}>{field}:</Text> {value}
    </Text>
  );
};

const CountryDetailScreen: React.FC = () => {
  const {
    params: { country },
  } = useRoute<RouteProp<CountryStackParamsType, "CountryDetail">>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: country.name,
    });
  }, [country]);

  return (
    <View style={styles.container}>
      <Image style={styles.flag} source={{ uri: country.flagPng }} />
      <Info field="Capital" value={country.capital} />
      <Info field="Population" value={country.population} />
    </View>
  );
};

export default CountryDetailScreen;
