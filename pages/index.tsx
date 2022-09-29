import type { ReactElement } from "react";
// import MainLayout from "../components/layouts/main";
// import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from "./_app";
import Sidebar from "../components/sidebar";

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    // <MainLayout>
    /* <NestedLayout>{page}</NestedLayout> */
    // {page}
    // </MainLayout>
    <Sidebar />
  );
};

export default Home;
