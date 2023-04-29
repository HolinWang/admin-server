import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json'
import { knife4jSetup } from 'nest-knife4j';

export const generateDocument = (app) => {

    const options = new DocumentBuilder()
        .setTitle(packageConfig.name)
        .setDescription(packageConfig.description)
        .setVersion(packageConfig.version)
        .addBearerAuth() // 增加鉴权功能
        .build();

    const document = SwaggerModule.createDocument(app, options);

    // http://localhost:3000/doc.html
    SwaggerModule.setup('/api/doc', app, document);
    knife4jSetup(app, [
        {
            name: packageConfig.version,
            url: `/api/doc-json`,
            swaggerVersion: packageConfig.version,
            location: `/api/doc-json`,
        },
    ]);
}
