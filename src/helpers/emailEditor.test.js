import { COMMA, ENTER, KEY_COMMAND, KEY_V } from '../constants/emailEditor';
import { handleEmailChecks } from './emailEditor';

describe('emailEditor', () => {
  it('should add the new email when Comma or Enter is pressed', () => {
    const email = 't@test.com,';
    const emailsSubstring = email.substring(0, email.length - 1);
    let emails = [{ id: 1, text: 'test@test.com', valid: true }];
    const setEmails = (_emails) => { emails = _emails };

    handleEmailChecks({ keyCode: COMMA, target: { value: email } }, emails, setEmails);
    expect(emails).toHaveLength(2);

    const newEmail = emails.find(e => e.text === emailsSubstring);
    expect(newEmail).toBeTruthy();

    handleEmailChecks({ keyCode: ENTER, target: { value: email } }, emails, setEmails);
    expect(emails).toHaveLength(3);
  });

  it('should add the new email(s) when copy and paste', () => {
    const email = 'test,t@test.com';
    let emails = [{ id: 1, text: 'test@test.com', valid: true }];
    const setEmails = (_emails) => { emails = _emails };

    handleEmailChecks({
      keyCode: KEY_COMMAND, target: { value: email }, key: 'Meta'
    }, emails, setEmails);
    expect(emails).toHaveLength(3);

    const newEmail = emails.find(e => e.text === 't@test.com' && !!e.valid);
    expect(newEmail).toBeTruthy();

    const invalidEmail = emails.find(e => e.text === 'test' && e.valid === false);
    expect(invalidEmail).toBeTruthy();

    handleEmailChecks({
      keyCode: KEY_V, target: { value: email }, ctrlKey: true
    }, emails, setEmails);
    expect(emails).toHaveLength(5);
  });
});