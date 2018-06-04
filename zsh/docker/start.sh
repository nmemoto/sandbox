docker build -t sandbox/zsh/docker .
docker run -itd --name zsh-test sandbox/zsh/docker
docker exec -it zsh-test zsh