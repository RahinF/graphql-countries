import client from '../../apollo-client';
import BackButton from '../../components/BackButton';
import ContainerLayout from '../../components/ContainerLayout';
import Item from '../../components/Item';
import { gql } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';
import Title from '../../components/Title';
import Head from 'next/head';

interface Country {
  code: string;
  name: string;
}

interface Props {
  continent: string;
  countries: Country[];
}

export const GET_COUNTRY = gql`
  query Countries($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const { data } = await client.query({
    query: GET_COUNTRY,
    variables: {
      code: id,
    },
  });

  return {
    props: {
      continent: data.continent.name,
      countries: data.continent.countries,
    },
  };
};

const Continent: NextPage<Props> = ({ continent, countries }) => {
  return (
    <>
      <Head>
        <title>{continent}</title>
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
      <BackButton />
      <Title as="h1">{continent}</Title>

      <ContainerLayout>
        {countries.map((country) => (
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

export default Continent;
