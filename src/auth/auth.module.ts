import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PersonModule } from "../modules/person.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'hello-world',
            signOptions: { expiresIn: '1h' }
        }), PersonModule
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }