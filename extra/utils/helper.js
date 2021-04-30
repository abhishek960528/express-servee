export function validateEmail(inputText) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(regex)) {
    return true;
  } else {
    return false;
  }
}
export const hasPermission = (moduleName, role, permissionType) => {
  const module = permissions[moduleName];
  if (module[permissionType].includes(role) || module["all"].includes(role)) {
    console.log("true");
  } else {
    console.log("false");
  }
};
