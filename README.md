# proc-env-helper

Use to force your nodejs app to require a process env to be set, or use to ensure a default value is set.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [proc-env-helper](#proc-env-helper)
  - [Available helpers](#available-helpers)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Available helpers

Method: withDefault
```
import ProcEnvHelper from 'proc-env-helper';
ProcEnvHelper.withDefault('SWAGGER_FILE', 'latest')
```

Method: required
```
import ProcEnvHelper from 'proc-env-helper';
ProcEnvHelper.required('JWT_SECRET')
```

## Example
```typescript
import dotenv from 'dotenv';
import ProcEnvHelper from 'proc-env-helper';
import someHelper from './helpers/someHelper';

dotenv.config();

export default {
  // Swagger file
  swaggerFile: ProcEnvHelper.withDefault('SWAGGER_FILE', 'latest'),
  jwtSecret: ProcEnvHelper.required('JWT_SECRET'),

  port: ProcEnvHelper.withDefault('PORT', 666),
  
  somethingElse: someHelper(process.env.PROC_ENV_HELPER_PORT), // PROC_ENV_HELPER__PORT is injected into the process.env and can be accessed this way 
  somethingOther: someHelper(process.env.PROC_ENV_HELPER_JWT_SECRET), // PROC_ENV_HELPER__JWT_SECRET is injected into the process.env and can be accessed this way 
}
```
