import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  loading: boolean = true;
  error: string = '';

  // Estatísticas do estoque
  totalMedicamentos: number = 0;
  estoqueTotal: number = 0;
  estoqueAtual: number = 0;
  medicamentosBaixoEstoque: number = 0;
  taxaDisponibilidade: number = 0;

  constructor(
    private medsService: MedicamentosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Pequeno delay para garantir que o componente está totalmente inicializado
    setTimeout(() => {
      this.carregarMedicamentos();
    }, 0);
  }

  carregarMedicamentos(): void {
    this.loading = true;
    this.error = '';
    console.log('Iniciando carregamento de medicamentos...');
    
    this.medsService.listar().subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        this.medicamentos = data;
        this.calcularEstatisticas();
        this.loading = false;
        
        if (data.length === 0) {
          this.error = 'Nenhum medicamento encontrado';
        }
        
        // Força a detecção de mudanças
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Erro ao carregar medicamentos:', error);
        this.error = 'Erro ao carregar dados. Clique em "Recarregar" para tentar novamente.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  calcularEstatisticas(): void {
    this.totalMedicamentos = this.medicamentos.length;
    this.estoqueTotal = 0;
    this.estoqueAtual = 0;
    this.medicamentosBaixoEstoque = 0;

    this.medicamentos.forEach(med => {
      const [atual, total] = med.quantidade.split('/').map(Number);
      this.estoqueAtual += atual;
      this.estoqueTotal += total;
      
      const percentual = (atual / total) * 100;
      if (percentual < 30) {
        this.medicamentosBaixoEstoque++;
      }
    });

    this.taxaDisponibilidade = this.estoqueTotal > 0 
      ? Math.round((this.estoqueAtual / this.estoqueTotal) * 100) 
      : 0;
  }

  getBadgeClass(quantidade: string): string {
    const [atual, total] = quantidade.split('/').map(Number);
    const percentual = (atual / total) * 100;

    if (percentual >= 70) {
      return 'badge-green';
    } else if (percentual >= 30) {
      return 'badge-yellow';
    } else {
      return 'badge-red';
    }
  }
}
