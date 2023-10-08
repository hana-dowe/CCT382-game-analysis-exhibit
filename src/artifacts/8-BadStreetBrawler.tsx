import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const BAD_STREET_BRAWLER: CardDetailMap = {
  emoji: '🥊',
  heading: 'Bad Street Brawler',
  release: '1989',
  console: {
    platform: 'NES Power Glove',
    createdBy: 'Nintendo / Mattel',
  },
  gameDetails:
    'Beat em’ up game where the player advances through stages as they fight enemies that come in their way',
  controllerDetails:
    'As the name suggests, the NES Power Globe is a glove-like controller that you wear. It relays inputs through the movement of the glove via a wire to the NES. It also has a bunch of buttons on the wrist area.',
  mainLabel: (
    <>
      <p>
        This time, Nintendo attempted to take on virtual reality. A motion-sensing controller being
        connected by a wire limits its ability to move around. But that didn’t really matter since
        the motion sensing barely worked in the first place. (Cronin, 2020).{' '}
      </p>
      <p>
        Although you could use it for any game, only two games were specifically designed with the
        glove in mind, one of which was Bad Street Brawler. You were supposed to be able to mimic
        punching movements to fight opponents with the glove. But its inaccuracy and spotty
        connection only made the game harder and frustrating for its users. Instead of increasing
        immersion in the game like we hoped the glove would, it did the opposite by obstructing the
        player from performing actions they would have otherwise been able to do on a regular
        controller.
      </p>
      <p>
        The concept was cool and exciting, it definitely would have gone better if the budget and
        technology allowed for its proper development at the time.
      </p>
    </>
  ),
  references: [
    YouTubeCitation({
      accountName: 'Thomas Mason IV',
      timestamp: {
        year: 2019,
        month: 'June',
        date: 21,
      },
      title: 'NES Power Glove Demonstration',
      url: 'https://youtu.be/55JpDJkYjhk',
    }),
    YouTubeCitation({
      accountName: 'lingpanda101',
      timestamp: {
        year: 2008,
        month: 'January',
        date: 27,
      },
      title: 'Power Glove Commercial',
      url: 'https://youtu.be/SAKbtJjAV18',
    }),
    ImageCitation({
      author: 'Evan-Amos',
      year: 2011,
      title: 'NES-Power-Glove',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:NES-Power-Glove.jpg',
    }),
    ImageCitation({
      author: 'Bean Software',
      year: 1989,
      title: 'Bad Street Brawler cover',
      source: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/File:Bad_Street_Brawler_cover.png',
    }),
    WebCitation({
      author: 'Cronin, Caitlin',
      timestamp: { year: 2020, month: 'November', date: 30 },
      title: 'The promise of the Nintendo Power Glove',
      source: 'acmi',
      url: 'https://www.acmi.net.au/stories-and-ideas/nintendo-nes-power-glove/',
    }),
  ],
  artifacts: [
    {
      label: 'Bad Street Brawler Cover Art with Power Glove (Beam Software, 1989)',
      media: (
        <Image
          label="Bad Street Brawler Cover Art with Power Glove"
          source="./assets/8/Bad_Street_Brawler_cover.png"
        />
      ),
    },
    {
      label: 'NES Power Glove (Evan-Amos, 2011)',
      media: <Image label="NES Power Glove" source="./assets/8/1200px-NES-Power-Glove.jpg" />,
    },
    {
      label: 'Power Glove Commercial (lingpanda101, 2008)',
      media: <YouTubeEmbed videoUID="SAKbtJjAV18" />,
    },
    {
      label: 'NES Power Glove Demonstration (Thomas Mason IV, 2019)',
      media: <YouTubeEmbed videoUID="55JpDJkYjhk?start=100" />,
    },
  ],
};

export default BAD_STREET_BRAWLER;
