# Protocols

## Installation

Assuming below items are aleady installed, up and running on your machine.

- [x] Node.js v18 or above (Required, to run Node.js examples)
- [x] Go (Required, to run Go examples)
- [x] HomeBrew

## How to run examples?

### Generate Certificate

Use in example `4`, `5`, & `7`
```console
openssl req -x509 -newkey rsa:4096 -keyout private-key.pem -out public-cert.pem -sha256 -days 60 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=ExampleServerInc/CN=CommonNameOrHostname"
```

Use in example `6` - Create Server and Client certificate
```console
openssl req -x509 -newkey rsa:4096 -keyout server-key.pem -out server-cert.pem -sha256 -days 60 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=ExampleServerInc/CN=CommonNameOrHostname"
```

```console
openssl req -x509 -newkey rsa:4096 -keyout client-key.pem -out client-cert.pem -sha256 -days 60 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=ExampleServerInc/CN=CommonNameOrHostname"
```

### Node.js

* T1 - Terminal 1 Screen
* T2 - Terminal 2 Screen

| Eg. No. | Example | Commands | Purpose |
|:---|:---|:---|:---|
| 1 | UDP | T1 `node 1_UDP.mjs` <br/> T2 `nc -u 127.0.0.1 5000` | Create UDP Socket |
| 2 | TCP | T1 `node 2_TCP.mjs` <br/> T2 `nc 127.0.0.1 5000` | Create TCP Socket |
| 3 | HTTP | T1 `node 3_HTTP.mjs` <br/> T2 `curl http://127.0.0.1:5000` | Create HTTP Server |
| 4 | HTTPS | T1 `node 4_HTTPS.mjs` <br/> T2 `curl https://127.0.0.1:5000` | Create HTTP Over TLS. Use OpenSSL to generate private/public cert. |
| 5 | HTTPS Over TLS (min: TLS 1.1, max: TLS 1.2) | T1 `node 5_HTTPS_TLS_1.2.mjs` <br/> T2 `curl https://127.0.0.1:5000` | Create HTTPS Server with TLS 1.2 configured. Use OpenSSL to generate private/public cert. |
| 6 | HTTPS Over TLS (min: TLS 1.2, max: TLS 1.3) | T1 `node 5_HTTPS_TLS_1.3.mjs` <br/> T2 `curl https://127.0.0.1:5000` | Create HTTPS Server with TLS 1.3 configured. Use OpenSSL to generate private/public cert. |
| 7 | TLS | T1 `node 6_TLS_Server.mjs` <br/> T2 `node 6_TLS_Client.mjs` | Create TLS Server. Use OpenSSL to generate private/public cert. |
| 8 | HTTP/2 | T1 `node 7_HTTP_2_Server.mjs` <br/> T2 `node 7_HTTP_2_Client.mjs` | Create HTTP/2 Server. Use OpenSSL to generate private/public cert. |
| 9 | HTTP/3 QUIC | NA | https://github.com/nodejs/node/issues/38478 |
