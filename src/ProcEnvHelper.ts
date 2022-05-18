export default class ProcEnvHelper {
  /**
   * Casts to boolean or number values of input strings
   */
  static castValue (value: any) {
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

  static requiredOrThrow (environmentVariable: string) {
    const value = process.env[environmentVariable];
    if (!value) {
      throw new Error(`
  proc-env-helper required() method error:

  Required environment variable ${environmentVariable} is not defined.
`);
    }
    process.env[environmentVariable] = value;
    return ProcEnvHelper.castValue(value);
  }

  /**
   * Ensures the env variable is set, else defaults to a provided default
   * @param environmentVariable
   * @param defaultValue
   * @returns {string | any | *}
   */
  static getOrSetDefault (environmentVariable: string, defaultValue: any) {
    const value = process.env[environmentVariable] ? ProcEnvHelper.castValue(process.env[environmentVariable]) : defaultValue;
    process.env[environmentVariable] = value;
    return value;
  }
}
