export class GenerateLetter {
    public static generateNextLetter(letter: string) {
        return String.fromCharCode(letter.charCodeAt(0) + 1)
    }
}