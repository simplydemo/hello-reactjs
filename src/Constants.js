const prod = {
    properties: {
        API_URL: 'https://app.symplesims.github.io',
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

