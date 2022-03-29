import { NavigationContainer } from "@react-navigation/native";
import CountriesProvider from "./src/contexts/countries";
import CountryRoute from "./src/routes/CountryRoute";

export default function App() {
  return (
    <CountriesProvider>
      <NavigationContainer>
        <CountryRoute />
      </NavigationContainer>
    </CountriesProvider>
  );
}
