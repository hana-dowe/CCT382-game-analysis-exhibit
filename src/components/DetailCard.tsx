import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import { CardDetailMap, Reference } from '../types';

import Carousel from './Carousel';

const useStyles = makeStyles({
  card: {
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  header: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  action: {
    margin: 'auto!important',
  },
});

const sortReferences = (a: Reference, b: Reference) => {
  if (a.firstWord.toLowerCase() < b.firstWord.toLowerCase()) {
    return -1;
  }
  if (a.firstWord.toLowerCase() === b.firstWord.toLowerCase()) {
    return 0;
  }
  return 1;
};

type Props = {
  colors: { dark: string; light: string };
} & CardDetailMap;

function DetailCard(props: Props) {
  const {
    emoji,
    heading,
    release,
    console,
    gameDetails,
    controllerDetails,
    mainLabel,
    references,
    artifacts,
    colors,
  } = props;

  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: '25px 0', backgroundColor: colors.dark }} className={classes.card}>
      <CardHeader
        onClick={handleExpandClick}
        avatar={<Typography variant="h3">{emoji}</Typography>}
        title={<Typography variant="h4">{heading}</Typography>}
        action={
          <IconButton onClick={handleExpandClick} style={{ alignSelf: 'center', margin: 0 }}>
            {expanded ? (
              <RemoveIcon sx={{ height: '2rem', width: '2rem' }} />
            ) : (
              <AddIcon sx={{ height: '2rem', width: '2rem' }} />
            )}
          </IconButton>
        }
        classes={{ root: classes.header, action: classes.action }}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          sx={{ fontWeight: 500, backgroundColor: colors.light, padding: '30px 0 10px 0' }}
        >
          <Carousel images={artifacts} isPlayingVideo />
        </CardMedia>
        <Grid display="flex" textAlign="center" paddingTop="20px" flexWrap="wrap">
          <Box flexGrow={1}>
            <Typography variant="h6">Release Date</Typography>
            <Typography>{release}</Typography>
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h6">Platform</Typography>
            <Typography>{console.platform}</Typography>
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h6">Created By</Typography>
            <Typography>{console.createdBy}</Typography>
          </Box>
        </Grid>
        <CardContent>
          <Container
            sx={{
              overflowY: 'auto',
              height: '50%',
              textAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              padding: '20px',
            }}
          >
            <Box>
              <Typography variant="h6">The Game</Typography>
              <Typography style={{ textIndent: '24px' }}>{gameDetails}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">The Controller</Typography>
              <Typography style={{ textIndent: '24px' }}>{controllerDetails}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Combined Analysis</Typography>
              <Typography style={{ textIndent: '24px' }}>{mainLabel}</Typography>
            </Box>
          </Container>
          <Accordion
            sx={{
              backgroundColor: colors.dark,
              borderRadius: '4px',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>References</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '1rem',
                paddingBottom: '1rem',
              }}
            >
              {references.sort(sortReferences).map((r) => r.citation)}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default DetailCard;
