import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {Pessoa} from './pessoa';
import {Contato} from './contato';
import {ConfigService} from './config.service';
 
@Injectable()
export class ContatoService {
 
    private baseUrlService:string = '';
 
    constructor(private http: HttpClient,
                private configService: ConfigService) {  
      
        this.baseUrlService = configService.getUrlService() + '/contato/'; 
    }

    addContato(contato: Object): Observable<Object>{ 
       return this.http.post(`${this.baseUrlService}`, contato);          
    } 

    getContato(id:number): Observable<any>{ 
        return this.http.get(`${this.baseUrlService}/${id}`);

        //return this.http.get(this.baseUrlService + codigo).map(res => res.json());
    } 

 
}