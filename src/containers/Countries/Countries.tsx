import React, { useCallback, useEffect } from 'react';
import ChooseCountry from '../../components/ChooseCountry/ChooseCountry';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import { CountryNameType} from '../../types';
import axios from 'axios';
import { COUNTRY_NAME_URL, REST_COUNTRIES_URL } from '../../constants';

const Countries = () => {
  const [countries, setCountries] = React.useState<CountryNameType[]>([]);
  const [selectedCountry] = React.useState<string | null>('')

  const fetchCountries = useCallback(async () => {
    const {data: countries} = await axios.get<CountryNameType[]>(REST_COUNTRIES_URL + COUNTRY_NAME_URL);
    console.log(countries);

    const promises = countries.map((country: CountryNameType) => {
      return {
        id: country.name,
        name: country.name,
      }
    });

    const allCountries = await Promise.all(promises);
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);

  return (
    <div className="row">
      <div className="countries">
        {countries.map((country: CountryNameType) => (
          <ChooseCountry key={country.id} country={country.name}/>
        ))}
      </div>
      <div className="countryInfo">
        <CountryInfo id={selectedCountry}/>
      </div>
    </div>
  );
};

export default Countries;