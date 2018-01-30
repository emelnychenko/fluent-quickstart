import { Main, ApplicationBuilder } from '@fluent/core';

@Main()
export class FluentStartup {
  configure(application: ApplicationBuilder) {
    application.useLogging(logger => logger.addConsoleTransport());
  }
}
