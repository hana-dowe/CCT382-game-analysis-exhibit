import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const MARIO_KART: CardDetailMap = {
  emoji: '🏎️',
  heading: 'Mario Kart 64',
  release: '1996',
  console: {
    platform: 'N64',
    createdBy: 'Nintendo',
  },
  gameDetails: 'Racing game featuring characters from the Super Mario series',
  controllerDetails:
    'The controller comes in an odd shape. Most noticeably, it has three grips. There is a D-pad on the left, 4 yellow buttons on the right, as well as A and B buttons, an analog stick in the center with the start button above it, and three buttons, L, R, Z in the back. Which is a lot to process.',
  mainLabel: (
    <>
      <p>
        PC games weren’t the only devices needing to adjust to 3D video games. Consoles needed to
        find a way to configure camera movement as well. The Nintendo 64 was the first major console
        to add an analog stick to its controller (Guinness World Records, 1996). Although they had
        an interesting way of introducing it. The idea was that users could hold the controller in
        two different ways, but that didn’t quite stick around. As we know with how most of our
        controllers look today.
      </p>
      <p>
        Mario Kart 64 benefited greatly from this controller. If the N64 controller only had the
        D-pad, we would not be able to drive around with precision around the tracks. Adding buttons
        to the back helped as well. The left front side is occupied to keep the kart accelerating
        and the right side is occupied to steer the kart. Based on how we grip the controller, our
        finger would already be at the back where we can jump or use items, making it easier for
        players to multitask.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Evan-Amos',
      year: 2011,
      title: 'N64-Controller-Gray',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:N64-Controller-Gray.jpg',
    }),
    YouTubeCitation({
      accountName: 'IGN',
      timestamp: { year: 2010, month: 'December', date: 29 },
      title: 'Mario Kart 64 (1997) - IGN Gameplay Vault',
      url: 'https://youtu.be/u4XQ-Eo2-T4',
    }),
    WebCitation({
      title: 'The N64 Controller Provides Inspiration',
      source: 'Nintendo UK',
      url: 'https://www.nintendo.co.uk/Iwata-Asks/Iwata-Asks-Sin-and-Punishment-Successor-of-the-Skies/Iwata-Asks-Sin-and-Punishment-Successor-of-the-Skies/1-The-N64-Controller-Provides-Inspiration/1-The-N64-Controller-Provides-Inspiration-214087.html',
    }),
    WebCitation({
      title: 'First analog console controller stick',
      source: 'Guinness World Records',
      url: 'https://www.guinnessworldrecords.com/world-records/88337-first-analog-console-controller-stick',
    }),
  ],
  artifacts: [
    {
      label: 'Gameplay (IGN, 2010)',
      media: <YouTubeEmbed videoUID="u4XQ-Eo2-T4" />,
    },
    {
      label: 'Controller (Evan-Amos, 2011)',
      media: <Image label="N64 Controller" source="./assets/11/1128px-N64-Controller-Gray.jpg" />,
    },
    {
      label: 'Methods to hold controller (The N64 Controller)',
      media: (
        <Image
          label="Methods to hold N64 controller"
          source="./assets/11/iwata_sinpunish_content_01.jpg"
        />
      ),
    },
  ],
};

export default MARIO_KART;
