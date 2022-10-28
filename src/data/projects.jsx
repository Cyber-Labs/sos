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
      1,
      11,
      "pro1",
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
      2,
      22,
      "pro2",
      "organization!",
      "bla bla bla",
      ["node js", "react", "mongodb", "express", "node js"],
      "https://www.github.com",
      "https://www.slack.com"
    ),
    makeData(
      "3",
      "org3",
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