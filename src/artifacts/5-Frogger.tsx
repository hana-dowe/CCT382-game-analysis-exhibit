import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const FROGGER: CardDetailMap = {
  emoji: '🐸',
  heading: 'Frogger',
  release: '1981',
  console: {
    platform: 'Arcade',
    createdBy: 'Konami /Sega',
  },
  gameDetails:
    'You’re a frog that wants to go home. The game starts with the frog at the bottom of the screen and the goal is to reach your home at the top of the screen while dodging cars, and hopping on logs while staying away from predators',
  controllerDetails: 'There is a joystick that has a drawing of a frog facing each direction',
  mainLabel: (
    <p>
      This Frogger arcade controller tells users how the control will work without making them read
      a single word. When you tilt the joystick, the frog on the screen will move in the same
      direction as the drawing. This is the first controller in the analysis that does this. It
      doesn’t put big words in your face like the Computer Space control panel and isn’t
      explanation-less like the Atari 2600. The video game community is growing, so the users are
      developing a better idea of what a video game controller usually does, and needs fewer
      instructions form the developers.
    </p>
  ),
  references: [
    ImageCitation({
      author: 'Pyocyan',
      year: 2006,
      title: 'Frogger arcade control panel',
      source: 'StrategyWiki',
      url: 'https://strategywiki.org/wiki/File:Frogger_cpanel.jpg',
    }),
    ImageCitation({
      author: 'Hornpipe2',
      year: 2019,
      title: 'Frogger game screenshot (arcade version)',
      source: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/File:Frogger_game_arcade.png',
    }),
    YouTubeCitation({
      accountName: 'Seinfeld',
      timestamp: { year: 2022, month: 'October', date: 13 },
      title: 'George Tries To Preserve His Legacy | The Frogger | Seinfeld',
      url: 'https://youtu.be/5etwHVarNgI',
    }),
  ],
  artifacts: [
    {
      label: 'Game screen (Hornpipe2, 2019)',
      media: <Image label="frogger gameplay" source="./assets/5/Frogger_game_arcade.png" />,
    },
    {
      label: 'Controller (Procyon, 2006)',
      media: <Image label="frogger controller" source="./assets/5/Frogger_cpanel.jpg" />,
    },
    { label: 'Gameplay (Seinfeld, 2022)', media: <YouTubeEmbed videoUID="5etwHVarNgI" /> },
  ],
};

export default FROGGER;
