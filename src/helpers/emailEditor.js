import is from 'is_js';
import { v4 as uuidv4 } from 'uuid';
import { KEY_V, KEY_COMMAND, keyCodes, COMMA } from '../constants/emailEditor';

export const handleEmailChecks = (event, emails, setEmails) => {
  const isCommand = [event.key, event.metaKey].includes('Meta');
    const val = event?.target?.value.trim() || '';

    // Ctrl + v / Command + v
    if ([KEY_V, KEY_COMMAND].includes(event.keyCode) && (event.ctrlKey || isCommand)) {
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
      event.target.value = '';
      return;
    }

    // Comma, Enter and Focus out
    if (val && keyCodes.includes(event.keyCode)) {
      const text = event.keyCode === COMMA ? val.substring(0, val.length - 1) : val;

      setEmails([...emails, {
        id: uuidv4(),
        text,
        valid: is.email(text)
      }]);
      event.target.value = '';
    }
}