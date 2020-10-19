# retro-board

## Description

This is a project with the intention to create a retrospective board where people can join anonymously to create inputs and react to others participants inputs.

## Goal

![image](https://user-images.githubusercontent.com/8400059/95148347-7026b200-0759-11eb-83b1-17ccaa0545e3.png)

## Setup and how to run

First, open your cloned directory, the default directory name is `retro-board` (if you have not renamed), access it.

Within this directory we will find two directories, where is our frontend (`retro-board-ui`) and our API (`retro-board-api`).

### Starting the client:

```shell
$ cd retro-board-ui
$ yarn && yarn start
```

### Starting the server:

Start **postgres** instance:

**Note:** You need to keep this terminal window/tab opened

```shell
$ docker-compose up 
```
Running our API:

```shell
$ cd retro-board-api
$ yarn && yarn start
```

You can access API Docs in http://localhost:8080/api-docs

Seed DB:

```shell
yarn premigration:run
yarn seed:run
```

## How to contribute

1. Pick an issue that's not assigned to anyone and ask to work on it, so you'll be assigned.
2. Make sure to add tests whenever it's possible.
3. Use this commit pattern: `[#ISSUE_NUMBER] Your commit message`, example: `[#7] Add docker-compose to start postgres`
4. Have fun! :)
