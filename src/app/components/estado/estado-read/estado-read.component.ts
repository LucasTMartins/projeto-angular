import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado.model';
import { EstadoService } from '../estado.service';  

@Component({
  selector: 'app-estado-read',
  templateUrl: './estado-read.component.html',
  styleUrls: ['./estado-read.component.css']
})

export class EstadoReadComponent implements OnInit {
  estados: Estado[] = []
  displayedColumns = ['id', 'nome', 'sigla', 'action']

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
      this.estadoService.read().subscribe(estados => {
        this.estados = estados
      })
  }
}
