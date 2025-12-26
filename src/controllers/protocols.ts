export interface HttpResponse<X> {
    statusCode: number;
    body: X | string;
}