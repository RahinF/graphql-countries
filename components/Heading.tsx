import Link from 'next/link';
import { MagnifyingGlass } from 'phosphor-react';
import { FC } from 'react';
import BackButton from './BackButton';
import Title from './Title';

interface Props {
  text: string;
}

const Heading: FC<Props> = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BackButton />

        <Link
          href="/search"
          className="group p-2"
        >
          <MagnifyingGlass
            data-testid="search icon"
            size={24}
            className="transition duration-300 group-hover:text-white"
          />
        </Link>
      </div>
      <Title as="h1">{text}</Title>
    </>
  );
};

export default Heading;
