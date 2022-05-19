# proc-env-helper

Use to force your nodejs app to require a process env to be set, or use to ensure a default value is set.

The original process env will also be cast to the appropriate type via castValue.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [proc-env-helper](#proc-env-helper)
  - [Available helpers](#available-helpers)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Available helpers

#### getOrSetDefault
- **Method**: withDefault
- **Summary**: Returns the process.env value requested via ProcEnvHelper.castValue. If not found, this will 1st set a process.env value based on the default given and then return it.
```
import ProcEnvHelper from 'proc-env-helper';
ProcEnvHelper.getOrSetDefault('SWAGGER_FILE', 'latest')
```

#### requiredOrThrow
- **Method**: required
- **Summary**: Returns the process.env value requested via ProcEnvHelper.castValue or if not found,  `throw new Error(...)`
```
import ProcEnvHelper from 'proc-env-helper';
ProcEnvHelper.requiredOrThrow('JWT_SECRET')
```

## Example
```typescript
import dotenv from 'dotenv';
import ProcEnvHelper from 'proc-env-helper';
import someHelper from './helpers/someHelper';

dotenv.config();

export default {
  // Swagger file
  swaggerFile: ProcEnvHelper.getOrSetDefault('SWAGGER_FILE', 'latest'),
  jwtSecret: ProcEnvHelper.requiredOrThrow('JWT_SECRET'),

  port: ProcEnvHelper.getOrSetDefault('PORT', 666),
  
  // If PORT was not found via getOrSetDefault, it will be now be set as the default provided
  somethingElse: someHelper(process.env.PORT)
}
```
