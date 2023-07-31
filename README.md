# Full Stack JS - Code Challenge - Español

# Challenge File Visor

This repository contains an application that allows you to visualize and load data from CSV files using Express and React+Bootstrap.

## File Structure

```
challenge-file-visor/
  ├── visor-gui/
  │   ├── Dockerfile
  │   ├── package.json
  │   ├── public/
  │   └── src/
  │       └── index.js
  ├── api-visor/
  │   ├── Dockerfile
  │   ├── package.json
  │   └── index.mjs
  ├── docker-compose.yml
  └── README.md
```

## Prerequisites

- Docker
- Docker Compose

## Usage Instructions

1. Clone this repository to your local machine from the main branch:

```
git clone https://github.com/jhanco07/challenge-file-visor.git
```

2. Navigate to the root directory of the repository:

```
cd challenge-file-visor
```

3. Run the following command to build Docker images and start the services:

```
docker-compose up --build
```

4. The applications will be available at the following URLs:
   - visor-gui on port 3001 (http://localhost:3001)
   - api-visor on port 3000 (http://localhost:3000):
       Get data from all files: http://localhost:3000/v1/files/data
       Get data from specific file: http://localhost:3000/v1/files/data?fileName=test3.csv

## Services

The application consists of the following services, each with a brief description:

- **visor-gui**: Provides a user interface developed in React+Bootstrap to visualize the data.
- **api-visor**: Supplies data from CSV files using Express.js.

---
Note: Some parts of the original text were ambiguous, and I've made assumptions for clarity. Please feel free to correct any inaccuracies or provide additional details as needed.
