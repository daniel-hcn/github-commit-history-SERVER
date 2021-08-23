# Github Commit History - Server

## Description

RESTful API that let's you retrieve the data of a Github repository such as its commits and branches.

The repository of the WebApp that utilizes this service can be found at https://github.com/daniel-hcn/github-commit-history-client

## Requirements

- NodeJs 14 or later
- Docker 20 or later

## Running the service

It is **strongly recommended** to run the application through Docker with the following command. This will generate the docker image and container, exposing the service at port **3001**.

```bash
$ docker-compose up -d
```

## Usage

After starting the service, navigate to **http://localhost:3001/** to access the API documentation provided by SwaggerUI. Each endpoints' URLs, parameters, and responses structures and codes will be described there.

## Other commands available

The project contains several commands available, most of them being useful for a development environment.

```bash
# run the service in watch mode
$ npm run start:dev

# make a build of the project
$ npm run build

# execute unit tests
$ npm run test

# format all files
$ npm run format
```
