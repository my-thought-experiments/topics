# Envoy

## References

## Installation

Assuming below items are aleady installed, up and running on your machine.

- [x] Node.js v18 or above.
- [x] HomeBrew

### Install Envoy

**Using Brew**

```console
brew tap tetratelabs/getenvoy
brew install envoy
```

## How to run examples?

Run multiple instances of Node.js app on different port

```console
PORT=4000 node index.mjs
PORT=5000 node index.mjs
PORT=6000 node index.mjs
```

Run Envoy with configuration file

```console
envoy --config-path <CONFIG.yaml>
```

Load the host on browser and refresh to view the load balancing taken care by Envoy
```
http://0.0.0.0:80
```

**Notes**

1. To run http2.yaml generate certificate with below command first before loading the config in Envoy

```console
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=CompanySectionName/CN=CommonNameOrHostname"
```

## Examples

| Config File | Purpose |
|:---|:---|
| `cluster.yaml` | Showcase how to setup single cluster and load balance |
| `clusters.yaml` | Showcase how to setup multiple clusters and load balance |
| `admin.yaml` | Showcase how to setup block admin routes |
| `tls_http2.yaml` | Showcase how to setup TLS 1.2 and HTTP/2 |
