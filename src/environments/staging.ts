import {
  DefaultEnvironment,
  IEnvironment,
  loggerMiddleware
} from "@dcs/ngx-utils";
import { GenericStoreEnhancer, Middleware } from "redux";

export default class StagingEnvironment extends DefaultEnvironment
  implements IEnvironment {
  public apiUrl = "http://jsonplaceholder.typicode.com";
  public throwOnSchemaError = true;
  public pageTitle = "Demo App (Staging)";
  public base = "/";

  public additionalMiddleware: Middleware[] = [loggerMiddleware];
  public additionalEnhancers: GenericStoreEnhancer[] = [];
}
