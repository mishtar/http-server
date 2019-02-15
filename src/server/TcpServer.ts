import {createServer, Server, Socket } from "net";

export class TcpServer {
    private host:string;
    private port:number;
    private server: Server;

    constructor(host:string, port: number) {
        // TODO: how make dynamic host
        this.host = host;
        this.port = port;
        this.server = createServer();
        this.server.on('connection', this.handleConnection);
    }

    handleConnection(socket: Socket){}

    public listen(){
        this.server.listen(this.port);
    }
}