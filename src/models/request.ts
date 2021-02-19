import { TestRequest } from "./requestTest";

export class cusRequest{
    request_hash?:string;
    request_cached?:boolean;
    request_cache_expiry?:number;
    results?:TestRequest[];
}
