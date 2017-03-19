import { platformDynamicServer } from '@angular/platform-server';
import 'reflect-metadata';
import 'zone.js';

import { ExpressAppModule } from './express-app';

/*
    Application hangs when you hit http://localhost:4000/

    The rest of the application works as expected. /status endpoint works and correctly utilizes the bootstrapped angular application and DI works.
*/
platformDynamicServer().bootstrapModule(ExpressAppModule);

/*
    Server rendering for http://localhost:4000/ works as expected.

    The rest of the application is not able to utilize angular DI without manually creating an injector, etc..
*/
// new ExpressAppModule(null).ngDoBootstrap();