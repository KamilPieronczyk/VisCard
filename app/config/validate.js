import validate from 'validate.js';

const validateRules = {
    userName: {
        length: {
            minimum: 3,
            maximum: 25,
            tooLong: "needs to have less words than %{count}",
            tooShort: "needs to have %{count} words or more",
            notValid: "contains wrong chars",
        }
    },
    userSurname: {
        length: {
            minimum: 3,
            maximum: 25,
            tooLong: "needs to have less words than %{count}",
            tooShort: "needs to have %{count} words or more",
            notValid: "contains wrong chars",
        }
    },
    email : {
        email: {
            message: "doesn't look like a valid email"
          }
    }

}

export default function validation(fieldName, value) {
  var formValues = {};
  formValues[fieldName] = value;

  const result = validate(formValues, validateRules);

  if (result) {
    // Return only the field error message if there are multiple
    return result[fieldName][0];
  }

  return null
}

