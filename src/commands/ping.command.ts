import { Inject, Logger } from '@fluent/core';
import { Command, Argument, Option, CommandHandler } from '@fluent/console';

@Command(`ping {message=pong} {--silent}`)
export class PingCommand extends CommandHandler {
  async handle(@Inject() logger: Logger, @Option() silent: boolean, @Argument() message: string) {
    if (!silent) {
      logger.information(message);
    }
  }
}

