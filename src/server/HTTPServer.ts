import { TcpServer } from "./TCPServer";
import { Socket } from "net";

enum Status_Codes{
    OK = 200,
    NotFound = 400,
}

const headers = {
    'Server': 'CrudeServer',
    'Content-Type': 'text/html',
};

export class HTTPServer extends TcpServer{
    constructor(host:string, port: number){
        super(host, port);
    }

    handleConnection(socket: Socket){
        console.log('HTTP Server');

        // error event is called when something went wrong with socket
        socket.on('error', (err: Error): void => {
            // your code to execute on error event
            console.log( "error " + err.message);
        })

        socket.on('data', function(data){
            console.log("bla");
            console.log(data);
            let textChunk = data.toString('utf8');
            console.log(textChunk);
            let blank_line = "\r\n"
            let header_line = HTTPServer.prototype.response_line(Status_Codes.OK);
            let response_headers = HTTPServer.prototype.response_headers(); 
            let response_body = "<html><body><h1>Request received!</h1></body></html>";
            socket.write(header_line + response_headers + blank_line + response_body);
            socket.pipe(socket);
            socket.end();
        });
    }

    private response_line(status_code: Status_Codes): string{
        return "HTTP/1.1 " + status_code + " " + status_code.toString() + "\r\n";
    }

    private response_headers(): string{
        let responseHeaders = "";
        Object.keys(headers).forEach(key => responseHeaders += key + ": " + (<any>headers)[key] +"\r\n");
        return responseHeaders;
    }
}