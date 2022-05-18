export default class ProcEnvHelper {
    /**
     * Casts to boolean or number values of input strings
     */
    static castValue(value: any): any;
    static requiredOrThrow(environmentVariable: string): any;
    /**
     * Ensures the env variable is set, else defaults to a provided default
     * @param environmentVariable
     * @param defaultValue
     * @returns {string | any | *}
     */
    static getOrSetDefault(environmentVariable: string, defaultValue: any): any;
}
