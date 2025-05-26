import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

const formatDateDistance = (createdAt) => {
  return formatDistanceToNow(createdAt, { addSuffix: true, locale: id });
};

const getTextOnly = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

export { formatDateDistance, getTextOnly };
