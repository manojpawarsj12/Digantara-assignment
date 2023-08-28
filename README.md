
---
# Project Name

## Overview

Briefly describe your project and its purpose here.

## Prerequisites

Before you begin, ensure you have met the following requirements:

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

## Usage

Provide instructions on how to use your application. Include details on available API endpoints, how to create and schedule jobs, and any other relevant information.

## Documentation

Include information on how to access API documentation or provide a brief overview of the API endpoints.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push your changes to your fork: `git push origin feature-name`.
5. Create a pull request on the main repository.

## License

This project is licensed under the [License Name] - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Mention any libraries, tools, or resources you used or were inspired by in this section.

---