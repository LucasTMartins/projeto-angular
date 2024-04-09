import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Estado } from './estado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  baseUrl = "http://localhost:8080/estado"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {duration:3000, horizontalPosition: "right", verticalPosition: "top"})
  }

  create(estado: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.baseUrl, estado)
  }
}
