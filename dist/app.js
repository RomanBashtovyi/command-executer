"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const prompt_servise_1 = require("./core/prompt/prompt.servise");
class App {
    async run() {
        const res = await new prompt_servise_1.PromptService().input('Число', 'number');
        console.log(res);
    }
}
exports.App = App;
const app = new App();
app.run();
