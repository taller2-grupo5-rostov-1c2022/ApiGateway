const fs = require("fs");
const services = [
  {
    name: "songs",
    url: "http://rostov-song-server.herokuapp.com/api/v3",
    apiKey: "${SONGS_API_KEY}",
  },
  {
    name: "devsongs",
    url: "https://rostov-songs-dev.herokuapp.com/api/v3",
    apiKey: "${SONGS_API_KEY}",
  },
  {
    name: "messages",
    url: "http://rostov-messages-server.herokuapp.com/api/v1",
    apiKey: "key",
  },
  {
    name: "notifications",
    url: "https://rostov-notifs-server.herokuapp.com/api/v1",
    apiKey: "${NOTIFICATIONS_API_KEY}",
  },
  {
    name: "payments",
    url: "https://rostov-payments-server.herokuapp.com/api/v1/",
    apiKey: "key",
  },
];

let output = `http:
  port: \${PORT:-8080}
  host: \${HOST:-rostov-gateway.herokuapp.com}

apiEndpoints:
`;
services.forEach((service) => {
  output += `
  ${service.name}:
    methods: "*"
    origin: "*"
    host: \${HOST:-rostov-gateway.herokuapp.com}
    paths: "/${service.name}/*"
`;
});
output += `

serviceEndpoints:
`;
services.forEach((service) => {
  output += `
  ${service.name}_service:
    url: "${service.url}"
`;
});
output += `

policies:

  - cors
  - proxy
  - request-transformer
  - rewrite
  - auth

pipelines:
`;
services.forEach((service) => {
  output += `
  ${service.name}:
    apiEndpoints:
      - ${service.name}
    policies:
      - cors:
          - action:
              methods: "*"
              origin: "*"
              credentials: true
              allowedHeaders: "*"
              preflightContinue: false
      - auth: null
      - request-transformer:
          - action:
              headers:
                add:
                  api_key: "'${service.apiKey}'"
      - rewrite:
          - condition:
              name: regexpmatch
              match: ^/${service.name}/(.*)$
            action:
              rewrite: /$1
      - proxy:
          - action:
              serviceEndpoint: ${service.name}_service
`;
});

fs.writeFile(
  "./config/gateway.config.yml",
  output,
  { flag: "w" },
  console.error
);
