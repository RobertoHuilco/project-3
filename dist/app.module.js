"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const book_module_1 = require("./book/book.module");
const book_controller_1 = require("./book/book.controller");
const book_service_1 = require("./book/book.service");
const book_entity_1 = require("./book/entities/book.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            book_module_1.BookModule,
            typeorm_1.TypeOrmModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'project-3-bdd',
                autoLoadEntities: true,
                synchronize: true,
                dropSchema: false,
                entities: [__dirname + '/**/*.entity{.ts,.js}']
            }),
            typeorm_1.TypeOrmModule.forFeature([book_entity_1.Book])
        ],
        controllers: [
            app_controller_1.AppController,
            book_controller_1.BookController
        ],
        providers: [
            app_service_1.AppService,
            book_service_1.BookService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map