# hello-reactjs

## build reactjs

```
npm install

npm run build:dev

# for prd
# npm run build:prd
```

## build image

```
docker build -t "hello-reactjs:local" -f ./cicd/docker/Dockerfile .
```

## run container

```
docker run --rm --name=hello-reactjs -p 8010:80 "hello-reactjs:local"
```

## helm 

- deploy
```
# helm upgrade -i hello-reactjs ./cicd/helm-service --set 'image.tag=2310.1' --dry-run --debug

helm upgrade -i hello-reactjs ./cicd/helm-service --set 'image.tag=2310.1'
```

- delete

```
helm uninstall hello-reactjs --namespace default
```


## Appendix

- [create-react-app](./docs/create-react-app.md)

### docker-hub

- [hello-reactjs](https://hub.docker.com/r/symplesims/hello-reactjs)

```
# pull from hub
docker pull symplesims/hello-reactjs:1.0

# run on local
docker run --rm --name=hello-reactjs -p 8010:80 "symplesims/hello-reactjs:1.0"
```

### buildx for multiple platform

```
docker buildx build --build-arg "VERSION=2310.3" --build-arg "PROFILE=production" \
  --platform linux/amd64,linux/arm64/v8 --tag "hello-reactjs:local" \
  --file ./cicd/docker/Dockerfile .
```

## helm

### deploy

```
helm plugin install https://github.com/jkroepke/helm-secrets --version v4.5.1
```

```
helm secrets upgrade -i hello-reactjs --namespace default --set 'image.tag=2310.1' -f ./cicd/charts/values.yaml ./cicd/charts 
```

### uninstall
```
helm uninstall hello-reactjs --namespace default
```

