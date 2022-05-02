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
$ curl -H "Authorization: Bearer <token>" http://localhost:8080/songs/
> [{"id":1,"description":"6 seconds of the world renowned intennet meme featuring a pop-tart cat","artists":"Chris Torres, daniwell, Hatsune Miku","creator":"SJRPTQKlGqfEhHUnkGfpuA4Cses1","name":"Nyan Cat"},{"id":2,"description":"Half a minute of crabby beats","artists":"Noisestorm","creator":"SJRPTQKlGqfEhHUnkGfpuA4Cses1","name":"Crab Rave"},{"id":3,"description":"Lofi Beats","artists":"BKNAPP","creator":"SJRPTQKlGqfEhHUnkGfpuA4Cses1","name":"Game Over"}]


$ curl -H "Authorization: Bearer <token>" http://localhost:8080/songs/1
> {"id":1,"description":"6 seconds of the world renowned intennet meme featuring a pop-tart cat","artists":"Chris Torres, daniwell, Hatsune Miku","creator":"SJRPTQKlGqfEhHUnkGfpuA4Cses1","name":"Nyan Cat","file":"https://storage.googleapis.com/rostov-spotifiuby.appspot.com/songs/1"
```

```
curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGVmYXVsdCBhY2NvdW50IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jvc3Rvdi1zcG90aWZpdWJ5IiwiYXVkIjoicm9zdG92LXNwb3RpZml1YnkiLCJhdXRoX3RpbWUiOjE2NTE1MTI1NzAsInVzZXJfaWQiOiJ6TWFJMjN4OUJ6VUlXRkxEZEY3eFo4amZtYnYxIiwic3ViIjoiek1hSTIzeDlCelVJV0ZMRGRGN3haOGpmbWJ2MSIsImlhdCI6MTY1MTUxMjU3MCwiZXhwIjoxNjUxNTE2MTcwLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BPf2MiKNwo7gF2iTJa0YHhQjN8dc0gA3-gMPct-qzFnIb-6hSQImEJxpC3uhTiPHKiNDS-1QtIFIp8NlPCr9Cv1HwV49wg6oGcZvSLlIrbxqq4wCpN3yZTkM6ranPt58giV7ixO1CHmCf1mBE9AS7aa6H3zWMzTnaSzqlzhfMSLrGkY0jHDjIfB4bEQ2QhaWhCwhS5fiqrNbG4Llj4oFfl7TD-zp7KILtfGX2ljFpNAAU3maoQbAZyDyoXavvt5CEbHfRvQVHW76sPHFTxsMWvl4obzRfphR_LnC0j8OXXIpVhC-rft1FvL85SFSt45i-Pe6F_6TV-wmGJg8Zg7PCw" http://localhost:8008/songs/
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
