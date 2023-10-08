import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const SPACE_INVADERS: CardDetailMap = {
  emoji: '👾',
  heading: 'Space Invaders',
  release: '1980',
  console: {
    platform: 'Atari 2600',
    createdBy: 'Atari',
  },
  gameDetails:
    'Originally an arcade game, ported for console. A shooting game where you control a laser cannon to shoot at aliens. The goal is to defeat all the aliens before they reach earth.',
  controllerDetails:
    'The controller comes with the Atari 2600 console, it has a Joystick and a button. Communicates to the console through the wire that connects them.',
  mainLabel: (
    <>
      <p>
        This is the first console that has come up in this analysis. The controller now needs to
        work for multiple different games, so we cannot glue instructions onto them anymore. The
        original Space Invaders arcade used circular left and right buttons, but the Atari 2600 uses
        a joystick which is more intuitive for movement.
      </p>
      <p>
        Although the concept of using a joystick may have sparked joy, the Atari 2600 joystick was
        not suited for people with larger hands (Classic Game Room, 2008). Typically, you would want
        to grab onto the whole stick to get a good grip, but the controller is too small for the
        hands of adults. This could lead to having less control of your character, discouraging
        people from playing.
      </p>
      <p>
        But on a good note, Space Invaders was the first to introduce meaningful sound effects to
        video games (Donahoe, 2017). This is a huge innovation, as it gives more feedback to players
        when they press a button.
      </p>
    </>
  ),
  references: [
    YouTubeCitation({
      accountName: 'NML32',
      timestamp: {
        year: 2008,
        month: 'January',
        date: 2,
      },
      title: 'Atari 2600 Space Invaders',
      url: 'https://youtu.be/opru6qPsPa4',
    }),
    YouTubeCitation({
      accountName: 'Classic Game Room',
      timestamp: {
        year: 2008,
        month: 'August',
        date: 13,
      },
      title: 'Classic Game Room - ATARI 2600 joystick controller review',
      url: 'https://youtu.be/IETpXxqmnfo',
    }),
    ImageCitation({
      author: 'Procyon',
      title: 'Space Invaders cpanel.jpg',
      year: 2006,
      source: 'StrategyWiki',
      url: 'https://strategywiki.org/wiki/File:Space_Invaders_cpanel.jpg',
    }),
    WebCitation({
      author: 'Donahoe, Billy',
      timestamp: { year: 2017, month: 'October', date: 27 },
      title: 'The History of Video Game Music',
      source: 'Press For Sound',
      url: 'https://pressforsound.com/2017/10/27/the-history-of-video-game-music/',
    }),
    ImageCitation({
      author: 'Guyinblack',
      title: 'SpaceInvaders-Gameplay',
      year: 2008,
      source: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/File:SpaceInvaders-Gameplay.gif',
    }),
    ImageCitation({
      author: 'Even-Amos',
      title: 'Atari-2600-Wood-4Sw-Set',
      year: 2011,
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Atari-2600-Wood-4Sw-Set.png',
    }),
  ],
  artifacts: [
    {
      label: 'Game Screen (Guyinblack, 2008)',
      media: <Image label="" source="./assets/3/SpaceInvaders-Gameplay.png" />,
    },
    {
      label: 'Atari 2600 Gameplay (NML32, 2008)',
      media: <YouTubeEmbed videoUID="opru6qPsPa4" />,
    },
    {
      label: 'Atari 2600 (Evan-Amos, 2011)',
      media: <Image label="Atari 2600" source="./assets/3/Atari-2600-Wood-4Sw-Set.png" />,
    },
    {
      label: 'Atari 2600 controller review (Classic Game Room, 2008)',
      media: <YouTubeEmbed videoUID="IETpXxqmnfo?start=25" />,
    },
    {
      label: 'Original Arcade Control Panel (Procyon 2006)',
      media: (
        <Image label="space invaders control panel" source="./assets/3/Space_Invaders_cpanel.jpg" />
      ),
    },
  ],
};

export default SPACE_INVADERS;
