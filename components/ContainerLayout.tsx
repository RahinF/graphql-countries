import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

interface Props {
  children: ReactNode;
}

const ContainerLayout: FC<Props> = ({ children }) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (event: Event) => {
    const { scrollHeight, scrollTop, clientHeight } =
      event.target as HTMLDivElement;

    const scrollbarSizeMax = scrollHeight - clientHeight;
    const position = (scrollTop / scrollbarSizeMax) * 100;
    setScrollPosition(position);
  };

  useEffect(() => {
    const node = scrollbarRef.current;

    if (node) {
      scrollbarRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (node) {
        node.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="flex h-96">
      <ScrollContainer
        className="hide-scrollbar flex h-full w-full max-w-screen-sm flex-col gap-4"
        hideScrollbars={false}
        innerRef={scrollbarRef}
      >
        {children}
      </ScrollContainer>
      <div
        className="mt-2 w-2 rounded bg-gradient-to-t from-pink-400"
        style={{ height: `${scrollPosition}%` }}
      />
    </div>
  );
};

export default ContainerLayout;
