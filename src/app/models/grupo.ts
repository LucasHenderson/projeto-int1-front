import { Materia } from 'src/app/models/materia';
export interface Grupo {
  id: number
  plataforma: string
  link: string
  materia: Materia
}
