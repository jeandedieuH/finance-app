import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-3 lg:px-14">
      <Header />
      {children}
    </main>
  );
};

export default layout;
