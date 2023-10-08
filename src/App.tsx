/* eslint-disable simple-import-sort/imports */
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TENNIS_FOR_TWO from './artifacts/1-TennisForTwo';
import MARATHON from './artifacts/10-Marathon';
import COMPUTER_SPACE from './artifacts/2-ComputerSpace';
import SPACE_INVADERS from './artifacts/3-SpaceInvaders';
import BALL from './artifacts/4-Ball';
import FROGGER from './artifacts/5-Frogger';
import SUPER_MARIO_BROS from './artifacts/6-SuperMarioBros';
import THE_LEGEND_OF_ZELDA from './artifacts/7-TheLegendOfZelda';
import BAD_STREET_BRAWLER from './artifacts/8-BadStreetBrawler';
import DOOM from './artifacts/9-Doom';
import DetailCard from './components/DetailCard';

import './App.css';
import MARIO_KART from './artifacts/11-MarioKart';
import GUITAR_FREAKS from './artifacts/12-GuitarFreaks';
import APE_ESCAPE from './artifacts/13-ApeEscape';
import EYE_TOY from './artifacts/14-EyeToy';
import PHANTASY_STAR_ONLINE from './artifacts/15-PhantasyStarOnline';
import SUPER_MARIO_64_DS from './artifacts/16-SuperMario64DS';

const DETAILS = [
  TENNIS_FOR_TWO,
  COMPUTER_SPACE,
  SPACE_INVADERS,
  BALL,
  FROGGER,
  SUPER_MARIO_BROS,
  THE_LEGEND_OF_ZELDA,
  BAD_STREET_BRAWLER,
  DOOM,
  MARATHON,
  MARIO_KART,
  GUITAR_FREAKS,
  APE_ESCAPE,
  EYE_TOY,
  PHANTASY_STAR_ONLINE,
  SUPER_MARIO_64_DS,
];

const colors = [
  { dark: '#ffd301', light: '#ffeb8b' },
  { dark: '#207bdf', light: '#488dd9' },
  { dark: '#e53d36', light: '#eb6d68' },
  { dark: '#009364', light: '#2aa17b' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container sx={{ marginTop: '50px', marginBottom: '50px' }}>
          <Typography variant="h2">
            How Video Games and Controllers Evolved Together to Improve Gamers’ Experience
          </Typography>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', columnGap: '1rem', margin: '1rem 0' }}
          >
            {colors.map((c) => (
              <Box
                sx={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: c.dark }}
              />
            ))}
          </Grid>
          <Typography margin="30px">
            <p>
              We have come a long way since the world’s very first video game in 1958 (Stony Brook
              University, 2013). In this exhibit, we will analyze how controllers for video games
              have evolved throughout the years, as players and technologies became more developed.
              Generally, older games tend to be more simple compared to the standard games we see
              today. This is due to two main factors: the players’ skill set and the technology used
              to create them. As more and more games are produced and published for the public to
              play, the player’s abilities to play games improve. As their skills improve, they are
              less satisfied with the current level of the games they are playing, and companies try
              to respond to the demand by creating more complex games. The technology available to
              the developers while creating the game is an obvious factor in how complex a game can
              be. Games being more complex require more controls and natural ways to use those
              controls, which is only possible after technology evolves. Controllers become easier
              to hold but more buttons get added. We will also analyze some untraditional features
              that companies have tried on their controllers which may or may not have worked in
              their favor.
            </p>
            <p>
              Anyone with basic knowledge of video games should be able to understand this exhibit.
              I do not use a very professional tone to explain my findings or thoughts and some of
              the artifacts are definitely not serious, so hopefully, it will be fun to read
              through! Enjoy :D
            </p>
          </Typography>
          {DETAILS.map((d, i) => (
            <DetailCard {...d} colors={colors[i % 4]} />
          ))}
        </Container>
      </header>
    </div>
  );
}

export default App;
