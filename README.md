# React Tech Test - July 2023

## Setup

In the command-line:

- run `yarn` to install node_modules
- add `.env` to the root directory and add the neccessary variables. An example of which variables you need can be found in the `.env-example`
- run `yarn start` to load the application into the browser

## Task

Copy image as much as possible within 4 hours.

![Image trying to recreate](./src/assets/ui.png)

## Notes / Improvements

- If I had more time I would have done more testing.
- I would review the Types in more detail.
- I would have liked to have had more time to add more functionality.
- As there were no API docs I have to make some assumptions based on the response from the API; for example:
  - "Expertise and Reputation" and "Client Satisfaction", I assumed score is out of 1000.
  - "trends" and "tiers" are two examples of potential unions or enums. I do not have an exhaustive list of possible values.

## Tech Stack

- React
- TypeScript
- Redux
- Tailwind CSS
- CSS Grid & Flexbox

The above tech stack choice is pretty standard with perhaps the exception of Tailwind CSS. I have seen Tailwind CSS pop up more and more on job specifications so wanted the opporunity to familarise myself with the technology
