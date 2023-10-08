import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const THE_LEGEND_OF_ZELDA: CardDetailMap = {
  emoji: '🏹',
  heading: 'The Legend of Zelda',
  release: '1986',
  console: {
    platform: 'Famicom',
    createdBy: 'Nintendo',
  },
  gameDetails:
    'The Legend of Zelda is an Adventure game where you play as the hero Link to save princess Zelda from Ganon.',
  controllerDetails:
    'The Famicom controllers are mostly the same as the previous NES controllers. The small difference is that on the Famicom released in Japan, the left controller has the select and start buttons while the right controller has a microphone input and volume control.',
  mainLabel: (
    <>
      <p>
        Nintendo decided to add microphone input as a new method of taking control of your game.
        With the hands-free input through the mic, you could use not only your hands as input but
        your voice as well.
      </p>
      <p>
        The Legend of Zelda incorporated this feature by creating an enemy called Pols Voice which
        is afraid of loud noises (Bertoli, 2020). If you make a loud sound while there are Pols
        Voice on the map, it will automatically defeat them. By making the player use more of
        themselves to play the game, it makes them more engaged in the game.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Evan-Amos',
      year: 2016,
      title: 'Nintendo-Famicom-Console-Set-FL',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Nintendo-Famicom-Console-Set-FL.jpg',
    }),
    ImageCitation({
      author: 'Evan-Amos',
      year: 2016,
      title: 'Nintendo-Famicom-Controller-II-FL',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Nintendo-Famicom-Controller-II-FL.jpg',
    }),
    WebCitation({
      author: 'Bertoli, Ben',
      timestamp: {
        year: 2020,
        month: 'February',
        date: 9,
      },
      title: 'The Famicom’s Built-In Microphone Was Wonderfully Weird',
      source: 'Kotaku',
      url: 'https://kotaku.com/the-famicom-s-built-in-microphone-was-wonderfully-weird-1840887609',
    }),
    YouTubeCitation({
      accountName: 'chikorii',
      timestamp: { year: 2016, month: 'December', date: 18 },
      title: 'Famicom Zelda - Killing Pols Voice with Microphone',
      url: 'https://youtu.be/rQ8BQg2SE-o',
    }),
    ImageCitation({
      author: 'Nintendo',
      title: 'Legend of zelda cover (with cartridge) gold',
      source: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/File:Legend_of_zelda_cover_(with_cartridge)_gold.png',
    }),
  ],
  artifacts: [
    {
      label: 'Cover art (Nintendo)',
      media: (
        <Image
          label="legend of zelfa NES cover art"
          source="./assets/7/Legend_of_zelda_cover_(with_cartridge)_gold.png"
        />
      ),
    },
    {
      label: 'Console (Evan-Amos, 2016)',
      media: (
        <Image label="nintendo famicom" source="./assets/7/Nintendo-Famicom-Console-Set-FL.jpg" />
      ),
    },
    {
      label: 'Controller with Mic (Evan-Amos, 2016)',
      media: (
        <Image
          label="Famicon Controller with Mic"
          source="./assets/7/Nintendo-Famicom-Controller-II-FL.jpg"
        />
      ),
    },
    {
      label: 'Famicom Zelda - Killing Pols Voice with Microphone (chikorii, 2016)',
      media: <YouTubeEmbed videoUID="rQ8BQg2SE-o?start=26" />,
    },
  ],
};

export default THE_LEGEND_OF_ZELDA;
