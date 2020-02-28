import { HttpHeaders }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUtils {
  apiUrl = `http://${environment.servidorApi}:${environment.portaApi}/crud/v1/`;
  
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  constructor() {}

  public setParams(params: any = {}) {
    return {
      params: params
    };
  }

  public setJsonBody(data): string {
    return JSON.stringify(data);
  }
}
