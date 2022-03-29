import React, { useContext, useEffect } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { CountriesContext } from "../../contexts/countries";
import useDebounce from "../../hooks/useDebounce";
import styles from "./styles";

type Props = {};

const SearchInput: React.FC<Props> = () => {
  const { searchText, setSearchText, fetchCountries } =
    useContext(CountriesContext);
  const debouncedValue = useDebounce(searchText, 2000);

  const handleTextInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSearchText(e.nativeEvent.text);
  };

  useEffect(() => {
    fetchCountries({ name: searchText });
  }, [debouncedValue]);

  return (
    <TextInput
      onChange={handleTextInputChange}
      placeholder="Search country..."
      style={styles.textInput}
      value={searchText}
    />
  );
};

export default SearchInput;
