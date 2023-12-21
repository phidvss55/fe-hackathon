import axios, { AxiosRequestConfig, Method, ResponseType } from "axios";
import { store } from "../store";
import { onSetEnabledSpinner } from "../store/reducer/app/actions";

interface RequestHeader {
  Accept: string;
  "Content-Type": string;
  "IP-Address"?: string;
  Authorization?: string;
}

export default class ApiService {
  protected apiGet<T>(
    url: string,
    params: unknown = {},
    hasToken = false,
    responseType: ResponseType | undefined = undefined,
    hideSpinner?: boolean,
    ipAddr = ""
  ): Promise<T> {
    return this.apiRun<T>(
      "get",
      url,
      null,
      params,
      hasToken,
      responseType,
      hideSpinner,
      ipAddr
    );
  }

  protected apiPost<T>(
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false,
    hideSpinner?: boolean,
    ipAddr = ""
  ): Promise<T> {
    return this.apiRun<T>(
      "post",
      url,
      body,
      params,
      hasToken,
      undefined,
      hideSpinner,
      ipAddr
    );
  }

  protected apiPut<T>(
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false,
    hideSpinner?: boolean,
    ipAddr = ""
  ): Promise<T> {
    return this.apiRun<T>(
      "put",
      url,
      body,
      params,
      hasToken,
      undefined,
      hideSpinner,
      ipAddr
    );
  }

  protected apiDelete<T>(
    url: string,
    params: unknown = {},
    hasToken = false,
    hideSpinner?: boolean,
    ipAddr = ""
  ): Promise<T> {
    return this.apiRun<T>(
      "delete",
      url,
      null,
      params,
      hasToken,
      undefined,
      hideSpinner,
      ipAddr
    );
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false,
    responseType: ResponseType | undefined = undefined,
    hideSpinner = false,
    ipAddr = ""
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { REACT_APP_API_URL } = process.env;

      const config: AxiosRequestConfig = {
        url,
        method,
        baseURL: `${REACT_APP_API_URL}`,
        params,
        headers: this.appendHeaders(hasToken, ipAddr),
        timeout: 60000,
        responseType,
        cancelToken: store.getState().app.cancelToken?.token,
      };

      if (!hideSpinner) {
        store.dispatch(onSetEnabledSpinner(true));
      }

      if (body) {
        config.data = body;
      }

      axios(config)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          if (!hideSpinner && !store.getState().app.cancelToken?.token) {
            store.dispatch(onSetEnabledSpinner(false));
          }
        });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private appendHeaders(hasToken = false, ipAddr = ""): RequestHeader {
    const headers: RequestHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // if (hasToken) {
    //   const sessionReducer = store.getState().session;
    //   headers.Authorization = `Bearer ${sessionReducer.session.token}`;
    // }

    if (ipAddr) {
      headers["IP-Address"] = ipAddr;
    }

    return headers;
  }
}
