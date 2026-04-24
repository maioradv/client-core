import { AxiosError } from "axios";

export class ApiError extends Error {
  constructor(...args: any) {
    super(...args);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.name;
  }
}

export class ConfigError extends ApiError {}
export class AuthError extends ApiError {}
export class RestApiError extends ApiError {
  constructor(e:Error|AxiosError) {
    let message = e.message
    
    if(e instanceof AxiosError) {
      message = handleAxiosErrorMessage(e)
    }
    super(message)
  }
}
export class GraphApiError extends ApiError {
  constructor(e:Error|AxiosError) {
    let message = e.message
    
    if(e instanceof AxiosError) {
      message = handleAxiosErrorMessage(e)
    }
    super(message)
  }
}

function handleAxiosErrorMessage(e:AxiosError) {
  const data = e?.response?.data as Record<string, any> | undefined;
  if (data?.message) {
    return `${data.message}`;
  } else if (e.message) {
    return e.message;
  } else if (e.code) {
    return `Network error: ${e.code}`;
  }
  return 'Unknown error';
}