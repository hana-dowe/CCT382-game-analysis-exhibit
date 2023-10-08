import Typography from '@mui/material/Typography';

import { Reference } from '../types';

type Props = {
  author: string;
  year?: number;
  title: string;
  source: string;
  url: string;
};

function ImageCitation(props: Props): Reference {
  const { author, year, title, source, url } = props;
  return {
    firstWord: author,
    citation: (
      <Typography>
        {`${author}. (${year ?? 'n.d.'}). `}
        <i>{title}</i>
        {`. [Photograph]. ${source}. `}
        <a href={url}>{url}</a>.
      </Typography>
    ),
  };
}

export default ImageCitation;
