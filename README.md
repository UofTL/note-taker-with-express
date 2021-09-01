# note-taker-with-express
Live URL:https://mysterious-depths-83071.herokuapp.com/
Repo URL:https://github.com/UofTL/note-taker-with-express.git

 This application can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

  * [Installation](#install)
  * [Usage](#usage)
  * ![markdown-preview-image](./demo.gif)
## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Install

Clone project.
Run the following line of code in your terminal to install all the needed packages: 
```
npm i
```

## Usage

Once all the packages have been installed, open terminal and run the following code in command line : 
```
node server.js

```
You will be prompted with questions to fill out employee information. Each type of employee you select will ask an additional question specific to the role of the employee. Once you have added all the employees you need select 'Im all done'. Your employee cards will then generate to the generateTeam.html where you can then view your team. 

## Built With
- HTML
- CSS
- Bootstrap 
- JavaScript
- Node.js
  - Express

## Screen shots

![Usage](https://user-images.githubusercontent.com/84641285/131750187-534c28de-224d-466a-92a0-699b9a0696aa.png)
![Live](https://user-images.githubusercontent.com/84641285/131750028-6cba5bb3-7389-4e8f-96aa-fb80455d4004.png)