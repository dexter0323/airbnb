# Airbnb Clone

This project is a clone of the popular vacation rental platform, Airbnb. It is created for the purpose of practicing and honing frontend and backend development skills.

## Frontend

The frontend of this application is built using [Astro.js](https://astro.build/). Astro.js is a front-end framework that allows you to build faster, modern websites with less client-side JavaScript.

## Backend

The backend of this application is built using [Golang](https://golang.org/), also known as Go, is a statically typed, compiled language with clean syntax and efficient concurrency handling.

## Setup

### 1. Repository

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone
```

### 2. Docker Desktop

This project can also be set up using Docker Desktop. Docker allows you to package an application with all of its dependencies into a standardized unit for software development.

1. Install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).

2. Once Docker Desktop is installed, you can verify the installation by opening a terminal and typing:

```bash
docker --version
```

This should display the installed version of Docker.


### 3. VS Code Dev Containers

VS Code Dev Containers provide a fully configured development environment without needing to install and configure a development environment locally.

1. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code.

2. After cloning the project, open the project folder in VS Code. 

```bash
git clone https://github.com/dexter0323/airbnb.git
cd airbnb
code .
```

3. VS Code should prompt you to reopen the project in a container. If it doesn't, press `F1`, type `Remote-Containers: Reopen in Container`, and press `Enter`.

4. VS Code will build the Docker container and install all the necessary dependencies. This process may take a few minutes.

5. Once the container is built, you can start developing in the container just like you would in a local environment.

### 4. Taskfile

We are using a `Taskfile.yml` (also known as [Taskfile](https://taskfile.dev/)) to centralize our scripts. This helps in maintaining consistency and ease of use across different development environments. You can find this file in the root directory of the project.

```bash
task <task-name>
```
To see all available tasks, run:

```bash
task --list-all
```
