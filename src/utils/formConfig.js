const NAME = 'name';
const EMAIL = 'email';
const PHONE = 'phone';
const MESSAGE = 'message';

const initState = () => ({
  [NAME]: { value: '', error: '' },
  [EMAIL]: { value: '', error: '' },
  [PHONE]: { value: '', error: '' },
  [MESSAGE]: { value: '', error: '' },
});

export const initialState = initState();

export const reducer = (state, action) => {
  if (action.type === 'reset') return initState();

  const newState = {
    [NAME]: { ...state[NAME] },
    [EMAIL]: { ...state[EMAIL] },
    [PHONE]: { ...state[PHONE] },
    [MESSAGE]: { ...state[MESSAGE] },
  };
  // const newState = {};
  // Object.entries(state).forEach(([key, obj]) => (newState[key] = { ...obj }));

  // Update error messages if any were passed
  if (action.type === 'error') {
    action.payload.forEach(([field, errMsg]) => {
      newState[field].error = errMsg;
    });
  } else {
    // Otherwise set state for input field + clear error (unclutter UI):
    newState[action.type] = { value: action.payload, error: '' };
  }

  return newState;
};

export const inputConfig = [
  { name: NAME, label: 'name' },
  { name: EMAIL, label: 'email address' },
  { name: PHONE, label: 'phone (ex: 1 555 555 5555)' },
  { name: MESSAGE, label: 'your message', inputType: 'textarea' },
];

const validate = {
  validateLength: (val) => (val === '' ? "Can't be empty" : false),
  [NAME]: (val) => {
    const isValid = /^[a-z]+(\s{1}[a-z]+)*$/i.test(val);
    if (!isValid) return 'Not a valid name';
  },
  [EMAIL]: (val) => {
    const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val);
    if (!isValid) return 'Not a valid email';
  },
  [PHONE]: (val) => {
    const isValid = /^\d[- ]?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(val);
    if (!isValid) return 'Not a valid phone number';
  },
  [MESSAGE]: (val) => {
    return val.length < 20 && 'Min 20 characters';
  },
};

export const validateInputs = (state) => {
  const formInputs = Object.entries(state);
  const validInputs = {};
  const errors = [];

  formInputs.forEach(([key, obj]) => {
    const userInput = obj.value.trim();
    const lengthMsg = validate.validateLength(userInput);

    if (lengthMsg) return errors.push([key, lengthMsg]);

    const errorMsg = validate[key](userInput);
    if (errorMsg) return errors.push([key, errorMsg]);

    // Add to final form if all checks passed
    validInputs[key] = userInput;
  });

  return [validInputs, errors];
};

export const feedbackMsg = {
  0: '',
  1: 'Success! Your response has been recorded.',
  2: 'Invalid input(s). See feedback.',
  3: 'An unexpected error occurred. Try again later.',
};
