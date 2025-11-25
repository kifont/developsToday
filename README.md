How to Run the Project

Start Frontend

- cd frontend
- npm install
- npm run dev
- Local:   http://localhost:5174/

Start Backend

- cd backend
- npm install
- http://localhost:3000

Configure environment variables

- backend/.env

Add to file this:

DB_HOST=localhost
DB_PORT=3000
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=quiz_db


Set up the database for(PostgreSQL)

- CREATE DATABASE quiz_db;

- npm run dev

In console, you see 

DB connected
Server started on port 3000
