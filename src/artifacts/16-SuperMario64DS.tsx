import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const SUPER_MARIO_64_DS: CardDetailMap = {
  emoji: '🏰',
  heading: 'Super Mario 64 DS',
  release: '2004',
  console: {
    platform: 'DS',
    createdBy: 'Nintendo',
  },
  gameDetails:
    'Princess peach is captured by bowser as always, but this time, you start off playing as Yoshi and unlock other playable characters including Mario as you progress in the game',
  controllerDetails:
    'DS is a foldable handheld with two screens. It has a D-pad on the left, 4 buttons on the right, along with start and select, 2 buttons on the back, a touchscreen, and a mic',
  mainLabel: (
    <>
      <p>
        Finally, we get to talk about the device I spent my childhood with: The Nintendo DS. The
        biggest difference from the past devices in this exhibit is that the bottom screen of the DS
        supports touchscreen. Tapping the screen is very intuitive, and it helped me as a child who
        was picking up on video games because tapping options was easier than figuring out the
        mapping of the key.
      </p>
      <p>
        It doesn’t have an analog stick, presumably because there would be no space to fold it. But
        it does bring back the mic from the Famicon. So the feedback must have been positive from
        that iteration.
      </p>
      <p>
        Another interesting feature the DS has is that it can be used in both landscape or portrait
        mode depending on the game. And now, we see this feature on our phones. It’s interesting to
        see the overlap between a video game console and our phones.
      </p>
      <p>
        In only 46 years we’ve evolved from Tennis for Two to a Nintendo DS. I can’t wait to see
        what kind of consoles we end up with when another 46 years pass.{' '}
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Muband',
      year: 2006,
      title: 'Nintendo DS Lite Ice Blue 01',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Nintendo_DS_Lite_Ice_Blue_01.jpg',
    }),
    YouTubeCitation({
      accountName: 'NintendoCentral',
      timestamp: { year: 2017, month: 'May', date: 8 },
      title: 'Super Mario 64 DS - Full Game (100% Complete)',
      url: 'https://youtu.be/w3atTWOaY4g',
    }),
  ],
  artifacts: [
    {
      label: 'DS (Muband, 2006)',
      media: <Image label="DS" source="./assets/16/Nintendo_DS_Lite_Ice_Blue_01.jpg" />,
    },
    {
      label: 'Super Mario 64 DS - Full Game (100% Complete) (NintendoCentral, 2017)',
      media: <YouTubeEmbed videoUID="w3atTWOaY4g" />,
    },
  ],
};

export default SUPER_MARIO_64_DS;
