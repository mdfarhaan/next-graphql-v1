export const updateQuery = (
  previousData: { characters: { results: any } },
  { fetchMoreResult }: any
) => {
  let prevResult = previousData.characters.results;
  let nextResult = fetchMoreResult.characters.results;

  let temp = [...prevResult, ...nextResult];

  return {
    characters: {
      results: temp,
    },
  };
};
