# PhotoTag

This repository is the back end for Photo-Tag, a MERN stack photo tagging game.

I originally made this while following the React course from [The Odin Project's](https://www.theodinproject.com/) curriculum as a front end only app. I updated it to be a full stack application to practice a number of technologies, notably Typescript, Tailwind CSS, and postgreSQL.

The postgreSQL implementation of this back end can be found on the postgreSQL branch [here](https://github.com/Stillwell-C/photoTagApi/tree/postgreSQL).

## Demo

The application is live at https://photo-tag.vercel.app/

## Front End Code

View the front end code [here](https://github.com/Stillwell-C/photoTag)

## Description

### Overview

- Built using MERN stack / REST API
- Reponsive, mobile-first UI
- Tailwind CSS
- Front/Back end written in Typescript
- Font end tested with Jest / React Testing Library
- Find all characters to submit your name and time
- The fastest 5 times for each map are displayed on the leaderboards page

### Detailed Description

This application was as a simple photo tagging puzzle game.

#### UI

The UI was made to be responsive with a mobile-first design and should function on both mobile devices and web browsers with larger screens. Tailwind CSS was used to style all components. There is a dark and light mode that is toggled through the user's system preference.

#### API

Once users have finished finding all characters on a given map, they have the option to submit their name. If they are within the 5 fastest times, their time will be displayed on the leaderboards page.

The [cors](https://www.npmjs.com/package/cors) package is used to only allow requests from specific origins. In this case, I am only allowing requests originating from the frontend.

## Built with

### Frontend

- ReactJS
- Typescript
- React Router
- Axios
- Tailwind CSS

### Backend

- NodeJS
- ExpressJS
- MongoDB/Mongoose
- Cloudinary (image storage)
