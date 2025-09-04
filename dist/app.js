"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const dir_executor_1 = require("./commands/dir/dir.executor");
const ffmpeg_executor_1 = require("./commands/ffmpeg/ffmpeg.executor");
const console_logger_1 = require("./out/console-logger/console-logger");
const prompt_servise_1 = require("./core/prompt/prompt.servise");
class App {
    promptService = new prompt_servise_1.PromptService();
    async run() {
        const command = await this.promptService.select('Оберіть команду для виконання:', [
            { name: 'Dir - показати вміст директорії', value: 'dir' },
            { name: 'FFmpeg - обробити відео', value: 'ffmpeg' },
        ]);
        const logger = console_logger_1.ConsoleLogger.getInstance();
        switch (command) {
            case 'dir':
                new dir_executor_1.DirExecuter(logger).execute();
                break;
            case 'ffmpeg':
                new ffmpeg_executor_1.FfmpegExecutor(logger).execute();
                break;
            default:
                console.log('Невідома команда');
        }
    }
}
exports.App = App;
const app = new App();
app.run();
