# Command Executer

TypeScript-based command execution system with interactive prompts for running system commands.

## Description

This project provides a structured way to execute system commands with interactive parameter input. It uses a modular architecture where each command has its own builder, executor, and type definitions.

## Features

- Interactive command parameter input
- Modular command architecture
- Stream handling and logging
- TypeScript support
- Currently supports:
  - `dir` - Directory listing with detailed output
  - `ffmpeg` - Video processing with resize functionality

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Compile TypeScript:

```bash
tsc
```

3. Run the application:

```bash
node ./dist/app.js
```

## Project Structure

- `src/commands/` - Command implementations (dir, ffmpeg)
- `src/core/` - Core functionality (executor, handlers, prompt service)
- `dist/` - Compiled JavaScript output

Each command follows the pattern:

- `*.types.ts` - Type definitions
- `*.builder.ts` - Command argument building
- `*.executor.ts` - Command execution logic
