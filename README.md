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

App.js 코드를 변경 합니다.

## Runtime 환경 적용 
development 및 production 과 같은 각각의 런타임 환경에서 동작하도록 profile을 적용합니다.



### Build for Runtime 환경

```
npm run build:dev
npm run build:prd
```

- Development `.env.development` 파일을 만들고 npm 빌드 옵션에서 REACT_APP_ENV=development 환경 변수를 설정하여 빌드 합니다.
- Production `.env.production` 파일을 만들고 npm 빌드 옵션에서 REACT_APP_ENV=production 환경 변수를 설정하여 빌드 합니다.

```
# for Development
REACT_APP_ENV=development react-scripts build

# for Production
REACT_APP_ENV=production react-scripts build
```

### Runtime 환경 변수 참조

- `.env.{PROFILE}` 파일에 아래와 같이 환경 변수를 설정할 수 있습니다. 

```
REACT_APP_CODE=72a7f444-4318-409c-9772-2a36bcb7ce6b
```

중요한 점은 반드시 `REACT_APP_`으로 시작하도록 이름을 지정하여ㅑ 합니다. 

<br>

- react 코드에서 위의 환경 변수를 아래와 같이 참조할 수 있습니다.

```
appcode = process.env.REACT_APP_CODE

const prod = {
    properties: {
        API_URL: 'https://app.myservice.com',
        PROFILE: 'Production'
    }
};

const dev = {
    properties: {
        API_URL: 'http://localhost:8080',
        PROFILE: 'Development'
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod
```

```typescript
class App extends Component {
    appcode = process.env.REACT_APP_CODE
    render() {
        return (
            <div> {appcode} </div>
        );
    }
}
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
docker run --rm --name=hello-reactjs -p 8010:80 "hello-reactjs:local"
```

