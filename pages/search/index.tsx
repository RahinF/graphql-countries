import Title from '../../components/Title';
import { gql } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import client from '../../apollo-client';
import ContainerLayout from '../../components/ContainerLayout';
import Item from '../../components/Item';
import Head from 'next/head';

interface Country {
  code: string;
  name: string;
}

interface Props {
  countries: Country[];
}

export const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_ALL_COUNTRIES,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
};

const Search: NextPage<Props> = ({ countries }) => {
  const [query, setQuery] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    const query = event.target.value;
    const regex = new RegExp(query, 'i');
    const result = countries.filter((country) => regex.test(country.name));
    setFilteredCountries(result);
  }

  const countryList = query ? filteredCountries : countries;

  return (
    <>
      <Head>
        <title>Search by country</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <label htmlFor="query">
        <Title>Search by country</Title>
      </label>
      <input
        id="query"
        className="mb-6 w-full rounded-2xl border border-none bg-white/40 p-4 shadow"
        type="text"
        onChange={handleOnChange}
      />

      <ContainerLayout>
        {countryList.map((country: Country) => (
          <Item
            key={country.code}
            href={`/country/${country.code}`}
            text={country.name}
          />
        ))}
      </ContainerLayout>
    </>
  );
};

export default Search;
