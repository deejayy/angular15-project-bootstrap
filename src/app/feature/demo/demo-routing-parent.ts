import type { Routes } from '@angular/router';
import { DemoComponent } from '@feature/demo/component/demo/demo.component';

export const DEMO_ROUTES: Routes = [
  {
    path: 'demo',
    // this is not a good approach, because DemoComponent is inside DemoModule, which makes code splitting
    // meaningless: the whole DemoModule will be compiled into the main bundle
    // the reason why it is here is to contain all demo code inside a single entry point (folder) and be removed easily
    // to get a clean app
    // instead, you should define a bare component outside the feature module (e.g. shared) which only has a router-outlet
    // so it will be free of additional code (e.g. material, reactiveforms, etc) but still provide the ability to navigate
    component: DemoComponent,
    loadChildren: () => {
      return import('@feature/demo/demo.module').then((m) => {
        return m.DemoModule;
      });
    },
  },
];
