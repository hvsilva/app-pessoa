import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {PessoaService} from '../../services/pessoa.service';
import {Pessoa} from '../../services/pessoa';
import {Response} from '../../services/response';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  closeResult = '';

   titulo:string;
   pessoa:Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro=>{      
      if(parametro["id"] == undefined){        
        this.titulo = "Novo Cadastro de Pessoa";
      } else {     
        this.titulo = "Editar Cadastro de Pessoa";
        this.pessoaService.getPessoa(Number(parametro["id"])).subscribe(res => this.pessoa = res);         
      }
    });      
  }

  salvar():void {    
  
      if(this.pessoa.id == undefined){

           this.pessoaService.addPessoa(this.pessoa).subscribe(response => {            
          
           let res:Response = <Response>response;

           if(res.id == 1){
            alert(res.mensagem);
            this.pessoa = new Pessoa();
           } else{     
             alert(res.mensagem);
           }
         },
         (erro) => {                 
            alert(erro);
         });

      } else {
        this.pessoaService.atualizarPessoa(this.pessoa.id, this.pessoa).subscribe(response => {
        let res:Response = <Response>response;
 
        if(res.id == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-pessoa']);
        } else {         
           alert(res.mensagem);
         }
       },
       (erro) => {      
          alert(erro);         
       });
      }

    }
}