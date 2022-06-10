# SPOTIFIUBY API GATEWAY

API Gateway connecting Spotifiuby's micro-services.
Done using express-gateway.

## Routes

- `{gateway}/nodeserver`: Mock node server
- `{gateway}/songs`: Songs API
- `{gateway}/messages`: Messages API
- `{gateway}/notifications`: Notificatinos API
- `{gateway}/devsongs`: Songs development environment API

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
curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGVmYXVsdCBhY2NvdW50IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jvc3Rvdi1zcG90aWZpdWJ5IiwiYXVkIjoicm9zdG92LXNwb3RpZml1YnkiLCJhdXRoX3RpbWUiOjE2NTE1MTgyNDQsInVzZXJfaWQiOiJ6TWFJMjN4OUJ6VUlXRkxEZEY3eFo4amZtYnYxIiwic3ViIjoiek1hSTIzeDlCelVJV0ZMRGRGN3haOGpmbWJ2MSIsImlhdCI6MTY1MTUxODI0NCwiZXhwIjoxNjUxNTIxODQ0LCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.j3RMMSdz2Duz9_qjTg9_39NoBezrxWNazeufO5QObAa-RERqBw2Wa9exu9kp5bgfzhsN3dXLVlVOBn2S5Jj8d37w1OTkHl220eo49UjnKIh18LSXRBpqnJjUM3M6xUk5i8Wx6cGwuwUMz4P5_jQxiALNYBINrKTaKLr6OzpTgUScuVzBT-J2N0S7Hq9A82l7GOgEu1ofwi6itiTCDvwtycrrMhzjD6s2JKyqON4auFtjKeTEquzP5TucgY9-I5k3Q3XOmXPvn6oGpoxSwCwD9Cyz86n_FjiimSVmpwT1aj1dl7gw4_GzmUMoTAie4AtKpd7yHTfI7tKtZPjg9tolQg" http://rostov-gateway.herokuapp.com/songs/
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
