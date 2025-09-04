import { DirExecuter } from './commands/dir/dir.executor'
import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor'
import { ConsoleLogger } from './out/console-logger/console-logger'
import { PromptService } from './core/prompt/prompt.servise'

export class App {
  private promptService: PromptService = new PromptService()

  async run() {
    const command = await this.promptService.select('Оберіть команду для виконання:', [
      { name: 'Dir - показати вміст директорії', value: 'dir' },
      { name: 'FFmpeg - обробити відео', value: 'ffmpeg' },
    ])

    const logger = ConsoleLogger.getInstance()

    switch (command) {
      case 'dir':
        new DirExecuter(logger).execute()
        break
      case 'ffmpeg':
        new FfmpegExecutor(logger).execute()
        break
      default:
        console.log('Невідома команда')
    }
  }
}

const app = new App()
app.run()
