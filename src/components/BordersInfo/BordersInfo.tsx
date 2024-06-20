import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BorderType } from '../../types';
import { ALPHA_CODE_COUNTRY_URL, REST_COUNTRIES_URL } from '../../constants';

interface BordersInfoProps {
  border: string;
}

const BordersInfo: React.FC<BordersInfoProps> = ({ border }) => {
  const [name, setName] = useState<null | BorderType>(null);

  const fetchPost = useCallback(async () => {
    const { data: name } = await axios.get<BorderType>(
      REST_COUNTRIES_URL + ALPHA_CODE_COUNTRY_URL + border,
    );
    setName(name);
  }, [border]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  return (
    name && <li style={{ fontSize: 20, fontWeight: 'bold' }}>{name.name}</li>
  );
};

export default BordersInfo;
