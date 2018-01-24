import { Main, Startup } from '@fluent/core';
import { Application, ApplicationBuilder, CommandContext, CommandHandler } from '@fluent/console';
import { Injectable } from '@fluent/di';
import { Logger } from '@fluent/logging';

@Injectable()
export class ServeCommand implements CommandHandler {
  constructor(private logger: Logger) {
  }

  handle(_: CommandContext): void | Promise<void> {
    this.logger.debug('Serve command executed.');
  }
}

@Main(Application)
export class FluentStartup extends Startup<ApplicationBuilder> {
  configure(applicationBuilder: ApplicationBuilder) {
    applicationBuilder.useCommand('serve', ServeCommand);
  }
}
