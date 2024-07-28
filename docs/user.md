# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
    "username": "Amin",
    "password": "Rahasia",
    "name": "Aminudin Abdulloh"
}
```

Response Body :

```json
{
    "data": {
        "username": "Amin",
        "name": "Aminudin Abdulloh"
    }
}
```


## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username": "Amin",
    "password": "Rahasia",
    "name": "Aminudin Abdulloh"
}
```

Response Body :

```json
{
    "data": {
        "username": "Amin",
        "name": "Aminudin Abdulloh",
        "token": "session_id_generated"
    }
}
```

## Get User

Endpoint : GET /api/users/current/

Headers :
- Authorization : token

Response Body :

```json
{
    "data": {
        "username": "Amin",
        "name": "Aminudin Abdulloh",
    }
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :

```json
{
    "password": "Rahasia", // optional if want to change password
    "name": "Aminudin Abdulloh" // optional if want to change name
}
```

Response Body :

```json
{
    "data": {
        "username": "Amin",
        "name": "Aminudin Abdulloh",
        "token": "session_id_generated"
    }
}
```

## Logout User

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Response Body :

```json
{
    "data": true
}
```