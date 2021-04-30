import validateEmail from "./helper";

function validateUsers(users) {
  let validCount = 0;
  let invalidCount = 0;
  let totalCount = 0;

  users.map((user) => {
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
