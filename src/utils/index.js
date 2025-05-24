import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

const formatDateDistance = (createdAt) => {
  return formatDistanceToNow(createdAt, { addSuffix: true, locale: id });
};

export { formatDateDistance };
