import clsx from 'clsx';
import { Quicksand } from 'next/font/google';
import Link from 'next/link';
import { FC, useState } from 'react';
import z from 'zod';

interface Props {
  href: string;
  text: string;
}

const quicksand = Quicksand({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
});

const AnimationState = z.enum(['entry', 'exit', 'default']);

type AnimationState = z.infer<typeof AnimationState>;

const Item: FC<Props> = ({ href, text }) => {
  const [animationState, setAnimationState] =
    useState<AnimationState>('default');

  function handleMouseEnter() {
    setAnimationState('entry');
  }

  function handleMouseLeave() {
    setAnimationState('exit');
  }

  return (
    <Link
      href={href}
      className={clsx(
        'group flex w-3/4 items-center rounded-2xl py-4 px-4',
        'bg-gradient-to-r from-pink-400 bg-no-repeat',
        {
          'card-entry': animationState === AnimationState.enum.entry,
          'card-exit': animationState === AnimationState.enum.exit,
        }
      )}
      style={{ backgroundSize: '0% 100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={clsx(
          'text-lg tracking-wider transition duration-300 group-hover:text-white',
          quicksand.className
        )}
      >
        {text}
      </span>
    </Link>
  );
};

export default Item;
