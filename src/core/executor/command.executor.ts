import { ChildProcessWithoutNullStreams } from 'child_process'
import { iStreamLogger } from '../handlers/stream-logger.interface'
import { iCommandExec } from './command.types'

export abstract class CommandExecutor<Input> {
  constructor(private logger: iStreamLogger) {}

  public async execute() {
    const input = await this.prompt()
    const command = this.build(input)
    const stream = this.spawn(command)
    this.processStream(stream, this.logger)
  }

  protected abstract prompt(): Promise<Input>
  protected abstract build(input: Input): iCommandExec
  protected abstract spawn(command: iCommandExec): ChildProcessWithoutNullStreams
  protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: iStreamLogger): void
}
