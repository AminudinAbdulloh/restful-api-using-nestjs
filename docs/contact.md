# Contact API Spec

## Create Contact

Endpoint : POST api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
    "first_name": "Aminudin",
    "last_name": "Abdulloh",
    "email": "amin@example.com",
    "phone": "08123456789"
}
```

Response Body :

```json
{
    "data": {
        "id": 1,
        "first_name": "Aminudin",
        "last_name": "Abdulloh",
        "email": "amin@example.com",
        "phone": "08123456789"
    }
}
```

## Get Contact

Endpoint : GET api/contacts/:contactId

Headers :
- Authorization : token

Response Body :

```json
{
    "data": {
        "id": 1,
        "first_name": "Aminudin",
        "last_name": "Abdulloh",
        "email": "amin@example.com",
        "phone": "08123456789"
    }
}
```

## Update Contact

Endpoint : PUT api/contacts/:contactId

Headers :
- Authorization : token

Request Body :

```json
{
    "first_name": "Aminudin",
    "last_name": "Abdulloh",
    "email": "amin@example.com",
    "phone": "08123456789"
}
```

Response Body :

```json
{
    "data": {
        "id": 1,
        "first_name": "Aminudin",
        "last_name": "Abdulloh",
        "email": "amin@example.com",
        "phone": "08123456789"
    }
}
```

## Remove Contact

Endpoint : DELETE api/contacts/:contactId

Headers :
- Authorization : token

Response Body :

```json
{
    "data": true
}
```

## Search Contact

Endpoint : GET api/contacts

Headers :
- Authorization : token

Query Params :
- name : string, contact first_name or contact last_name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Response Body :

```json
{
    "data": [
        {
            "id": 1,
            "first_name": "Aminudin",
            "last_name": "Abdulloh",
            "email": "amin@example.com",
            "phone": "08123456789"
        },
        {
            "id": 2,
            "first_name": "Aminudin",
            "last_name": "Abdulloh",
            "email": "amin@example.com",
            "phone": "08123456789"
        }
    ],
    "pagging": {
        "current_page": 1,
        "total_page": 10,
        "size": 10
    }
}
```