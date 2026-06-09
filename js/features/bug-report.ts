// English Words App — js/features/bug-report.ts
// Bug / feedback report form — opens mailto: with pre-filled subject + body
import { t } from './i18n.ts';

const RECIPIENT = 'beizmans@gmail.com';

const subjectEl = document.getElementById('bug-subject') as HTMLSelectElement | null;
const messageEl = document.getElementById('bug-message') as HTMLTextAreaElement | null;
const sendBtn   = document.getElementById('bug-send-btn') as HTMLButtonElement | null;
const sentNote  = document.getElementById('bug-sent-note') as HTMLElement | null;

function _send(): void {
  const message = messageEl?.value.trim() ?? '';
  if (!message) {
    messageEl?.classList.add('bug-error');
    messageEl?.focus();
    return;
  }
  messageEl?.classList.remove('bug-error');

  const subjectVal = subjectEl?.value || t('settings.bugSubjectDefault');
  const body = message + '\n\n---\nEnglish Words App';

  window.location.href =
    `mailto:${RECIPIENT}` +
    `?subject=${encodeURIComponent(subjectVal)}` +
    `&body=${encodeURIComponent(body)}`;

  // Show brief confirmation and clear the form after a moment
  if (sentNote) { sentNote.style.display = 'inline'; }
  setTimeout(() => {
    if (messageEl)  { messageEl.value = ''; }
    if (subjectEl)  { subjectEl.value = ''; }
    if (sentNote)   { sentNote.style.display = 'none'; }
  }, 2000);
}

sendBtn?.addEventListener('click', _send);
messageEl?.addEventListener('input', () => messageEl.classList.remove('bug-error'));
