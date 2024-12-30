import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PersonModule } from "../modules/person.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import * as dotenv from 'dotenv';
import { LogoutService } from "./logout.service";
import { BlacklistMiddleware } from "./blacklist.middleware";

dotenv.config()

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '1h' }
        }), PersonModule
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LogoutService],
    exports: [AuthService]
})

export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BlacklistMiddleware).forRoutes('*')
    }
}