import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const SUPER_MARIO_BROS: CardDetailMap = {
  emoji: '🍄',
  heading: 'Super Mario Bros.',
  release: 'Sep 13, 1985',
  console: {
    platform: 'Nintendo Entertainment System (NES)',
    createdBy: 'Nintendo',
  },
  gameDetails:
    'The classic platform game, also the first game from the super mario series. The player plays as Mario on a mission to save Princess Toadstool from Koopa. ',
  controllerDetails:
    'Controller comes with a directional-pad on the left and A and B buttons on the right. The D-pad has arrows engraved in them. Select and start buttons are in the middle, because they are not used as often as the directions and A/B buttons and don’t need to be easy to access.',
  mainLabel: (
    <>
      <p>
        The directional-pad on the left of the controller was a big step forward. When trying to
        input direction on a joystick, you typically have to use your whole hand to move it. But
        with the D-pad, you could control your character in all four directions with one finger.
        Since the D-pad was a new concept, Nintendo went out of its way by engraving the arrows in
        each direction to really make sure people knew what the button did.
      </p>
      <p>
        The controls in Super Mario Bros. are a lot more complicated and require more precision than
        the games we have seen so far in this analysis. Mario can walk, run, jump, defeat enemies,
        get power-ups, enter pipes, etc. This is due to the fact that video games are becoming more
        common. Some video game players have evolved into gamers, and desire more difficult
        challenges. Super Mario Bros. was developed to satisfy their needs.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Nintendo',
      year: 1985,
      title: '',
      source: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/File:Super_Mario_Bros._box.png',
    }),
    WebCitation({
      author: 'Nintendo',
      title: 'Super Mario Bros. Instruction Booklet',
      source: 'Nintendo',
      url: 'https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAAAE.pdf',
    }),
    ImageCitation({
      author: 'Evan-Amos',
      year: 2020,
      title: 'NES-Console-Set',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:NES-Console-Set.jpg',
    }),
    ImageCitation({
      author: 'Evan-Amos',
      year: 2016,
      title: 'Nintendo-Entertainment-System-NES-Controller-FL',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Nintendo-Entertainment-System-NES-Controller-FL.jpg',
    }),
    YouTubeCitation({
      accountName: 'Pii89',
      timestamp: { year: 2014, month: 'May', date: 4 },
      title: 'Super Mario Bros. (1985) Full Walkthrough NES Gameplay [Nostalgia]',
      url: 'https://www.youtube.com/watch',
    }),
  ],
  artifacts: [
    {
      label: 'Cover Art (Nintendo, 1985)',
      media: (
        <Image label="super mario bros. cover art" source="./assets/6/Super_Mario_Bros._box.png" />
      ),
    },
    {
      label: 'Console (Evan-Amos, 2020)',
      media: <Image label="NES console" source="./assets/6/NES-Console-Set.jpg" />,
    },
    {
      label: 'Controller (Evan-Amos, 2016)',
      media: (
        <Image
          label="NES controller"
          source="./assets/6/Nintendo-Entertainment-System-NES-Controller-FL.jpg"
        />
      ),
    },
    {
      label: 'Instruction Booklet (Nintendo)',
      media: (
        <Image
          label="Nintendo's Instruction Booklet for Super Mario Bros."
          source="./assets/6/manual.png"
        />
      ),
    },
    {
      label: 'Gameplay (Pii89, 2014)',
      media: <YouTubeEmbed videoUID="rLl9XBg7wSs" />,
    },
  ],
};

export default SUPER_MARIO_BROS;
