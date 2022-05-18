import ProcEnvHelper from '@/ProcEnvHelper';

test('Should return the string provided', () => {
  expect(ProcEnvHelper.withDefault('UNITTESTVALUE', 'HELLO')).toBe('HELLO');
});

test('withDefault and required should also set the process.env PROC_ENV_HELPER_<name>', () => {
  ProcEnvHelper.withDefault('UNITTESTVALUE1', 'HELLO');
  process.env.UNITTESTVALUE2 = 'HELLO';
  ProcEnvHelper.required('UNITTESTVALUE2');
  expect(process.env.PROC_ENV_HELPER_UNITTESTVALUE1).toBe('HELLO');
  expect(process.env.PROC_ENV_HELPER_UNITTESTVALUE2).toBe('HELLO');
});

test('Should return the string provided', () => {
  process.env.UNITTESTVALUE = 'BOB';
  expect(ProcEnvHelper.withDefault('UNITTESTVALUE', 'HELLO')).toBe('BOB');
});

test('Should return the string provided', () => {
  process.env.UNITTESTVALUE = 'HELLO';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe('HELLO');
});

test('Should return bool true from string provided', () => {
  process.env.UNITTESTVALUE = 'true';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(true);
});

test('Should return bool true from a provided `TRUE` string', () => {
  process.env.UNITTESTVALUE = 'TRUE';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(true);
});

test('Should return bool false from string provided', () => {
  process.env.UNITTESTVALUE = 'false';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(false);
});

test('Should return bool false from a provided `FALSE` string', () => {
  process.env.UNITTESTVALUE = 'FALSE';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(false);
});

test('Should return number from string provided', () => {
  process.env.UNITTESTVALUE = '10.5';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(10.5);
});

test('Should return number from string provided', () => {
  process.env.UNITTESTVALUE = '105';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(105);
});

test('Should return undefined from string provided', () => {
  process.env.UNITTESTVALUE = 'undefined';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(undefined);
});

test('Should return null from string provided', () => {
  process.env.UNITTESTVALUE = 'null';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe(null);
});

test('Should return object from json string provided', () => {
  process.env.UNITTESTVALUE = '{"name":"bob"}';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toEqual({
    name: 'bob'
  });
});

test('Should return string from string provided', () => {
  process.env.UNITTESTVALUE = 'production';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe('production');
});

test('Should return string false from string provided', () => {
  process.env.UNITTESTVALUE = '\'false\'';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe('false');
});

test('Should return string false from string provided', () => {
  process.env.UNITTESTVALUE = '\'false\'';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe('false');
});

test('Should return string true from string provided', () => {
  process.env.UNITTESTVALUE = '\'true\'';
  expect(ProcEnvHelper.required('UNITTESTVALUE')).toBe('true');
});

test('should return `false` when specified env is set to false against the specified default value', () => {
  process.env.UNITTESTVALUE = 'false';
  expect(ProcEnvHelper.withDefault('UNITTESTVALUE', true)).toEqual(false);
});
