export interface CursoFields {
  nombreDelCurso: string
  queAprenderas: string
  actividadDestacada: string
}

export interface Curso {
  sys: { id: string }
  fields: CursoFields
}

export interface ModuloSemestralFields {
  nombreDelModulo: string
  totalDeHoras: number
  descripcionDelSemestre: string
  cursosAsociados: Curso[]
}

export interface ModuloSemestral {
  sys: { id: string }
  fields: ModuloSemestralFields
}
