import clsx from 'clsx';
import { FC, ReactHTML, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  as?: keyof ReactHTML;
}

const Title: FC<Props> = ({ children, as }) => {
  const Component = as || 'div';

  return (
    <Component
      className={clsx(
        'my-4 text-center text-3xl font-bold uppercase',
        'bg-gradient-to-b from-pink-400 bg-clip-text text-transparent'
      )}
    >
      {children}
    </Component>
  );
};

export default Title;
