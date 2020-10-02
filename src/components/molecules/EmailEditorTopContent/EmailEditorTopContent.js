import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import Email from '../../atoms/Email';
import EmailContainer from '../../atoms/EmailContainer';
import Input from '../../atoms/Input';
import styles from './style.module.css';

const EmailEditorTopContent = ({ emails, handleAddEmail, handleDeleteEmail }) => (
  <Fragment>
    <div className={styles.title}>
      <Text>Share </Text>
      <Text bold>Board name </Text>
      <Text>with others</Text>
    </div>

    <EmailContainer>
      {emails.map(email => (
        <Email key={email.id} onDeleteClick={handleDeleteEmail} {...email} />
      ))}
      <Input
        autoFocus
        placeholder='Add more people...'
        onKeyUp={handleAddEmail}
        onBlur={handleAddEmail}
      />
    </EmailContainer>
  </Fragment>
);

EmailEditorTopContent.propTypes = {
  emails: PropTypes.array.isRequired,
  handleAddEmail: PropTypes.func.isRequired,
  handleDeleteEmail: PropTypes.func.isRequired
};

export default EmailEditorTopContent;
