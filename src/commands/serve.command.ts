import { CommandHandler, CommandContext } from '@fluent/console';
import { Logger } from '@fluent/logging';
import { Injectable } from '@fluent/di';

@Injectable()
export class ServeCommand implements CommandHandler {
  constructor(private logger: Logger) {
  }

  handle(_: CommandContext): void | Promise<void> {
    this.logger.verbose('Serve command executed.');
  }
}
