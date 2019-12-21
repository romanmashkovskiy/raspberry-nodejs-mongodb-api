### Installation:

    - install: git, nodejs, pm2, yarn and mongodb
    - create database
    - clone project
    - $ cp .env.example .env
    - configure db connection and JWT_SECRET
    - $ yarn install
    - $ yarn db:seed
    - $ yarn dev

    API will be available on http://localhost:4001/api

### API Docs:
    Check {repo}/docs/postman_collection.json
    Postman vars:
        - API_URL - API url
        - TOKEN - auth jwt token, can be obtained through /auth/login or /auth/register