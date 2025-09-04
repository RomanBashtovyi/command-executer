import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { CommandExecutor } from '../../core/executor/command.executor'
import { iCommandExec } from '../../core/executor/command.types'
import { StreamHandler } from '../../core/handlers/stream.handler'
import { PromptService } from '../../core/prompt/prompt.servise'
import { DirBuilder } from './dir.builder'
import { iDirInput } from './dir.types'
import { iStreamLogger } from '../../core/handlers/stream-logger.interface'

export class DirExecuter extends CommandExecutor<iDirInput> {
  private promptService: PromptService = new PromptService()
  constructor(logger: iStreamLogger) {
    super(logger)
  }

  protected async prompt(): Promise<iDirInput> {
    let path = await this.promptService.input<string>('Шлях', 'input')
    return { path }
  }
  protected build({ path }: iDirInput): iCommandExec {
    const args = new DirBuilder().detailedOutput().output()
    return { command: 'cmd', args: ['/c', 'dir', ...args, path] }
  }
  protected spawn({ command: commmand, args }: iCommandExec): ChildProcessWithoutNullStreams {
    return spawn(commmand, args)
  }
  protected processStream(stream: ChildProcessWithoutNullStreams, logger: iStreamLogger): void {
    const handler = new StreamHandler(logger)
    handler.processOutput(stream)
  }
}
