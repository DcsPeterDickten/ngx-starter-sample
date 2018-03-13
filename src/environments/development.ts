import { Middleware } from 'redux';
import { IEnvironment, loggerMiddleware, DefaultEnvironment } from '@dcs/ngx-utils';

export default class DevelopmentEnvironment extends DefaultEnvironment implements IEnvironment {
  public apiUrl = 'http://localhost:3001';
  public throwOnSchemaError = false;
  public pageTitle = 'GfK Shopper Admin (Dev)';
  public base = '/';

  public additionalMiddleware: Middleware[] = [loggerMiddleware];
}
