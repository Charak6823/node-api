# node-api

# Module 1: Getting Start
    - install Node.js if does not exist
    - create new project folder (node-api)
    - npm init -y
    - create app.js
    - run project
        node app.js
    - prepare project structure
        node-api
            |-controllers
            |   |-category.route.js
            |-routes
                |-category.route.js
            |-app.js

# Module 2: Install ExpressJs
    - npm install express --save

# Module 3: Database migration integration
    - npm install --save sequelize
    - npm install --save-dev sequelize-cli
    - npm install --save mysql
    - npx sequilize-cli init
      This will create following folders
      |-configs
      |-models
      |-migrations
      |-seeders

# Module 4: plugin nodemon for live reload when files change
    - npm install --save-dev nodemon
    - update package.json 
        {
            "scripts":{
                "start": "nodemon app.js"
            }
        }
    - npm start