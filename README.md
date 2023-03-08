# Full Stack Test

Contains an API using express and a react frontend application.

## Pre-requisites

To execute locally, you will need:

- nvm
- Nodejs `16.x`
- npm `8.x`

```shell
nvm install 16
```

## To run locally

To run locally you will need to run the server first, and then the React app.

### Run Express server
Open a new terminal and in the root of the repository
```shell
cd api-server
```


#### Install npm dependencies:
```shell
npm install
```

#### Execute

```shell
npm start
```


### Run React App
Open a new terminal and in the root of the repository
```shell
cd react-app
```

#### Install npm dependencies:
```shell
npm install
```

#### Execute

```shell
npm start
```

## To run tests for Express Server
Make sure the server is running

```shell
cd api-server
npm test
```

## What I would have done if I had more time:
* more complete code coverage of unit tests
* more time on prettifying the front end
* add linting
* fix vulnerabilities in npm install