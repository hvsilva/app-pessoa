import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {Pessoa} from '../services/pessoa';
import {ConfigService} from './config.service';
 
@Injectable()
export class PessoaService { 
    private baseUrlService:string = '';
 
    constructor(private http: HttpClient,
                private configService: ConfigService) {  
      
        this.baseUrlService = configService.getUrlService() + '/pessoa/'; 
    }
 
    getPessoas(): Observable<any> {             
        return this.http.get(`${this.baseUrlService}`);
    }  

    getPessoa(id:number): Observable<any>{ 
        return this.http.get(`${this.baseUrlService}/${id}`);
    } 

    addPessoa(pessoa: Object): Observable<Object>{ 
       return this.http.post(`${this.baseUrlService}`, pessoa);          
    } 

    excluirPessoa(id:number): Observable<Object>{ 
       return this.http.delete(`${this.baseUrlService}/${id}`);
    }  

    atualizarPessoa(id: number, value: any): Observable<Object>{ 
       return this.http.put(`${this.baseUrlService}/${id}`, value);
    }
 
}