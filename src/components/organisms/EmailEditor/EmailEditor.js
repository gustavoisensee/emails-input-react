import React, { useState, Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../atoms/Modal';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Email from '../../atoms/Email';
import EmailContainer from '../../atoms/EmailContainer';
import Text from '../../atoms/Text';
import { initialState } from '../../../constants/emailEditor';
import { handleEmailChecks } from '../../../helpers/emailEditor';
import styles from './style.module.css';

const EmailInputs = () => {
  // this could be also set in a store or an observable,
  // so TopContent and BottomContent could be split in other separate
  // components and would not be needed to pass handle functions by props
  const [emails, setEmails] = useState(initialState);

  const handleAddEmail = (event) => {
    handleEmailChecks(event, emails, setEmails);
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter(email => email.id !== id));
  };

  const handleAddRandomEmail = useCallback(
    () => {
      const val = Math.random().toString(20).substring(7);
      setEmails([...emails, {
        id: uuidv4(),
        text: `${val}@miro.com`,
        valid: true
      }]);
    },
    [emails],
  );

  const handleCountEmails = useCallback(
    () => {
      alert(emails.filter(email => !!email.valid).length);
    },
    [emails],
  );

  const TopContent = () => (
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

  const BottomContent = () => (
    <Fragment>
      <Button text='Add emails' onClick={handleAddRandomEmail} />
      <Button text='Get emails count' onClick={handleCountEmails} />
    </Fragment>
  );

  return (
    <div className={styles.container}>
      <Modal
        topContent={<TopContent />}
        bottomContent={<BottomContent />}
      />
    </div>
  );
};

export default EmailInputs;