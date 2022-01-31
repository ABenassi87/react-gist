import React, { useEffect, useState } from 'react';
import { GistDetails } from '../../model';
import { getGistsDetails } from '../../utils';
import Gist from '../Gist';

type GistsProps = {
  username: string;
};

const Gists: React.FunctionComponent<GistsProps> = ({ username }) => {
  const [gists, setGists] = useState<GistDetails[]>([]);

  useEffect(() => {
    fetchGists();
  }, []);

  const fetchGists = async () => {
    const gistsData = await getGistsDetails(username);
    setGists(gistsData);
  };

  return (
    <>
      <h2>{username}</h2>
      {gists.map(({ id }) => (
        <Gist key={id} id={id} />
      ))}
    </>
  );
};

export default Gists;
