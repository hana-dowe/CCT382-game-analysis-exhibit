import Typography from '@mui/material/Typography';

import { Reference } from '../types';

type Props = {
  accountName: string;
  timestamp: { year: number; month: string; date: number };
  title: string;
  url: string;
};

function YouTubeCitation(props: Props): Reference {
  const { accountName, timestamp, title, url } = props;
  return {
    firstWord: accountName,
    citation: (
      <Typography>
        {`${accountName}. (${timestamp.year}, ${timestamp.month} ${timestamp.date}). `}
        <i>{title}</i>
        {`. [Video]. YouTube. `}
        <a href={url}>{url}</a>.
      </Typography>
    ),
  };
}

export default YouTubeCitation;
