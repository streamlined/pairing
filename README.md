# Requirements
For the BE:
- Ruby (recommended version 3.0.3, also rvm is suggested)
  - rvm: https://rvm.io/rvm/install
- MySql (recommended version 8.0.26)
  - https://dev.mysql.com/downloads/mysql/
- Rails (`>= v6.1.6.1`): 
  - `gem install rails` (once ruby is installed)

For the FE
- Node >= v14.17.0
- Yarn: `npm install --global yarn` (can just use npm if preferred)
# Getting started

Clone the git repository

```bash
git clone https://github.com/streamlined/pairing.git
```

To start the backend server

```bash
cd backend
bundle install
rails db:migrate
rails s # listens on localhost:3000
```

To start the frontend application

```bash
cd frontend
yarn install
yarn dev # listens on localhost:3001
```

You can find all static assets (icons, images) you need at the `/public` directory, located at the top level of the `frontend` directory.
