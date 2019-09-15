const URL: String = process.env.NODE_ENV !== "production" ? "/prod" : "/dev";
const doRequest = (method: String, path: String, body: any = {}): any => {};

export const getRequest = (path: String): any => doRequest("GET", URL);
export const postRequest = (path: String, body: any): any =>
  doRequest("POST", URL, body);
