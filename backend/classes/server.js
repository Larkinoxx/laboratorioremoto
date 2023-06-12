import express from "express";

export default class Server {
 

    constructor(port) {
        this.port = port;
        this.app = express();
    }

    start( callback) {
        this.app.listen(this.port, callback());
    }


}