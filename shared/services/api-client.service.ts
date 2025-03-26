import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private baseUrl = 'https://mavenmindconsultants.net/api'; //      need to add base url i.e  mavenmind.something.com
  constructor(private http: HttpClient) {}

  private getHeaders(customHeaders?: { [key: string]: string }): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (customHeaders) {
      Object.entries(customHeaders).forEach(([key, value]) => {
        headers = headers.set(key, value);
      });
    }
    return headers;
  }

  get<T>(
    endPoint: string,
    params?: any,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endPoint}`, {
      headers: this.getHeaders(customHeaders),
      params: new HttpParams({ fromObject: params }),
    });
  }

  // login<T>(
  //   endPoint: string,
  //   body?: any,
  //   customHeaders?: { [key: string]: string }
  // ): Observable<T> {
  //   return this.http.post<T>(`${this.baseUrl}/${endPoint}`, body, {
  //     headers: this.getHeaders(customHeaders),
  //   });
  // }

  login<T>(
    endPoint: string,
    body?: any,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}/${endPoint}`, body, {
        headers: this.getHeaders(customHeaders),
      })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            localStorage.setItem('accessToken', response.token); // Store the token
          }
        })
      );
  }

  // logout<T>(
  //   endPoint: string,
  //   body?: any,
  //   customHeaders?: { [key: string]: string }
  // ): Observable<T> {
  //   return this.http.post<T>(`${this.baseUrl}/${endPoint}`, body, {
  //     headers: this.getHeaders(customHeaders),
  //   });
  // }

  logout<T>(
    endPoint: string,
    body?: any,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    const token = localStorage.getItem('accessToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {}; // Ensures valid type

    return this.http
      .post<T>(`${this.baseUrl}/${endPoint}`, body, {
        headers: this.getHeaders({
          ...customHeaders,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      })
      .pipe(
        tap(() => {
          localStorage.removeItem('accessToken'); // Remove token on logout
        })
      );
  }

  post<T>(
    endPoint: string,
    body?: any,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endPoint}`, body, {
      headers: this.getHeaders(customHeaders),
    });
  }

  patch<T>(
    endpoint: string,
    body: any,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(customHeaders),
    });
  }

  delete<T>(
    endpoint: string,
    customHeaders?: { [key: string]: string }
  ): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(customHeaders),
    });
  }
}
