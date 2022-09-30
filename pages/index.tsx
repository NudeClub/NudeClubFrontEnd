import type { ReactElement } from "react";
import MainLayout from "../components/layouts/main";
// import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    // <MainLayout>
    /* <NestedLayout>{page}</NestedLayout> */
    // {page}
    // </MainLayout>
    <MainLayout />
  );
};

export default Home;
