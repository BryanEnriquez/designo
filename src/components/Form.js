import React, { useReducer, useMemo, useState, useEffect, useRef } from 'react';
import Button from './Button';
import {
  initialState,
  reducer,
  inputConfig,
  validateInputs,
  feedbackMsg,
} from '../utils/formConfig';
import { mockAPI } from '../utils/mockAPI';
import './Form.scss';

const Input = ({ label, value, type, dispatch }) =>
  useMemo(() => {
    return (
      <input
        name={type}
        value={value}
        onChange={(e) => dispatch({ type, payload: e.target.value })}
        placeholder={label}
        id={type}
      />
    );
  }, [label, value, type, dispatch]);

const TextArea = ({ label, value, type, dispatch }) =>
  useMemo(() => {
    return (
      <textarea
        name={type}
        value={value}
        onChange={(e) => dispatch({ type, payload: e.target.value })}
        placeholder={label}
        id={type}
      />
    );
  }, [label, value, type, dispatch]);

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [process, setProcess] = useState('');
  const [feedback, setFeedback] = useState(feedbackMsg[0]);
  const [timerId, setTimerId] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // let isMounted = true;
    if (!(process === 'validate')) return;

    try {
      const [validInputs, errors] = validateInputs(state);

      if (errors.length > 0) {
        dispatch({ type: 'error', payload: errors });
        setFeedback(feedbackMsg[2]);
        setDisabled(false);
      } else {
        setFeedback('Sending...');
        mockAPI(validInputs)
          .then((_) => {
            if (!ref.current) return;
            dispatch({ type: 'reset' });
            setFeedback(feedbackMsg[1]);
            setDisabled(false);
          })
          .catch((err) => {
            if (!ref.current) return;
            setFeedback(err.message);
            setDisabled(false);
          });
      }
    } catch (_) {
      if (ref.current) setFeedback(feedbackMsg[3]);
    } finally {
      setProcess('');

      if (timerId) clearTimeout(timerId);

      const newTimerId = setTimeout(() => {
        if (!ref.current) return;

        setFeedback('');
        setTimerId(null);
      }, 10 * 1000);

      setTimerId(newTimerId);
    }
  }, [process, state, timerId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisabled(true);
    setProcess('validate');
  };

  return (
    <form ref={ref} className="form">
      <p className="form__feedback">{feedback}</p>
      <div className="form__input-group">
        {inputConfig.map((el) => {
          const errMsg = state[el.name].error;
          return (
            <div key={el.name} className="form__item">
              {errMsg ? <span>{errMsg}</span> : null}
              <label htmlFor={el.name}>{el.label}</label>
              {el.inputType === 'textarea' ? (
                <TextArea
                  label={el.label}
                  value={state[el.name].value}
                  type={el.name}
                  dispatch={dispatch}
                />
              ) : (
                <Input
                  label={el.label}
                  value={state[el.name].value}
                  type={el.name}
                  dispatch={dispatch}
                />
              )}
            </div>
          );
        })}
      </div>
      <Button disabled={disabled} label="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
