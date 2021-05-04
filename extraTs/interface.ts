interface IPermission {
  
    all: [string],
    read:[string],
    write: [string],
    delete: [string]
  
}

interface Ivalidation {
    email : string
  }

export  {IPermission,Ivalidation};
