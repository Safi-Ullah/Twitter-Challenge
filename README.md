This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Tweet List App

A simple react app that performs the following tasks:

* `List` tweets of certain twitter accounts listed in constants.js
* `Change` number of tweets retrieved for each account
* `Toggle` between dark/light theme
* `Change` order of columns of each account simply by dragging
* `Visit` tweet on twitter by clicking on the link

Note: 

* All the settings are being stored in local storage.
* Also need to make sure to have a server up and running for making calls to the twitter api with your credentials.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Need to have node installed.

### Installing

First of all clone the project and move to that directory.

```
git clone https://github.com/Safi-Ullah/Twitter-Challenge.git
cd ./Twitter-Challenge
```

Then in order to install the required node modules, run the following statement

```
npm install
```

### Starting

You've got project all setup, now all you need to do is start the development server, that will run on port 3000 by default.

```
npm start
```

### Building

In order to build project for deployment, run following statement

```
npm run build
```
