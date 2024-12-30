import { Injectable } from "@nestjs/common";

@Injectable()
export class LogoutService {

    private blacklist: Set<string> = new Set()

    public addToBlacklist(token: string): void {
        this.blacklist.add(token)
    }

    public isBlacklisted(token: string): boolean {
        return this.blacklist.has(token)
    }
}