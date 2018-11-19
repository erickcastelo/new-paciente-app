export class Masks {
    public static cpf: Array<any> = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/];
    public static rg: Array<any> = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/];
    public static cel: Array<any> = ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    // public static phone: Array<any> = ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
}
