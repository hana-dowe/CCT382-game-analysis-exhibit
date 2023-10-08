import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const GUITAR_FREAKS: CardDetailMap = {
  emoji: '🎸',
  heading: 'Guitar Freaks',
  release: '1999',
  console: {
    platform: 'Arcade',
    createdBy: 'Konami',
  },
  gameDetails:
    'Guitar Freaks is a rhythm game where you play notes on the guitar controller. You have to play the notes on the guitar as it shows up on screen so that the sounds match up with the song.',
  controllerDetails:
    'The controller is a guitar with colourful buttons on its neck and a bar to press where you would strum on a real one',
  mainLabel: (
    <p>
      Theoretically, players shouldn’t want controllers to be heavier than they need to be, but
      guitar controllers are an exception. In Guitar Freak’s case, the controller creates more
      immersion than the game. The game’s UI is also dependent on the fact that the controller is a
      guitar because the screen only shows the neck of the guitar. The screen on its own does not
      look too different from a plain old rhythm game. Without the guitar controller, the game would
      feel something more basic like rhythm game freaks.
    </p>
  ),
  references: [
    ImageCitation({
      author: 'Alekay, Steven',
      year: 2015,
      title: 'GuitarFreaks V8 arcade machine',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:GuitarFreaks_V8_arcade_machine.jpg',
    }),
    YouTubeCitation({
      accountName: 'SeanOrange',
      timestamp: { year: 2007, month: 'July', date: 27 },
      title: 'Guitar Freaks FAIL',
      url: 'https://youtu.be/uKilercrayU',
    }),
  ],
  artifacts: [
    {
      label: 'Arcade Machine (Alekay, 2015)',
      media: (
        <Image
          label="Guitar Freaks Arcade Machine"
          source="./assets/12/GuitarFreaks_V8_arcade_machine.jpg"
        />
      ),
    },
    { label: 'Gameplay (SeanOrange, 2007)', media: <YouTubeEmbed videoUID="uKilercrayU" /> },
  ],
};

export default GUITAR_FREAKS;
