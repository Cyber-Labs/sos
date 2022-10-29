const makeData = (
    id,
    title,
    description,
    projects
  ) => {
    return {
        id,
        title,
        description,
        projects
    };
  };
const organizations = [
  makeData(
    11,
    "org1",
    "bla bla  flf ldfdlk dflkd kl fdl flfd ljfkl jlkfjdlkf jdlk jflk jdlfj dklfj dklfj dklfjdkldfjdlk jdklfj kljd fkjfkl jkdf jdklf kl jdklfjkl jdklf jbla",
    [1,2],
  ),
  makeData(
      22,
      "org2",
      "bla bla bla",
      [1,2],
    ),
];

export default organizations;