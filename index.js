/* eslint-disable import/extensions */
/* eslint-disable no-console */

import {checkType, nonEmptyString, numberInRange} from "./subordinate/validators.js";

import {validateFiled, validateObject} from "./subordinate/validatorsmehanizm.js";

import {dumpErrors} from "./subordinate/Errors.js";

import {user} from "./subordinate/information.js";

import {userScheme} from "./subordinate/information.js";

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}