# Protocols

## Installation

Assuming below items are aleady installed, up and running on your machine.

- [x] Node.js v18 or above (Required, to run Node.js examples)
- [x] Go (Required, to run Go examples)
- [x] HomeBrew

## How to run examples?

### Generate Certificate

```console
openssl req -x509 -newkey rsa:4096 -keyout private-key.pem -out public-cert.pem -sha256 -days 60 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=ExampleServerInc/CN=CommonNameOrHostname"
```

### Node.js

T1 - Terminal 1
T2 - Terminal 2

| Example | Commands | Purpose |
|:---|:---|:---|
| UDP | T1 `node 1_UDP.mjs`, T2 `nc -u 127.0.0.1 5000` | Create UDP Socket |
| TCP | T1 `node 2_TCP.mjs`, T2 `nc 127.0.0.1 5000` | Create TCP Socket |
| HTTP | T1 `node 3_HTTP.mjs`, T2 `curl http://127.0.0.1:5000` | Create HTTP Server |
| HTTPS | T1 `node 4_HTTPS.mjs`, T2 `curl https://127.0.0.1:5000` | Create HTTP Over TLS. Use OpenSSL to generate private/public cert. |
| HTTP/2 | T1 `node 5_HTTP_2_Server.mjs`, T2 `node 5_HTTP_2_Client.mjs` | Create HTTP/2 Server. Use OpenSSL to generate private/public cert. |
