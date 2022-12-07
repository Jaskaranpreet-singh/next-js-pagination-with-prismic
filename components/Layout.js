import { Header } from "./Header";

export const Layout = ({ navigation, settings, children,searchBar}) => {
  return (
    <div className="r">
      <Header navigation={navigation} settings={settings} searchBar={searchBar} />
      <main>{children}</main>
    </div>
  );
};
