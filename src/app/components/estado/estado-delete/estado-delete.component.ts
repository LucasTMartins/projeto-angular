import { Component } from '@angular/core';
import { Estado } from '../estado.model';
import { EstadoService } from '../estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estado-delete',
  templateUrl: './estado-delete.component.html',
  styleUrls: ['./estado-delete.component.css']
})
export class EstadoDeleteComponent {
  estado: Estado = {"nome": "", "sigla": ""};

  constructor(private estadoService: EstadoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id: string | null  = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.estadoService.readById(id).subscribe(estado => {
        this.estado = estado;
      }, error => alert("Não foi possivel executar a operação!"));
    }
  }

  deleteEstado(): void {
    if (this.estado && this.estado.id !== undefined) {
      this.estadoService.delete(this.estado.id).subscribe(() => {
          this.estadoService.showMessage("Estado excluído com sucesso!");
          this.router.navigate(["/estados"]);
        }, error => alert("Não foi possível executar a operação!")
      );
    } 
  }

  cancel(): void {
    this.router.navigate(["/estados"]);
  }
}
