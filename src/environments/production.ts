import {
  DefaultEnvironment,
  IAutoUpdateSettings,
  IEnvironment
} from "@dcs/ngx-utils";
import { GenericStoreEnhancer } from "redux";

export default class ProductionEnvironment extends DefaultEnvironment
  implements IEnvironment {
  public apiUrl = "http://jsonplaceholder.typicode.com";
  public throwOnSchemaError = true;
  public autoUpdate: IAutoUpdateSettings = "confirm";
  public updateMessage = "Updates available, reload page now?";
  public pageTitle = "Demo App (Prod)";
  public base = "/";
  // public additionalEnhancers: GenericStoreEnhancer[] = [persistStateEnhancer()];
  public additionalEnhancers: GenericStoreEnhancer[] = [];
}
