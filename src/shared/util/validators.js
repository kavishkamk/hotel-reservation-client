const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_EQUAL = "EQUAL";
const VALIDATOR_TYPE_CONTACTNO = "TEL";
const VALIDATOR_TYPE_ZIP = "ZIP";
const VALIDATOR_TYPE_DATE = "DATE";
const VALIDATOR_TYPE_NATURALNUM = "NATURALNUM"

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_EQUAL = val => ({ type: VALIDATOR_TYPE_EQUAL, val: val});
export const VALIDATOR_CONTACTNO = () => ({type: VALIDATOR_TYPE_CONTACTNO});
export const VALIDATOR_ZIP = () => ({type: VALIDATOR_TYPE_ZIP});
export const VALIDATOR_DATE = () => ({type: VALIDATOR_TYPE_DATE});
export const VALIDATOR_NATURALNUM = () => ({type: VALIDATOR_TYPE_NATURALNUM});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_EQUAL) {
      isValid = isValid && validator.val === value.trim();
    }
    if (validator.type === VALIDATOR_TYPE_CONTACTNO) {
      isValid = isValid && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_ZIP) {
      isValid = isValid && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_DATE) {
      isValid = isValid && /^\d{4}-\d{2}-\d{2}$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_NATURALNUM) {
      isValid = isValid && /^0*[1-9]\d*$/.test(value);
    }
  }
  return isValid;
};
