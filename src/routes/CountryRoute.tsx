import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Country } from "../contexts/countries";
import CountryDetailScreen from "../screens/country-detail/CountryDetail";
import HomeScreen from "../screens/home/Home";

export type CountryStackParamsType = {
  Home: {};
  CountryDetail: { country: Country };
};

const Stack = createNativeStackNavigator<CountryStackParamsType>();

const CountryRoute: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "List of Countries",
        }}
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CountryRoute;
