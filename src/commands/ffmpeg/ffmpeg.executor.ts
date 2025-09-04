import { CommandExecutor } from '../../core/executor/command.executor'
import { IFfmpegInput, iCommandExecFfmpeg } from './ffmpeg.types'
import { PromptService } from '../../core/prompt/prompt.servise'
import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { FileService } from '../../core/files/file.service'
import { iStreamLogger } from '../../core/handlers/stream-logger.interface'
import { FfmpegBuilder } from './ffmpeg.builder'
import { StreamHandler } from '../../core/handlers/stream.handler'

export class FfmpegExecutor extends CommandExecutor<IFfmpegInput> {
  private fileService: FileService = new FileService()
  private promptService: PromptService = new PromptService()

  constructor(logger: iStreamLogger) {
    super(logger)
  }
  protected async prompt(): Promise<IFfmpegInput> {
    const width = await this.promptService.input<number>('Введіть ширину відео', 'number')
    const height = await this.promptService.input<number>('Введіть висоту відео', 'number')
    const path = await this.promptService.input<string>('Введіть шлях до відео', 'input')
    const name = await this.promptService.input<string>('Введіть назву відео', 'input')
    return { width, height, path, name }
  }
  protected build({ path, name, width, height }: IFfmpegInput): iCommandExecFfmpeg {
    const output = this.fileService.getFilePath(path, name, 'mp4')
    const args = new FfmpegBuilder().input(path).setVideoSize(width, height).output(output)
    return { command: 'ffmpeg', args, output }
  }
  protected spawn({ output, command, args }: iCommandExecFfmpeg): ChildProcessWithoutNullStreams {
    this.fileService.deleteFileExists(output)
    return spawn(command, args)
  }
  protected processStream(stream: ChildProcessWithoutNullStreams, logger: iStreamLogger): void {
    const handler = new StreamHandler(logger)
    handler.processOutput(stream)
  }
}
