import { formatDistanceToNow } from "date-fns";

export const formatRelativeTime = (timestamp: Date) => {
  const distance = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
  });
  return distance;
};
