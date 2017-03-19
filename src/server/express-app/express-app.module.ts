import { NgModule } from '@angular/core';
import { ServerModule, renderModule } from '@angular/platform-server';
import { ServerAppModule } from '../../client';
import * as express from 'express';

const appHtml =
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
    imports: [ServerModule],
})
export class ExpressAppModule {

    public ngDoBootstrap() {
        const app = express();
        app.get('/', this.serverRender(ServerAppModule));
        app.listen(4000, () => { console.log('app is listening.') })
    }

    private serverRender(module: any) {
        return (req: any, res: any) => {
            renderModule(module, {
                document: appHtml,
                url: req.url,
            }).then((response) => {
                res.send(response);
            }).catch(err => console.log.bind(console));
        };
    }

}
