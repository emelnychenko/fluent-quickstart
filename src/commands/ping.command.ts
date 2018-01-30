import { CommandHandler, CommandContext, Command } from '@fluent/console';
import { Logger } from '@fluent/logging';

@Command(`ping {message=pong} {--silent}`)
export class PingCommand implements CommandHandler {
  constructor(private logger: Logger) {
  }

  async handle(commandContext: CommandContext) {
    const commandData = commandContext.commandData;
    const pongMessage = commandData.argumentValues.get('message');

    if (!commandData.optionValues.get('silent')) {
      this.logger.information(pongMessage);
    }
  }
}
