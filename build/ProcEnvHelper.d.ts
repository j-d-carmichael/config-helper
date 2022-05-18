export default class ProcEnvHelper {
    /**
     * Casts to boolean or number values of input strings
     */
    static returnValue(value: any): any;
    static setConfigHelperProcEnv(environmentVariable: string, value: any): void;
    /**
     * Ensures that the given string representation of the envVar exists.
     * @param environmentVariable
     * @returns {string | number | boolean}
     */
    static required(environmentVariable: string): any;
    /**
     * Ensures the env variable is set, else defaults to a provided default
     * @param environmentVariable
     * @param defaultValue
     * @returns {string | any | *}
     */
    static withDefault(environmentVariable: string, defaultValue: any): any;
}
