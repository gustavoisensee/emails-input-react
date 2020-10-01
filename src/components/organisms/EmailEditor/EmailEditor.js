import React, { Fragment, useState, useCallback } from 'react';
import is from 'is_js';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../atoms/Button';
import Email from '../../atoms/Email';
import EmailContainer from '../../atoms/EmailContainer';
import Modal from '../../atoms/Modal';
import Text from '../../atoms/Text';
import Input from '../../atoms/Input';
import styles from './style.module.css';

const initialState = [
  { id: 'a1', text: 'test1@miro.com', valid: true },
  { id: 'a2', text: 'test2@miro.com', valid: true },
  { id: 'a3', text: 'test3@miro.com', valid: true }
];

const ENTER = 13;
const COMMA = 188;
const KEY_V = 86;
const KEY_COMMAND = 91;
const FOCUS_OUT = undefined;
const keyCodes = [ENTER, COMMA, FOCUS_OUT];

const EmailInputs = () => {
  const [emails, setEmails] = useState(initialState);

  const handleAddEmail = (e) => {
    const isCommand = [e.key, e.metaKey].includes('Meta');
    const val = e?.target?.value.trim() || '';

    // Ctrl + v / Command + v
    if ([KEY_V, KEY_COMMAND].includes(e.keyCode) && (e.ctrlKey || isCommand)) {
      const finalList = [];
      const list = val.split(',') || [];

      list.forEach(text => {
        if (text.trim()) {
          finalList.push({
            id: uuidv4(),
            text,
            valid: is.email(text)
          })
        }
      });
      setEmails([...emails, ...finalList]);
      return;
    }

    // Command and Enter
    if (val && keyCodes.includes(e.keyCode)) {
      const text = e.keyCode === COMMA ? val.substring(0, val.length - 1) : val;

      setEmails([...emails, {
        id: uuidv4(),
        text,
        valid: is.email(text)
      }]);
    }
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