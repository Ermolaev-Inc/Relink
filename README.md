# [Relink](http://relink5.ru)
---
Relink is a site for reducing links

# Installation
---
*You need nodeJS and npm*
1. Clone repository
2. In the main directory use
`npm install`
3. Then
`npm run client:install`
4. In the main directory create a new folder “config”
5. In the config create “default.json”
```
{
  "port": 5000,
  "jwtSecret": "<your jwtSecret>",
  "mongoUri": "<your mongoUri>",
  "baseUrl": "http://localhost:5000"
}
```
6. In the main directory use
`npm run dev`
