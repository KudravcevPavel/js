/* eslint-disable import/extensions */
/* eslint-disable no-console */

import {validateObject} from "./validatorFanctions/validatorsmehanizm.js";

import {user} from "./users/user.js";

import {userScheme} from "./validationFiles/schemes/information.js";

function dumpErrors(errorList, validatedObject) {
  errorList.forEach((error) => {
    console.log(`Field: ${error.key}`);
    console.log(`Provided value: ${validatedObject[error.key]}`);
    console.log(`Message: ${error.message}`);
  });
}

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}