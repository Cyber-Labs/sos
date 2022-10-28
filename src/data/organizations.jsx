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
      "bla bla bla",
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
  //import {data} from './file'