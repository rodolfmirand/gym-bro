import { Body, Controller, Post, Req, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LogoutService } from "./logout.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService,
        private readonly logoutService: LogoutService
    ) { }

    @Post('login')
    public async login(@Body('username') username: string, @Body('password') password: string) {
        const person = await this.service.validate(username, password)
        if (!person)
            throw new UnauthorizedException('Invalid username or password')
        return this.service.login(person)
    }

    @Post('logout')
    public async logout(@Req() request: any): Promise<string> {
        const token = request.headers.authorization?.split(' ')[1];
        if (!token)
            return 'No token provided'

        this.logoutService.addToBlacklist(token)
        return 'Logged out successfully'
    }
}