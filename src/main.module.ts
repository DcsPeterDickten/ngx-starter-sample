import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule
} from "@angular-redux/store";
import { HttpClientModule } from "@angular/common/http";
import { Inject, NgModule } from "@angular/core";
import {
  APP_ENVIRONMENT,
  IState,
  MainBaseModule,
  NgxUtilsModule,
  RestService,
  RootEpic,
  RootReducer,
  StableService
} from "@dcs/ngx-utils";

import { AppComponent } from "./app/frontend/app.component";
import { AppModule } from "./app/frontend/app.module";
import { AppRestService } from "./app/services/app-rest-service";
import Environment from "./environment";

export function provideEnvironment(): Environment {
  return new Environment();
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    AppModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    NgxUtilsModule
  ],
  providers: [
    StableService,
    { provide: RestService, useClass: AppRestService },
    { provide: APP_ENVIRONMENT, useFactory: provideEnvironment }
  ]
})
export class MainModule extends MainBaseModule {
  constructor(
    store: NgRedux<IState>,
    devTools: DevToolsExtension,
    rootReducer: RootReducer,
    rootEpic: RootEpic,
    ngReduxRouter: NgReduxRouter,
    stableService: StableService,
    @Inject(APP_ENVIRONMENT) environment: Environment
  ) {
    super(
      store,
      devTools,
      rootReducer,
      rootEpic,
      ngReduxRouter,
      environment,
      stableService
    );
  }
}
