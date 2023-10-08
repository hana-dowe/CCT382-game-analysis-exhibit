import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  active: {
    backgroundColor: 'black!important',
  },
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type Props = {
  images: {
    label: string;
    media: React.ReactNode;
  }[];
  isPlayingVideo: boolean;
};

function Carousel(props: Props) {
  const { images, isPlayingVideo = true } = props; // hanatodo
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} width="100%">
      <Grid display="flex" width="100%">
        <Button size="small" onClick={handleBack} disabled={activeStep === 0} color="inherit">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </Button>
        <Grid width="100%">
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={!isPlayingVideo ? handleStepChange : undefined}
            interval={3000}
            width="100%"
            height="100%"
            style={{ backgroundColor: 'transparent', flexShrink: 1 }}
          >
            {images.map((step, index) => (
              <div style={{ height: '100%', overflow: 'hidden' }} key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{ height: { xs: '250px', sm: '400px' } }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {step.media}
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'center',
              mr: 2,
              backgroundColor: 'transparent',
            }}
          >
            <Typography textAlign="center">{images[activeStep].label}</Typography>
          </Paper>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={<div />}
            backButton={<div />}
            color="inherit"
            sx={{ backgroundColor: 'transparent', color: 'black' }}
            classes={{ dotActive: classes.active }}
          />
        </Grid>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          color="inherit"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Grid>
    </Box>
  );
}

export default Carousel;
