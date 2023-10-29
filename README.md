# hello-reactjs
reactjs 지식이 없는 사람에게 가장 처음 시작하는 hello 데모 

## node 및 npm 설치 
```
nvm install v18.18.2
nvm alias default v18.18.2
npm install -g create-react-app
npm install --save-dev webpack webpack-cli
```

## hello-reactjs 프로젝트 생성

```
create-react-app hello-reactjs
```

## hello-reactjs 패키지 
```
npm run build
```

## build image
```
docker build -t "hello-reactjs:local" -f ./cicd/docker/Dockerfile .
```

## run container
```
docker run --rm --name=vertx-lotto-api -p 8010:80 "hello-reactjs:local"
```