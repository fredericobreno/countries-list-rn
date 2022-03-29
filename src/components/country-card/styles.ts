import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    elevation: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  flag: {
    width: 128,
    height: 64,
    marginBottom: 4,
    resizeMode: "stretch",
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
