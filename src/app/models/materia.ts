import { Curso } from './curso';
export interface Materia {
  id: number
  nome: string
  periodo: number
  professor: string
  atualizacao: string
  ofertada: boolean
  curso: Curso
}
