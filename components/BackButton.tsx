import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import { FC } from 'react';

const BackButton: FC = () => {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex gap-2 uppercase tracking-wider"
    >
      <ArrowLeft
        data-testid="back arrow icon"
        size={24}
      />
      back
    </button>
  );
};

export default BackButton;
