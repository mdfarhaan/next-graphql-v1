import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { InView } from "react-intersection-observer";
import Card from "./Card";
import { getChracters } from "../graphql/queries";
import { updateQuery } from "../utils/helper";

const Info = () => {
  const [page, setPage] = useState(1);

  const { loading, error, fetchMore, data } = useQuery(getChracters, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });
  console.log(loading);
  useEffect(() => {
    setPage(page + 1);
  }, [data]);

  return (
    <>
      {data && data.characters.results.map((item) => <Card data={item} />)}
      {data && (
        <InView
          onChange={async (inView) => {
            if (inView) {
              console.log(`Fetching page: ${page}`);
              await fetchMore({
                variables: {
                  page,
                },
                updateQuery,
              });
            }
          }}
        />
      )}
      {loading && <h1 className="absolute text-xl m-5">Loading</h1>}
      {error && <h1>Error</h1>}
    </>
  );
};

export default Info;
