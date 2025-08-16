const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="lg:pl-20 min-h-screen transition-all duration-300">
      <div className="bg-gradient-light dark:bg-gradient-dark min-h-screen">
        <div className="max-w-screen-lg lg:mx-auto mx-4">{children}</div>
      </div>
    </main>
  );
};

export default Layout;