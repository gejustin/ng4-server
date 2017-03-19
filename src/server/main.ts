import { platformDynamicServer } from '@angular/platform-server';
import 'reflect-metadata';
import 'zone.js';

import { ExpressAppModule } from './express-app';

platformDynamicServer().bootstrapModule(ExpressAppModule);

// new ExpressAppModule().ngDoBootstrap();