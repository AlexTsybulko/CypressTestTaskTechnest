# CypressTestTaskTechnest


Checkout repo and find cypress.json file root folder

**1. Prerequisites:**  

cypress.json env variables and baseUrl should be updated according to your desired values, e.g.:  

```
{  
  "baseUrl": "http://localhost:8080",
  "supportFile": "cypress/support/index.ts", 
    "env": {  
      "USERNAME" : "username",  
      "EMAIL"    : "user@mail.com",  
      "PASSWORD" : "password",  
      "API_URL"  : "http://localhost:8080"  
    }  
}
```

**2. Steps to run test:**
* Open terminal in folder with package.json file
* Run *npm install*
* Run *npm run test*
