# SPOTIFIUBY API GATEWAY

API Gateway connecting Spotifiuby's micro-services.
Done using express-gateway.

## Routes

- `{gateway}/songs`: Songs API
- `{gateway}/devsongs`: Songs development environment API
- `{gateway}/messages`: Messages API
- `{gateway}/notifications`: Notificatinos API
- `{gateway}/balance`: User balance Endpoint

### Adding Routes

Add route name, url and apiKey to `generate.js`and run it with node

```
node generate.js
```

that will automatically add the route to the gateway configuration.

## Development

### Installation

```
$ npm i
```

> You'll need node to run this project.
> See the installation guide on the [node server](https://github.com/taller2-grupo5-rostov-1c2022/NodeServer) if you don't have it.

### Running the server

```
$ npm start
```

### Deploy

The pipeline deploys the server automatically on pushing to **master**

You should create the app on heroku first

You'll need to set the following actions secrets:

- `HEROKU_NAME`: App name
- `HEROKU_EMAIL`: Account email
- `HEROKU_API_KEY`: Account API key

### Resources

- [express gateway](https://www.express-gateway.io/)
