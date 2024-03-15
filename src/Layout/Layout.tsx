import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="mt-12">{children}</div>
    </div>
  );
};
export default Layout;
