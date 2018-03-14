import {
  DefaultEnvironment,
  IEnvironment,
  loggerMiddleware
} from "@dcs/ngx-utils";
import { Middleware } from "redux";

export default class DevelopmentEnvironment extends DefaultEnvironment
  implements IEnvironment {
  public apiUrl = "http://localhost:3001";
  public throwOnSchemaError = false;
  public pageTitle = "Demo App (Dev)";
  public base = "/";

  public additionalMiddleware: Middleware[] = [loggerMiddleware];
}
