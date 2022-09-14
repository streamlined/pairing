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
