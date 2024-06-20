import React, { useCallback, useEffect } from 'react';
import ChooseCountry from '../../components/ChooseCountry/ChooseCountry';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import { CountryNameType } from '../../types';
import axios from 'axios';
import { COUNTRY_NAME_URL, REST_COUNTRIES_URL } from '../../constants';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = React.useState<CountryNameType[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(
    '',
  );

  const fetchCountries = useCallback(async () => {
    const { data: countries } = await axios.get<CountryNameType[]>(
      REST_COUNTRIES_URL + COUNTRY_NAME_URL,
    );
    console.log(countries);

    const promises = countries.map((country: CountryNameType) => {
      return {
        alpha3Code: country.alpha3Code,
        name: country.name,
      };
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
          <ChooseCountry
            key={country.alpha3Code}
            country={country.name}
            onClick={() => setSelectedCountry(country.alpha3Code)}
          />
        ))}
      </div>
      <div className="countryInfo">
        <CountryInfo id={selectedCountry} />
      </div>
    </div>
  );
};

export default Countries;
