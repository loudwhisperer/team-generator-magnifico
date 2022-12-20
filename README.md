# team-generator-magnifico

## Description

The Team Generator Magnifico application's true purpose is to give a Project Manager or Head Engineer a way to create a static roster of their teams information on an HTMl page that can be generated in the Terminal for sake of ease.

I feel like the greatest lesson I learned working through this was A.)You can use async await to proc multiple question sets that need spefific data and criteria to pass and B.)How useful base constructors are when creating multiple constructors with similar assets to them. Also testing is hard but very useful for seeking out bugs in your code.

## Installation
- To install The Team Generator Magnifico application simply pull the SSH Link from the bright green code button in GitHub.
- Open up your terminal on your local machine and naviage to a directory you would like to store the code for this in type git clone then paste the SSH Link and hit enter.
- Once done you will have the full repo then it is just a matter of changing directories to The Team Generator Magnifico  application and using your preffered method for opening it in a code editor.

## Usage
User can enter in info for one of three categories of employee

- first they will navigate to the root of Team Generator Magnifico then type node index to start the application
- then they will enter in which employee type they want to add
- with a choice of Engineer, Intern or Engineer
- the user will then answer the prompts provided with the appropriate info (name, id, email etc.)
- when they finsih they will be prompted to add another employee or click done
- once done is clicked a index.html file will be generated in the dist folder of this application with the information added from the prompts

The video below will show the tests created for this application being run and a walkthrough of the applications uses as defined above:

[![Watch the video](./assets/images/screenshot%20.png)](https://drive.google.com/file/d/1nh3gUgSpdbvTu9GYYMg3tOoA8StHJoGH/view)

## License

MIT License

## Features

- The user can create a static HTML file with a team member in a group of programmers.
- They do so by initializing the app then selecting from a group of employement types these are Manager, Engineer and Intern
- They all have the base information to be provided Name, ID and Email
- The Intern will aslo define what school they are attending currently, the engineer will define their Git Hub Username and the Manager will provide their office number
- Once enough team members have been added a static HTML will be created in the dist folder and this will be done after clicking the done button in the first set of questions