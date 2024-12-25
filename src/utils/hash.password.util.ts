import * as bcrypt from 'bcrypt';

export class HashPasswordUtility {
    private readonly saltOrRounds = 10

    public async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltOrRounds)
    }
}