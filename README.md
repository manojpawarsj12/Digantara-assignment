
---
# Cron Manager


## Prerequisites


- **Docker:** Install Docker on your machine by following the instructions at [Docker Installation Guide](https://docs.docker.com/get-docker/).

## Getting Started

To get this project up and running, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/manojpawarsj12/Digantara-assignment
cd Digantara-assignment
```

### 2. Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
DB_HOST=postgres
DB_USERNAME=postgres
DB_PASSWORD=manoj
DB_NAME=cron
DB_PORT=5432
```

These variables are used to configure the database connection for the Nest.js application.

### 3. Docker Compose

Build and start the application using Docker Compose:

```bash
docker-compose up --build
```

This command will download necessary Docker images, build your Nest.js application container, and start both the Nest.js app and PostgreSQL container.

### 4. Accessing the Application

Once the Docker Compose process is complete, you can access your Nest.js application at [http://localhost:3000](http://localhost:3000).

### 4. Accessing the Application Documentation

Once the Docker Compose process is complete, you can access your Nest.js application Swagger Documentation at [http://localhost:3000/api](http://localhost:3000/api).

### 6. Stopping the Application

To stop the application and containers, press `Ctrl + C` in your terminal, and then run:

```bash
docker-compose down
```
---