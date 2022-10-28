const makeData = (
    id,
    orgId,
    title,
    organization,
    description,
    techstacks,
    github,
    slack
  ) => {
    return {
      id,
      orgId,
      title,
      organization,
      description,
      techstacks,
      github,
      slack,
    };
  };
  const projects = [
    makeData(
      "1",
      "org1",
      "xxx",
      "organization!",
      "bla bla bla",
      [
        "node js",
        "react",
        "mongodb",
        "express",
        "node js",
        "react",
        "mongodb",
        "express",
      ],
      "https://www.github.com",
      "https://www.slack.com"
    ),
    makeData(
      "2",
      "org2",
      "xxx",
      "organization!",
      "bla bla bla",
      ["node js", "react", "mongodb", "express", "node js"],
      "https://www.github.com",
      "https://www.slack.com"
    ),
  ];
  
  export default projects;
  //import {data} from './file'