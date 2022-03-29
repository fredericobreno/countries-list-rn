import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
  name: string;
  flagPng: string;
  style?: any;
  onPress?: () => void;
};

const CountryCard: React.FC<Props> = (props) => {
  const { name, flagPng, style, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Image
        source={{
          uri: flagPng,
        }}
        style={styles.flag}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CountryCard;
