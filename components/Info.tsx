import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./Card";
import { InView } from "react-intersection-observer";

const Info = () => {
  const [page, setPage] = useState(1);

  const QUERY = gql`
    query Characters($page: Int) {
      characters(page: $page) {
        info {
          count
        }
        results {
          name
        }
      }
    }
  `;

  const { loading, error, fetchMore, data } = useQuery(QUERY, {
    variables: { page: 1 },
  });

  useEffect(() => {
    setPage(page + 1);
  }, [data]);

  return (
    <div>
      {data && data.characters.results.map(() => <Card />)}
      {data && (
        <InView
          onChange={async (inView) => {
            if (inView) {
              await fetchMore({
                variables: {
                  page: page,
                },
                updateQuery: (previousData, { fetchMoreResult }) => {
                  let prevResult = previousData.characters.results;
                  let nextResult = fetchMoreResult.characters.results;

                  let temp = [...prevResult, ...nextResult];

                  return {
                    characters: {
                      info: fetchMoreResult.characters.info,
                      results: temp,
                    },
                  };
                },
              });
            }
          }}
        />
      )}
      {loading && <h1>Loading</h1>}
    </div>
  );
};

export default Info;
