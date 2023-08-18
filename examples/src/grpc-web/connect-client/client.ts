import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcWebTransport } from "@bufbuild/connect-web";
import {Greeter} from "./gen/helloworld_connect.js";

void main();

async function main() {
    const transport = createGrpcWebTransport({ baseUrl: "http://127.0.0.1:3000" });
    const client = createPromiseClient(Greeter, transport);
    const {message} = await client.sayHello({name: "foo"});
    console.log("got response:", message);
}
