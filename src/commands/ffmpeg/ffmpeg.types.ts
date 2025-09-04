import { iCommandExec } from '../../core/executor/command.types'

export interface IFfmpegInput {
  width: number
  height: number
  path: string
  name: string
}

export interface iCommandExecFfmpeg extends iCommandExec {
  output: string
}
