// type User = {
//   birthYear: number;
// };

// function calculateAgeOfUser(user: User) {
//   return new Date().getFullYear() - user.birthYear;
// }

// // calculateAgeOfUser("Diego");
// // calculateAgeOfUser({});
// const result = calculateAgeOfUser({
//   birthYear: 1991,
// });

// console.log(result);

import fastify from 'fastify';

const app = fastify();

app.get('/', () => {
  return 'Hello World';
});

const port = Number(process.env.PORT ?? 3333);

app
  .listen({ port })
  .then(() => {
    console.log(`Server is running on port ${port}`);
  })
  .catch(console.error);
