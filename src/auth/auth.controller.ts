import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) { }

    @Post('login')
    public async login(@Body('username') username: string, @Body('password') password: string) {
        const person = await this.service.validate(username, password)
        if (!person)
            throw new UnauthorizedException('Invalid username or password')
        return this.service.login(person)
    }
}