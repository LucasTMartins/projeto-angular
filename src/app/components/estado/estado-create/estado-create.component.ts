import { Component } from '@angular/core';
import { EstadoService } from '../estado.service';
import { Router } from '@angular/router';
import { Estado } from '../estado.model';

@Component({
  selector: 'app-estado-create',
  templateUrl: './estado-create.component.html',
  styleUrls: ['./estado-create.component.css']
})

export class EstadoCreateComponent {

  estado: Estado = {
    nome: '',
    sigla: ''
  }

  constructor(private estadoService: EstadoService, private router: Router) {}

  ngOnInit(): void{}

  createEstado(): void {
    this.estadoService.create(this.estado).subscribe(()=> {
      this.estadoService.showMessage('Salvo com sucesso')
      this.router.navigate(["/estados"])
    })
    
  }
  
  cancel(): void {
    this.router.navigate(["/estados"])
  }
}
