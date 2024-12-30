import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LogoutService } from "./logout.service";

@Injectable()
export class BlacklistMiddleware implements NestMiddleware {

    constructor(private readonly service: LogoutService) { }

    use(req: any, res: any, next: () => void) {
        const token = req.headers.authorization?.split(' ')[1]
        if (token && this.service.isBlacklisted(token))
            throw new UnauthorizedException('Token has been invalidated')
        next()
    }
}