# Docker Compose Expo FastAPI Postgres Template

This repository provides a template for a full-stack application using Expo for the frontend, FastAPI for the backend, Postgres as the database, and MinIO for object storage (S3-compatible).  Everything is orchestrated using Docker Compose.

## Getting Started

### 1. **Clone the repository:**

### 2. Set up environment variables:

Backend (backend/.env): Copy .env.example to .env and fill in the placeholders with your database credentials, MinIO credentials, and database name.  The DATABASE_URL is pre-configured to work with the Docker Compose setup.
```
POSTGRES_USER=your_db_user
POSTGRES_PASSWORD=your_db_password
POSTGRES_DB=your_db_name
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?sslmode=disable

MINIO_ROOT_USER=your_minio_user
MINIO_ROOT_PASSWORD=your_minio_password
MINIO_ENDPOINT=http://minio:9000
```

Frontend (frontend/.env): Copy .env.example to .env and configure the API URL.  For local development within Docker, use the provided example, but replace 192.168.x.x with your machine's actual local IP address. You can find this by running ipconfig (Windows) or ifconfig (macOS/Linux). The 192 IP is mainly needed if you're planning to access your app via Expo Go on mobile.

```
NODE_ENV=development
EXPO_PRIVATE_API_URL=http://localhost:8000
EXPO_PUBLIC_API_URL=[http://192.168.](http://192.168.)x.x:8000  # Replace with your local IP
```
### 3. Run the application with Docker Compose:
`docker-compose up -d --build`

This command will build the Docker images and start the containers in detached mode. The -d flag runs the containers in the background, and --build ensures that any changes to the Dockerfiles are incorporated.

Access the application:

Frontend: Open your web browser or Expo Go app and navigate to http://localhost:8081.
Backend API: The backend API will be available at http://localhost:8000.
MinIO Console: Access the MinIO console at http://localhost:9001 using the credentials you set in the backend .env file.
Expo Go: Download the app in one of the appstores and open up `exp://192.168.x.x:8081`


### 4. Running Migrations


The database migrations are handled automatically when the containers come up.  The dbmate service in the compose.yaml file runs the migrations located in the migrations directory.

### 5. Key Components
Frontend (Expo): A React Native application using Expo. The App.js file fetches a message from the backend API. Expo allows you to build web/ios/android apps with ease.
Backend (FastAPI): A Python API built with FastAPI. It connects to the Postgres database and serves the message. Includes CORS enabled for communication with the Expo frontend. A Python backend is especially useful if you're planning on using ML libraries.
Database (Postgres): A relational database storing the app's data.
Object Storage (MinIO): This is mainly for local testing. It's an S3-compatible object (blob) storage service and makes it easy to test, though in production I'd likely use S3 or Cloudflare R2.
Docker Compose: Used to orchestrate all the services, making it easy to manage and run the application.
dbmate: Used to manage the database. Ideally all changes to the DB (create table, index, static data, etc) would live in a DB migration file to make maintenance easy.
