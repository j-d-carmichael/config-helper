"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ProcEnvHelper_1 = tslib_1.__importDefault(require("@/ProcEnvHelper"));
test('Should return the string provided', () => {
    expect(ProcEnvHelper_1.default.getOrSetDefault('UNITTESTVALUE', 'HELLO')).toBe('HELLO');
});
test('getOrSetDefault and requiredOrThrow should also set the process.env PROC_ENV_HELPER_<name>', () => {
    ProcEnvHelper_1.default.getOrSetDefault('UNITTESTVALUE1', 'HELLO');
    process.env.UNITTESTVALUE2 = 'HELLO';
    ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE2');
    expect(process.env.UNITTESTVALUE1).toBe('HELLO');
    expect(process.env.UNITTESTVALUE2).toBe('HELLO');
});
test('Should return the string provided', () => {
    process.env.UNITTESTVALUE = 'BOB';
    expect(ProcEnvHelper_1.default.getOrSetDefault('UNITTESTVALUE', 'HELLO')).toBe('BOB');
});
test('Should return the string provided', () => {
    process.env.UNITTESTVALUE = 'HELLO';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe('HELLO');
});
test('Should return bool true from string provided', () => {
    process.env.UNITTESTVALUE = 'true';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(true);
});
test('Should return bool true from a provided `TRUE` string', () => {
    process.env.UNITTESTVALUE = 'TRUE';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(true);
});
test('Should return bool false from string provided', () => {
    process.env.UNITTESTVALUE = 'false';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(false);
});
test('Should return bool false from a provided `FALSE` string', () => {
    process.env.UNITTESTVALUE = 'FALSE';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(false);
});
test('Should return number from string provided', () => {
    process.env.UNITTESTVALUE = '10.5';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(10.5);
});
test('Should return number from string provided', () => {
    process.env.UNITTESTVALUE = '105';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(105);
});
test('Should return undefined from string provided', () => {
    process.env.UNITTESTVALUE = 'undefined';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(undefined);
});
test('Should return null from string provided', () => {
    process.env.UNITTESTVALUE = 'null';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe(null);
});
test('Should return object from json string provided', () => {
    process.env.UNITTESTVALUE = '{"name":"bob"}';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toEqual({
        name: 'bob'
    });
});
test('Should return string from string provided', () => {
    process.env.UNITTESTVALUE = 'production';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe('production');
});
test('Should return string false from string provided', () => {
    process.env.UNITTESTVALUE = '\'false\'';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe('false');
});
test('Should return string false from string provided', () => {
    process.env.UNITTESTVALUE = '\'false\'';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe('false');
});
test('Should return string true from string provided', () => {
    process.env.UNITTESTVALUE = '\'true\'';
    expect(ProcEnvHelper_1.default.requiredOrThrow('UNITTESTVALUE')).toBe('true');
});
test('should return `false` when specified env is set to false against the specified default value', () => {
    process.env.UNITTESTVALUE = 'false';
    expect(ProcEnvHelper_1.default.getOrSetDefault('UNITTESTVALUE', true)).toEqual(false);
});
