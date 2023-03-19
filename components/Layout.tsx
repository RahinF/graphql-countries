import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="grid h-screen place-items-center p-4">
      <div className="background-animate fixed top-0 left-0 -z-50 h-screen w-screen bg-gradient-to-r from-orange-100 via-pink-300 to-yellow-100" />

      <div className="w-full max-w-screen-md rounded-2xl border-[1px] border-solid border-white border-opacity-30 bg-gradient-to-b from-white/50 to-white/25 px-4 py-10 shadow-md shadow-black/10 backdrop-blur-lg lg:px-14">
        {children}
      </div>
    </main>
  );
};

export default Layout;
