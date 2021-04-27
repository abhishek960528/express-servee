var usersData = [
  {
    traineeEmail: "abhishek.rakhade@successive.tech",
    reviewerEmail: "krishna.nichal@successive.tech",
  },
  {
    traineeEmail: "adesh",
    reviewerEmail: "abhishek#gmail.com",
  },
  {
    traineeEmail: "gajana@gmail.com",
    reviewerEmail: "sarada@regular.com",
  },
];

function validateEmail(inputText) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(regex)) {
    return true;
  } else {
    return false;
  }
}

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
