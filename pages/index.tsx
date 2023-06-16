import Head from "next/head";
import Info from "../components/Info";

const IndexPage = () => (
  <div className="grid place-content-center">
    <Head>
      <title>NextJs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Info />
  </div>
);

export default IndexPage;
