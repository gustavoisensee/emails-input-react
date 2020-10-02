import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../atoms/Modal';
import { initialState } from '../../../constants/emailEditor';
import { handleEmailChecks } from '../../../helpers/emailEditor';
import EmailEditorTopContent from '../../molecules/EmailEditorTopContent/EmailEditorTopContent';
import EmailEditorBottomContent from '../../molecules/EmailEditorBottomContent/EmailEditorBottomContent';
import styles from './style.module.css';

const EmailInputs = () => {
  // this could be also set in a store or an observable,
  // so, it wouldn't be necessary to pass the function to TopContent and BottomContent
  const [emails, setEmails] = useState(initialState);

  const handleAddEmail = useCallback(
    (event) => {
      handleEmailChecks(event, emails, setEmails);
    },
    [emails]
  );

  const handleDeleteEmail = useCallback(
    (id) => {
      setEmails(emails.filter(email => email.id !== id));
    },
    [emails]
  );

  const handleAddRandomEmail = useCallback(
    () => {
      const val = Math.random().toString(20).substring(7);
      setEmails([...emails, {
        id: uuidv4(),
        text: `${val}@miro.com`,
        valid: true
      }]);
    },
    [emails]
  );

  const handleCountEmails = useCallback(
    () => {
      alert(emails.filter(email => !!email.valid).length);
    },
    [emails]
  );

  const TopContent = () => (
    <EmailEditorTopContent
      emails={emails}
      handleAddEmail={handleAddEmail}
      handleDeleteEmail={handleDeleteEmail}
    />
  );

  const BottomContent = () => (
    <EmailEditorBottomContent
      handleAddRandomEmail={handleAddRandomEmail}
      handleCountEmails={handleCountEmails}
    />
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