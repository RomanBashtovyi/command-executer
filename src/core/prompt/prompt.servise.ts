import inquirer from 'inquirer'
import { PromptType } from './prompt.types'

export class PromptService {
  public async input<T>(message: string, type: PromptType) {
    const { result } = await inquirer.prompt<{ result: T }>([
      {
        type,
        name: 'result',
        message,
      },
    ])
    return result
  }

  public async select<T>(message: string, choices: { name: string; value: T }[]) {
    const { result } = await inquirer.prompt<{ result: T }>([
      {
        type: 'list',
        name: 'result',
        message,
        choices,
      },
    ])
    return result
  }
}
