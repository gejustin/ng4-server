import 'reflect-metadata';
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformDynamicServer } from '@angular/platform-server';

import { ExpressAppModule } from './express-app';

enableProdMode();
platformDynamicServer().bootstrapModule(ExpressAppModule);