import React, { useCallback, useEffect, useState } from 'react';
import { ALPHA_CODE_COUNTRY_URL, REST_COUNTRIES_URL } from '../../constants';
import axios from 'axios';
import { CountryInfoType } from '../../types';
import './CountryInfo.css';
import BordersInfo from '../BordersInfo/BordersInfo';

interface CountryInfoProps {
  id: string | null;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ id }) => {
  const [info, setInfo] = useState<null | CountryInfoType>(null);

  const fetchPost = useCallback(async () => {
    if (id !== null) {
      const { data: info } = await axios.get<CountryInfoType>(
        REST_COUNTRIES_URL + ALPHA_CODE_COUNTRY_URL + id,
      );
      setInfo(info);
    }
  }, [id]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  return info ? (
    <>
      <div>
        <div className="infoAboutCountry">
          <div className="title">
            <h1>{info.name}</h1>

            <h2>Capital: {info.capital}</h2>
            <h2>Population: {info.population} people</h2>
          </div>
          <img src={info.flag} alt={info.name} className="flag" />
        </div>
        <div className="borders">
          <h2>Borders with</h2>
          <ul>
            {!info.borders ? (
              <li>No borders</li>
            ) : (
              info.borders.map((country) => {
                return <BordersInfo key={Math.random()} border={country} />;
              })
            )}
          </ul>
        </div>
      </div>
    </>
  ) : (
    <h1>Выберите страну.</h1>
  );
};

export default CountryInfo;
