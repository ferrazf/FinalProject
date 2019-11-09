# Pocket Spotter

## About

Pocket Spotter is a voice-controlled workout app for the mobile phone, featuring workout routines accessible via voice commands. Comprising of a single page application (SPA), the app runs on both Android and iOS and forgoes the need for installation. 

## Tech Stack

  - Front-ent: Grommet, React, Voice APIs
  - Back-end: Node.js, Express, PostgresSQL

## Client

  Client's [readme](/client) has the following information:
  - Getting Started
  - Dependencies

## Server

  Server's [readme](/server) has the following information:
  - Getting Started
  - Dependencies
  - Routes

## Network Diagram

![Network Diagram](./resources/network_diagram.png)

## ERD

![ERD](./resources/database_UML.png)

## Upcoming Features

1. Profile page
2. Create custom exercises
3. Create new workout routines
4. Workout history page
5. Instructions page
6. Share workout
7. View someone else's workout
8. Like and comment on someone else's workout
9. Display workout schedule (calendar)

## Screenshots

![Register Page](./resources/Register.png)
![Login Page](./resources/Login.png)
![View Workouts](./resources/ViewWorkouts.png)
![View Exercises](./resources/ViewExercises.png)
![Edit Exercise](./resources/EditExercise.png)

## Known Issues

- When accessing the deployed app, it may become idle after a several hours of not being used, which may slow down response time upon first accessing the app.
- Speech recognition is currently only supported on Android phones.
