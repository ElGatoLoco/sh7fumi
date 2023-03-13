# SH7FUMI

## For the impatient

Check out the live app [here](http://46.101.203.75:7777/)

## About

This is a reference implementation of a popular hand game called Shifumi, also known as rock-paper-scissors, which is a hand game usually played between two people, where each player simultaneously forms one of three shapes with an outstretched hand. The three shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index and middle fingers extended, forming a V).

The objective of the game is to choose a shape that defeats the opponent's shape according to the following rules:

- Rock beats scissors (rock crushes scissors)
- Scissors beat paper (scissors cut paper)
- Paper beats rock (paper covers rock)
If both players choose the same shape, the game is tied and played again until there is a winner.

Shifumi is often used as a random selection method in situations where two decision-makers cannot agree on a course of action. It is also popular as a game of chance and strategy played for fun or as a means of resolving disputes.

## Running the project

This project has been developed with [React](https://reactjs.org/) and [NodeJS](https://nodejs.org/).

For single-player use, running the client app is sufficient. However, for multiplayer mode, you need to start the backend as well, which is essentially a simple socket server that handles message passing between connected users. The backend does not rely on a database; instead, all data is stored in memory.

To start the frontend app in development mode, run `yarn start` from the client folder. To start the server in development mode, you should run `yarn dev` from the server folder. For additional commands and building the app, check out the `package.json` files in both the client and server folders.

## TODO
- Proclaim the winner once a certain score is reached
- Handle users leaving and rejoining an already started game
- Make the game playable using the keyboard
- Add a way to return to the home page without native controls
- Take into account the space that the bottom bar takes on handheld devices
- Prevent reaching elements pushed outside of the viewport when using the tab key
