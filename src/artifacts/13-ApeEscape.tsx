import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const APE_ESCAPE: CardDetailMap = {
  emoji: '🐵',
  heading: 'Ape Escape',
  release: '1999',
  console: {
    platform: 'PlayStation',
    createdBy: 'Sony',
  },
  gameDetails:
    'Platforming game where you use gadgets to try to capture apes that are trying to rewrite history.',
  controllerDetails:
    'Analog stick on both sides, pretty much the shape of a controller we imagine today.',
  mainLabel: (
    <>
      <p>
        Instead of N64’s approach of changing how to hold the controller based on what features we
        want to use, PlayStation added analog sticks to both sides, so the player can hold the
        controller one way and choose when to use which control method.
      </p>
      <p>
        Ape Shock was the first game to use this controller to its full potential. The game takes
        place in a 3D environment. To move the character, you use the left stick. And you move the
        right stick to use your gadgets. The game consisted of controls which required simultaneous
        analog stick inputs.
      </p>
      <p>
        PlayStation did a spectacular job with their early iteration of their controller because to
        this day they still have a very similar shape even when you look at the newest PS5 model.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Evan-Amos',
      year: 2011,
      title: 'PSX-DualShock-Controller',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:PSX-DualShock-Controller.jpg',
    }),
    YouTubeCitation({
      accountName: 'GamePlayStation',
      timestamp: { year: 2022, month: 'June', date: 19 },
      title: 'Ape Escape -- Gameplay (PS1)',
      url: 'https://youtu.be/gj16mlPcpIk',
    }),
  ],
  artifacts: [
    {
      label: 'Gameplay (GamePlayStation, 2022)',
      media: <YouTubeEmbed videoUID="gj16mlPcpIk" />,
    },
    {
      label: 'Controller (Evan-Amos, 2011)',
      media: (
        <Image
          label="Dualshock Controller"
          source="./assets/13/1148px-PSX-DualShock-Controller.jpg"
        />
      ),
    },
  ],
};

export default APE_ESCAPE;
