import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  field: {
    fontWeight: "bold",
  },
  flag: {
    borderWidth: 1,
    borderColor: colors.gray,
    width: "100%",
    height: 192,
    resizeMode: "contain",
    marginBottom: 12,
  },
});

export default styles;
