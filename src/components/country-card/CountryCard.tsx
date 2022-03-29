import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

type Props = {
  name: string;
  flagPng: string;
  style?: any;
};

const CountryCard: React.FC<Props> = (props) => {
  const { name, flagPng, style } = props;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={{
          uri: flagPng,
        }}
        style={styles.flag}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CountryCard;
