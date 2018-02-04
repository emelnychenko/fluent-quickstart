import { Main, ApplicationBuilder, ServiceCollection } from '@fluent/core';
import { PingCommand } from './commands/ping.command';

@Main()
export class Startup {
  configureServices(services: ServiceCollection) {
    services.addLogger(logger => logger.addConsole());
  }

  configure(application: ApplicationBuilder) {
    application.addCommand(PingCommand);
  }
}
