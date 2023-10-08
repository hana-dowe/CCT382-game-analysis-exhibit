import Typography from '@mui/material/Typography';

import { Reference } from '../types';

type Timestamp = {
  year: number;
  month?: string;
  date?: number;
};

type Props = {
  author?: string;
  title: string;
  timestamp?: Timestamp;
  source: string;
  url: string;
};

const getTimestamp = (timestamp?: Timestamp) => {
  if (!timestamp) {
    return 'n.d.';
  }
  if (!timestamp.month) {
    return timestamp.year;
  }
  return `${timestamp.year}, ${timestamp.month} ${timestamp.date}`;
};

function WebCitation(props: Props): Reference {
  const { author, title, timestamp, source, url } = props;

  return author
    ? {
        firstWord: author,
        citation: (
          <Typography>
            {`${author}. (${getTimestamp(timestamp)}). `}
            <i>{title}</i>
            {`. ${source}. `}
            <a href={url}>{url}</a>.
          </Typography>
        ),
      }
    : {
        firstWord: title,
        citation: (
          <Typography>
            <i>{title}</i>
            {`. ${source}. (${getTimestamp(timestamp)}). `}
            <a href={url}>{url}</a>.
          </Typography>
        ),
      };
}

export default WebCitation;
