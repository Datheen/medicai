import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navigation } from "../../components/navigation/navigation";
import { Table } from "../../components/table/table";
import { Card } from "../../components/card/card";

import { MedicamentosService } from "../../services/apioutput";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navigation, Table, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  medicamentos: any[] = [];

  constructor(private medsService: MedicamentosService) {}

  ngOnInit(): void {
    console.log('Iniciando carregamento de medicamentos...');
    this.medsService.listar().subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        this.medicamentos = data;
      },
      error: (error) => {
        console.error('Erro ao carregar medicamentos:', error);
      }
    });
  }
}
