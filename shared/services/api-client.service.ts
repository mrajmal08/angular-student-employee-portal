import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseUrl='https://base_url';                 //      need to add base url i.e  mavenmind.something.com
  constructor(private http:HttpClient) {}

  private getHeaders(customHeaders?:{[key:string]:string}):HttpHeaders{
    let headers=new HttpHeaders({'Content-Type':'application/json',});
    if(customHeaders){
      Object.entries(customHeaders).forEach(([key,value])=>{
      headers=headers.set(key,value);
      })
    }
    return headers
  } 


  get<T>(endPoint:string,params?:any,customHeaders?:{[key:string]:string}):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/${endPoint}`,{
      headers:this.getHeaders(customHeaders),
      params:new HttpParams({fromObject:params}),
    })
  }

  post<T>(endPoint:string,body?:any,customHeaders?:{[key:string]:string}):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}/${endPoint}`,body,{
      headers:this.getHeaders(customHeaders)
    })
  }

  patch<T>(endpoint: string, body: any, customHeaders?: { [key: string]: string }): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(customHeaders),
    });
  }

  delete<T>(endpoint: string, customHeaders?: { [key: string]: string }): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(customHeaders),
    });
  }
}
