declare module '@vercel/node' {
    import { IncomingMessage, ServerResponse } from 'http';

    export interface VercelRequest extends IncomingMessage {
        query: {
            [key: string]: string | string[];
        };
        body: any;
        cookies: { [key: string]: string };
    }

    export interface VercelResponse extends ServerResponse {
        json: (data: any) => void;
        status: (statusCode: number) => VercelResponse;
    }

    export type VercelHandler = (
        req: VercelRequest,
        res: VercelResponse
    ) => void | Promise<void>;

    export default VercelHandler;
}