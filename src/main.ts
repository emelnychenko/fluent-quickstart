import { Main, Startup } from '@fluent/core';
import { Application, ApplicationBuilder } from '@fluent/console';
import { ServeCommand } from './commands/serve.command';

@Main(Application)
export class FluentStartup extends Startup<ApplicationBuilder> {
  configure(applicationBuilder: ApplicationBuilder) {
    applicationBuilder.useCommand('serve', ServeCommand);
  }
}
