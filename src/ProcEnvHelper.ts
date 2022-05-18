export default class ProcEnvHelper {
  /**
   * Casts to boolean or number values of input strings
   */
  static returnValue (value: any) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (!isNaN(value)) {
      return Number(value);
    }
    if (value === 'undefined') {
      return undefined;
    }
    if (value === 'null') {
      return null;
    }
    if (typeof value === 'string') {
      try {
        return JSON.parse(/^(TRUE|FALSE)$/.test(value) ? value.toLocaleLowerCase() : value);
      } catch (e) {
        if (value === '\'false\'' || value === '"false"') {
          return 'false';
        }
        if (value === '\'true\'' || value === '"true"') {
          return 'true';
        }
        return value;
      }
    }
    return value;
  }

  static setConfigHelperProcEnv (environmentVariable: string, value: any): void {
    process.env['PROC_ENV_HELPER_' + environmentVariable] = value;
  }

  /**
   * Ensures that the given string representation of the envVar exists.
   * @param environmentVariable
   * @returns {string | number | boolean}
   */
  static required (environmentVariable: string) {
    const value = process.env[environmentVariable];
    if (!value) {
      throw new Error(`
  proc-env-helper required() method error:

  Required environment variable ${environmentVariable} is not defined.
`);
    }
    ProcEnvHelper.setConfigHelperProcEnv(environmentVariable, value);
    return ProcEnvHelper.returnValue(value);
  }

  /**
   * Ensures the env variable is set, else defaults to a provided default
   * @param environmentVariable
   * @param defaultValue
   * @returns {string | any | *}
   */
  static withDefault (environmentVariable: string, defaultValue: any) {
    const value = process.env[environmentVariable] ? ProcEnvHelper.returnValue(process.env[environmentVariable]) : defaultValue;
    ProcEnvHelper.setConfigHelperProcEnv(environmentVariable, value);
    return value;
  }
}
