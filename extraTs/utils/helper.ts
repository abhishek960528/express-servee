

export function validateEmail(inputText:string) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(regex))  {
    return true;
  } else {
    return false;
  }
}

import {IPermission,Ivalidation} from "../interface";
import permissions from "../index";

export const hasPermission = (moduleName:string, role:string, permissionType:string) : Boolean => {
  const module:IPermission = permissions[moduleName];
  return  module[permissionType] && module[permissionType].includes(role) || module["all"].includes(role)
};
