export interface CountryNameType {
  alpha3Code: string;
  name: string;
}

export interface CountryInfoType {
  name: string;
  flag: string;
  capital: string;
  population: number;
  borders: string[];
}

export interface BorderType {
  name: string;
}
