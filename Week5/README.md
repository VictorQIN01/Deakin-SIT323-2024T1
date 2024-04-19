## Week 5 Tasks Documentation
1. Code from ./Week4 was cloned to this directory
2. Created **Dockerfile** in current directory
3. A new account was created on DockerHub with username **victorqin01** (same as GitHub)
4. A Docker image was built with the command: `docker build -t victorqin01/node-calculator-app:1.1.1 .`
5. Once the Docker image was successfully created, a container was created and run with command: `docker run --name container-01 -p 8000:8000 victorqin01/node-calculator-app:1.1.1` 
6. A log message `app running on port 8000` was shown as the output indicating successful execution
7. After testing, the Docker image was pushed to DockerHub

### New Tasks(Added after Week 6 Workshop): Docker Compose file
1. `docker network` command was created and used in `docker run` command to config network with `--network=[network-name]` 
2. new **docker-compose.yml** file was created in current directory to config the docker image so the image can be setup and run with a single command: `docker compose`
