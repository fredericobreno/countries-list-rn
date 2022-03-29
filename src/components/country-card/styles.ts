import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  flag: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: 64,
    resizeMode: "stretch",
  },
  name: {
    fontWeight: "bold",
    marginVertical: 4,
    textAlign: "center",
  },
});

export default styles;
