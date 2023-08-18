
## Prerequisites

- You need Node.js version 18.17.0
- Start the grpc-web example server with `cargo run --bin grpc-web-server` from the project root


## Connect client in the web browser

```bash
npm ci
npm start
```

Expected result in the browser console:

```
got response: Hello foo!
```


## Connect client in Node.js

```bash
npm ci
npx tsx client.ts
```

Expected result:

```
$ npx tsx client.ts 
got response: Hello foo!
```
