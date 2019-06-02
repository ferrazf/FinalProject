# Server

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
6. Run the server: `npm run local`
7. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- bcrypt 3.0.x or above
- body-parser 1.15.x or above
- dotenv 2.0.x or above
- express 4.13.x or above
- jsonwebtoken 8.5.x or above
- knex 0.11.x or above
- knex-logger 0.1.x or above
- morgan 1.7.x or above
- pg 6.0.x or above


## Routes

| Routes                                                | Methods                 |
|-------------------------------------------------------|-------------------------|
|/api/muscles/:muscleId/exercises                       | GET                     |
|/api/muscles                                           | GET                     |
|/api/exercises                                         | GET, POST               |
|/api/exercises/:id                                     | GET, POST               |
|/api/workouts/:id                                      | GET, PUT                |
|/api/workouts/:workoutId/exercises/:id                 | GET, PUT, DELETE        |
|/api/workouts/:id/exercises                            | GET, POST               |
|/api/workouts                                          | GET, POST               |
|/api/users/:id/workouts                                | GET                     |
|/api/users/:userId/workouts/:id                        | PUT                     |
|/api/users/:userId/workouts/:workoutId/exercises/:id   | PUT, DELETE             |

