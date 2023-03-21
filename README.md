# json-server-Multiple-files

### This case solves the problem of patch unable to change the JSON file

## How to use it?

- ### `  npm i  `

- ### `  npm run start  `


### Initiate a GET request 

```
http://localhost:3000/api1/users/1  // users.json Single data
http://localhost:3000/api1/users  // users.json all data

http://localhost:3000/api1/posts/1  // posts.json Single data
http://localhost:3000/api1/posts  //posts.json all data
```

### Initiate a PATCH request 

```
http://localhost:3000/api1/users/1  // user.json

Request body:
{
    "name":"test"
}
// The data name with id 1 will be modified
```

