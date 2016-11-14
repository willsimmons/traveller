# Traveller

### API

| Method | Uri          | Comment                          | 
|--------|--------------|----------------------------------|
| GET    | api/museum   | Nearby Museums                   |
| GET    | api/park     | Nearby Parks                     |
| GET    | api/bank     | Nearby Banks                     |
| GET    | isochrone/   | Query endpoint for Isochrone JSON|

### Setup Server Enviroment

```sh
> git clone 
> cd 
> npm install [or] yarn install
> create .env file and enter Google Places API KEY
> npm start [or] npm test [or] npm run start-dev
```
### Application Structure

```
|- ?                          //iOS app (react native stuff here)
|- spec/                      //Server Tests
  |- apiSpec.js               //API integration tests
  |- googleControllerSpec.js  //Google Places API Controller unit tests
|- example.env                //Sample of .env file, which must be written 
|- server.js                  //Server configuration file 
|- server/          
  |- api.js                   //server endpoint router
  |- googleController.js      //data manipulation of Google Places API results
  |- tools.js                 //generic helper functions
|- package.json               //Dependencies for the server
|- .gitignore
```
