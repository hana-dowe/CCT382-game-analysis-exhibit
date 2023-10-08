import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const EYE_TOY: CardDetailMap = {
  emoji: '👁️',
  heading: 'EyeToy: Play',
  release: '2003',
  console: {
    platform: 'PlayStation2',
    createdBy: 'Sony',
  },
  gameDetails: 'The game comes with a bunch of minigames that are played using your body.',
  controllerDetails: 'A camera that connects to the PS2',
  mainLabel: (
    <>
      <p>
        This controller steps away from what seems to be the trend: adding more buttons to
        controllers. It actually removes buttons altogether! In EyePlay you become the controller
        yourself. EyePlay figured out a creative way to create immersion, by quite literally putting
        you in the game.
      </p>
      <p>This analysis mostly only exists because the videos are funny :D</p>
    </>
  ),
  references: [
    YouTubeCitation({
      accountName: 'IGN',
      timestamp: { year: 2011, month: 'June', date: 16 },
      title: 'EyeToy: Play 2 PlayStation 2 Gameplay - Grating Cheese',
      url: 'https://youtu.be/UeglmVsq5_w',
    }),
    YouTubeCitation({
      accountName: 'Christopher Masto',
      timestamp: { year: 2008, month: 'February', date: 11 },
      title: 'EyeToy Kung Foo',
      url: 'https://youtu.be/atXO1MWvdjs',
    }),
    ImageCitation({
      author: 'Evan-Amos',
      year: 2010,
      title: '1041px-PS2-Eyetoy',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:PS2-Eyetoy.jpg',
    }),
  ],
  artifacts: [
    {
      label: 'EyeToy: Play 2 PlayStation 2 Gameplay - Grating Cheese (IGN, 2011)',
      media: <YouTubeEmbed videoUID="UeglmVsq5_w" />,
    },
    {
      label: 'EyeToy Kung Foo (Christopher Masto, 2008)',
      media: <YouTubeEmbed videoUID="atXO1MWvdjs" />,
    },
    {
      label: 'EyeToy (Evan-Amos, 2010)',
      media: <Image label="EyeToy" source="./assets/14/1041px-PS2-Eyetoy.jpg" />,
    },
  ],
};

export default EYE_TOY;
