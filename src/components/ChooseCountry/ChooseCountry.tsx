import React from 'react';

interface ChooseCountryProps {
  country: string;
}

const ChooseCountry:React.FC<ChooseCountryProps> = ({country}) => {
  return (
    <div>
      {country}
    </div>
  );
};

export default ChooseCountry;