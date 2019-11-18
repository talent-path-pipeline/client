import React from 'react';
import PropTypes from 'prop-types';

const FormQuestion = props => {
  const { data_type, info, has_error, err_msg, handleDataChange } = props;
  // TODO: actually capitalize data_type, not just remove underscores

  return (
    <div className="form-question">
      <h3>{data_type.replace('_', ' ')}</h3>
      <input
        className={has_error ? 'formError' : null}
        type="text"
        value={info}
        onChange={event => handleDataChange(event, data_type)}
        placeholder=""
      />
      {has_error ? <p className="ErrorMessage">{err_msg}</p> : null}
    </div>
  );
};

FormQuestion.propTypes = {
  data_type: PropTypes.string.isRequired,
  info: PropTypes.string,
  has_error: PropTypes.bool.isRequired,
  err_msg: PropTypes.string,
  handleDataChange: PropTypes.func.isRequired,
};

FormQuestion.defaultProps = {
  info: '',
  err_msg: '',
};

export default FormQuestion;
