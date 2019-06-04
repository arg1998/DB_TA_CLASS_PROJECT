# Music Library Database
<h4><font color=red>WARNING : this is a WIP and has not been deployed yet </font></h4>

## What's this?

This repository is the implementation of the **_Introduction To Database Systems_** class project.

## What is it made of?

- NodeJs: JavaScript Runtime Environment
- MongoDB : One of the best NoSQL (document-based) Databases
- Mongoose: An Excellent ORM and bridge over NodeJs and MongoDB
- ExpressJs: Fast and reliable HTTP API server

and lots of beautifully organized code ;-)

## Where can i find it?

the data base is hosted on the [mLab](https://mlab.com) and the server is on the [Heroku](https://heroku.com).
also you can **clone** this repo and run it on your own.

<hr />

# API Documentation

<h4><font color=red>WARNING: all POST HTTP methods must have their params ( if there is any) in the body as json with application/json header set </font></h4>

### Users Routes

- ##### Get all the available users in the database
  - Url: `https://SERVER_URL/user`
  - Method: `GET`
  - params: none

* ##### get a user by its ID

  - Url: `https://SERVER_URL/user/<user_id>`
  - Method: `GET`
  - params:
    - **user_id** : ID of a particular user

  example :  
  `https://SERVER_URL/user/5cf2928d207f4965efebbd66`

* ##### register a new user

  - Url: `https://SERVER_URL/register/`
  - Method: `POST`
  - body :
    - **name**: Name of the user
    - **username** : desired username
    - **password**: a password (be careful!!! this will save passwords in plain text :grimacing:)
    - **email**: user's email address
    - **date**: birth date of the user 
      - **y**: year 
      - **m** : month of the year
      - **d**: day of the month 

  example :<br />
  **url** : `https://SERVER_URL/user/5cf2928d207f4965efebbd66`<br />
  **POST body**: 
  ```json
  {
    "name" : "Farzin",
    "username" : "farzin_2020",
    "password" : "123789456",
    "email" : "farzin@site.com",
    "date" : {
      "y" : 1998,
      "m" : 5, 
      "d" : 16
    }
  }
  ```

* ##### Add friend to a user

  - Url: `https://SERVER_URL/add_friend`
  - Method: `POST`
  - body :
    - **user_id**: id of the user
    - **friend_id** : ID of the  second user which is going to be friend with first user

  example :<br />
  **url** : `https://SERVER_URL/add_friend`<br />
  **POST body**: 
  ```json
  {
    "user_id" : "5cf29b9aa2a016741124405a",
    "friend_id" : "5cf2928d207f4965efebbd66"
  }
  ```
