import {hasPermission} from "./helper";


export const permissions = {
    getUsers: {
      all: ["head-trainer"],
      read: ["trainee", "trainer"],
      write: ["trainer"],
      delete: [],
    },
  };
  

export default hasPermission;
