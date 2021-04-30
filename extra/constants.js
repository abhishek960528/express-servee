export const usersData = [
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

export const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
};
