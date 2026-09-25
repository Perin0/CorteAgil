import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
  opcoesStatus: StatusProjeto[] = ['planejamento', 'desenvolvimento', 'testes', 'concluído'];

  ocultarConcluidos: boolean = false;

  projetos: ProjetoIntegrador[] = [
    {
      id: 1,
      titulo: 'Sistema de Coleta Seletiva Inteligente',
      equipe: 'EcoTech',
      nota: 8.5,
      status: 'concluído',
      entregue: true,
    },
    {
      id: 2,
      titulo: 'App de Monitoramento de Trânsito',
      equipe: 'UrbanMob',
      nota: 5.2,
      status: 'testes',
      entregue: true,
    },
    {
      id: 3,
      titulo: 'Plataforma de Mentorias Acadêmicas',
      equipe: 'DevLearn',
      nota: null,
      status: 'desenvolvimento',
      entregue: false,
    },
    {
      id: 4,
      titulo: 'Dashboard de Eficiência Energética',
      equipe: 'VoltMatrix',
      nota: 6.5,
      status: 'planejamento',
      entregue: false,
    },
  ];

  get projetosFiltrados(): ProjetoIntegrador[] {
    if (this.ocultarConcluidos) {
      return this.projetos.filter((p) => p.status !== 'concluído');
    }
    return this.projetos;
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter((p) => p.status === 'concluído').length;
  }

  alternarFiltroConcluidos(): void {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  atualizarStatus(projeto: ProjetoIntegrador, event: Event): void {
    const target = event.target as HTMLSelectElement;
    projeto.status = target.value as StatusProjeto;
  }
}

export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';

export interface ProjetoIntegrador {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: StatusProjeto;
  entregue: boolean;
}