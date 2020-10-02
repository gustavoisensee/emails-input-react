import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

const EmailEditorBottomContent = ({ handleAddRandomEmail, handleCountEmails }) => (
  <Fragment>
    <Button text='Add emails' onClick={handleAddRandomEmail} />
    <Button text='Get emails count' onClick={handleCountEmails} />
  </Fragment>
);

EmailEditorBottomContent.propTypes = {
  handleAddRandomEmail: PropTypes.func.isRequired,
  handleCountEmails: PropTypes.func.isRequired
};

export default EmailEditorBottomContent;