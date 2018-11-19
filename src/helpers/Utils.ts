export class Utils {

    public static removeMask(value: string): string {
        if (value !== null && value !== undefined) {
            return value.replace(/\./g, "").replace(/\-/g, "").replace(/\//g, "").replace(/\(/g, "").replace(/\)/g, "").replace(" ", "").replace("_", "").replace(":", "");
        }
        return null;
    }
}
