# retro-board

## Description

This is a project with the intention to create a retrospective board where people can join anonymously to create inputs and react to others participants inputs.

## Goal

![image](https://user-images.githubusercontent.com/8400059/95148347-7026b200-0759-11eb-83b1-17ccaa0545e3.png)

## Setup and how to run

Starting the client:

```
$ cd retro-board/retro-board-ui
$ yarn && yarn start
```

Starting the server:

```
$ docker-compose up // start postgres instance
$ cd retro-board/retro-board-api
$ yarn && yarn start
```

## How to contribute

1. Pick an issue that's not assigned to anyone and ask to work on it, so you'll be assigned.
2. Make sure to add tests whenever it's possible.
3. Use this commit pattern: `[#ISSUE_NUMBER] Your commit message`, example: `[#7] Add docker-compose to start postgres`
4. Have fun! :)
