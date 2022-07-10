# dotz-web-app
This is the React frontend for the Dotz customer facing portal.

## Setup
1. [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Ensure Docker Desktop is running
3. Run `docker-compose -f docker-compose.dev.yml up --build` from project root
4. [Go here](http://localhost:3000)
5. Your frontend/webapp changes should reflect immediately on save!
6. Perform setup [here](https://github.com/dotz-tech/wrecking-ball#start-up-application) - note the java service must be rebuilt for backend changes to reflect
7. Ensure both containers (_dotz_dotz-web-app_1_ & _dotz_wrecking-ball_1_) are running with `docker ps`

## FAQ
### How is container networking configured?
https://gist.github.com/juanje/abc66f983cda1843f5e798ac11a578b9
