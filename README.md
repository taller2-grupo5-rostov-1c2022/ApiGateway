# SPOTIFIUBY API GATEWAY

API Gateway connecting Spotifiuby's micro-services.
Done using express-gateway.

## Routes

- `{gateway}/nodeserver`: Mock node server
- `{gateway}/songs`: Songs API

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

### Testing

You can use curl to test the gateway.

#### Local Example

Using Songs Endpoint

```
$ curl http://localhost:8080/songs/api/v1/songs/
> [{"name":"song1"},{"name":"song2"}]

$ curl http://localhost:8080/songs/0
> {"name":"song1"}

$ curl -d '{"name":"another_song"}' -H "Content-Type: application/json" -X POST  http://localhost:8080/songs/
> {"id":2}

$ curl http://localhost:8080/songs/
> [{"name":"song1"},{"name":"song2"},{"name":"another_song"}]
```

### Resources

- [express gateway](https://www.express-gateway.io/)
