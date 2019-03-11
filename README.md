# SimpleChat

Simple chat allows users to login with Google to enter a single, minimalistic chatroom

## Getting Started

To get the project up and running on your own local machine, simply follow these instructions

### Prerequisites

This project is based on Google's Firebase. As such, you will first need to have install Node.js and npm on your computer. See: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

After installing Node, you will need to install Google's Firebase-tools. I recommend a global install using the following command-line instruction:

```
npm install -g firebase-tools
```

## Deployment

Clone the repository to your local system and cd into the SimpleChat directory.

```
cd SimpleChat
```
Use Firebase's CLI to host a local server

```
firebase serve
```
Open your browser and go to localhost, port 5000

```
http://localhost:5000
```
If you don't want to host locally, you can also access the product directly by going to the following url:

* [SimpleChat](https://simplechat-intern-application.firebaseapp.com)

## Built With

* [Firebase](https://firebase.google.com/)
* [NodeJS](https://nodejs.org/en/)

## Authors

* **Lasse Borgen** - [LasseBorgen](https://github.com/LasseBorgen)

## Bugs and TODOs

When making a post containing an illegal word, the server will first create the post, inform all users about the post, trigger a cloud-function to edit the post and then inform all users again. In the future, creating posts should probably be done through http requests with an attached cloud-function trigger.

No attention has been paid to either design and security in this project.
