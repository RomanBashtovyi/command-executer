"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptService = void 0;
const inquirer_1 = require("inquirer");
class PromptService {
    async input(message, type) {
        const { result } = await inquirer_1.default.prompt([
            {
                type,
                name: 'result',
                message,
            },
        ]);
        return result;
    }
    async select(message, choices) {
        const { result } = await inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'result',
                message,
                choices,
            },
        ]);
        return result;
    }
}
exports.PromptService = PromptService;
