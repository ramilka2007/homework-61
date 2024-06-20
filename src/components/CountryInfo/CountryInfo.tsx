import React from 'react';

interface CountryInfoProps {
  id: string | null;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ id }) => {
  return <>{id}</>;
};

export default CountryInfo;
