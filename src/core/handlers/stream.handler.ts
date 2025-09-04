import { iStreamLogger } from './stream-logger.interface'
import type { ChildProcessWithoutNullStreams } from 'child_process'

export class StreamHandler {
  constructor(private logger: iStreamLogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data)
    })
    stream.stderr.on('data', (data: any) => {
      this.logger.error(data)
    })
    stream.on('close', () => {
      this.logger.end()
    })

  }
}
