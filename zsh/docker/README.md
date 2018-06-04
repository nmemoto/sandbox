# zsh/docker
zsh の設定を気軽に試す Docker 環境

## description
[prezto](https://github.com/sorin-ionescu/prezto) を使用している

## How to use
```
$ ./start.sh
```
or
```
$ docker build -t sandbox/zsh/docker .
$ docker run -itd --name zsh-test sandbox/zsh/docker
$ docker exec -it zsh-test zsh
```

## How to delete container
```
$ ./end.sh
```
or
```
$ docker rm -f zsh-test
```
