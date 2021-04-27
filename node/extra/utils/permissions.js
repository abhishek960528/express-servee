const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
};

const hasPermission = (moduleName, role, permissionType) => {
  const module = permissions[moduleName];
  if (module[permissionType].includes(role) || module["all"].includes(role)) {
    console.log("true");
  } else {
    console.log("false");
  }
};

hasPermission("getUsers", "trainee", "read");
