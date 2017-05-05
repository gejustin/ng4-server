import { StatusModule } from '../status';
import { NgModule, Injector, NgZone } from '@angular/core';
import { ServerModule, renderModule } from '@angular/platform-server';
import { ServerAppModule } from '../../client';
import * as express from 'express';
import * as routingControllers from 'routing-controllers';
import { Express, Request, Response } from 'express';

const document =
    `<html>
        <head>
            <meta charset="UTF-8">
            <title>Hello World</title>
        </head>
        <body>
            <home></home>
        </body>
    </html>`;

@NgModule({
    imports: [
        StatusModule,
        ServerModule,
    ],
})
export class ExpressAppModule {

    private app: Express;

    constructor(private ngZone: NgZone, private injector: Injector) {
        this.app = express();
    }

    public ngDoBootstrap() {
        if (this.injector) {
            this.registerRoutingControllers();
        }

        this.app.get('/', this.serverRender(ServerAppModule));
        this.app.listen(4000, () => { console.log('app is listening.') })
    }

    private registerRoutingControllers() {
        routingControllers.useContainer(this.injector, {
            fallback: true,
            fallbackOnErrors: true,
        });

        this.app = routingControllers.useExpressServer(this.app, {
            useClassTransformer: false,
        });
    }

    private serverRender(module: any) {
        return (req: Request, res: Response) => {
            this.ngZone.runOutsideAngular(function () {
                return renderModule(module, {
                    document,
                    url: req.url,
                });
            }).then((renderedApp: string) => {
                res.send(renderedApp);
                }).catch((err:any) => {
                    res.send(err);
                })
        };
    }

}
