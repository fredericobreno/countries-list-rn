import CountriesProvider from "./src/contexts/countries";
import Root from "./src/screens/root/Root";

export default function App() {
  return (
    <CountriesProvider>
      <Root />
    </CountriesProvider>
  );
}
