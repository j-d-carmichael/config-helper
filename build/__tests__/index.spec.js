"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index = tslib_1.__importStar(require("../index"));
it('should have the correct keys', async () => {
    expect(Object.keys(index)).toEqual([
        'ProcEnvHelper'
    ]);
});
