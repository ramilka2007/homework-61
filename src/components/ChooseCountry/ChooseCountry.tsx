import React from 'react';
import './ChooseCountry.css';

interface ChooseCountryProps {
  country: string;
  onClick: React.MouseEventHandler;
}

const ChooseCountry: React.FC<ChooseCountryProps> = React.memo(
  ({ country, onClick }) => {
    return (
      <div className="ChooseCountry" onClick={onClick}>
        <h4>{country}</h4>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return nextProps.country === prevProps.country;
  },
);

export default ChooseCountry;
