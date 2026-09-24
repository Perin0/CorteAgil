import { Component } from '@angular/core';

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {
    tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: 'Configurar ambiente de desenvolvimento',
    responsavel: 'Carlos',
    prioridade: 'alta',
    concluida: true
  },
  {
    id: 2,
    titulo: 'Criar componentes da interface',
    responsavel: 'Ana',
    prioridade: 'alta',
    concluida: false
  },
  {
    id: 3,
    titulo: 'Atualizar documentação do projeto',
    responsavel: 'Marcos',
    prioridade: 'baixa',
    concluida: false
  },
  {
    id: 4,
    titulo: 'Realizar testes unitários',
    responsavel: 'Julia',
    prioridade: 'média',
    concluida: false
  },
  {
    id: 5,
    titulo: 'Revisar pull requests',
    responsavel: 'Roberto',
    prioridade: 'média',
    concluida: true
  },
  {
    id: 6,
    titulo: 'Organizar reunião de retrospectiva',
    responsavel: 'Fernanda',
    prioridade: 'baixa',
    concluida: false
  }
  
];

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}
