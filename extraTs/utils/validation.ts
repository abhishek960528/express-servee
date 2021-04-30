import {validateEmail} from "./helper";

const usersData = [
  {
    traineeEmail: "abhishek.rakhade@successive.tech",
    reviewerEmail: "krishna.nichal@successive.tech",
  },
  {
    traineeEmail: "adesh",
    reviewerEmail: "abhishek#gmail.com",
  },
  {
    traineeEmail: "adeshlad@gmail.com",
    reviewerEmail: "sarada@regular.com",
  },
];

function validateUsers(users:any) {
  let validCount = 0;
  let invalidCount = 0;
  let totalCount = 0;

  users.map((user:any) => {
    if (validateEmail(user.traineeEmail)) {
      validCount++;
      totalCount++;
    } else {
      invalidCount++;
      totalCount++;
    }
  });
  console.log("user:", users);
  console.log("valid Count:", validCount);
  console.log("invalid Count:", invalidCount);
  console.log("TotalCount:", totalCount);
}
validateUsers(usersData);
