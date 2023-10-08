import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const MARATHON: CardDetailMap = {
  emoji: '🏃',
  heading: 'Marathon',
  release: '1994',
  console: {
    platform: 'Mac OS',
    createdBy: 'Bungle',
  },
  gameDetails:
    'Marathon is a first-person shooter. Your task is to kill aliens to stop an invasion.',
  controllerDetails: 'Exact same controllers as Doom, your keyboard and mouse',
  mainLabel: (
    <p>
      Gamers quickly caught on to how much more control you are able to get with the mouse since
      doom, as it didn’t even take a year for a game to be released with mouse movement as the
      default camera configuration. Marathon was the first game to introduce freelook, allowing
      players to look 360 degrees with the movement of their mouse (Guinness World Records, 1994). I
      personally think freelook is what makes PC games game-changers, due to the sheer amount of
      visibility and precision you can get.
    </p>
  ),
  references: [
    YouTubeCitation({
      accountName: 'MrThejoshmon',
      timestamp: { year: 2014, month: 'November', date: 18 },
      title: 'Marathon (1994) HD Gameplay',
      url: 'https://youtu.be/zNDARJ-eAqU',
    }),
    WebCitation({
      title: 'First use of freelook in a FPS',
      timestamp: { year: 1994 },
      source: 'Guinness World Records',
      url: 'https://www.guinnessworldrecords.com/world-records/first-use-of-freelook-in-a-fps',
    }),
  ],
  artifacts: [
    { label: 'Gameplay (MrThejoshmon, 2014)', media: <YouTubeEmbed videoUID="zNDARJ-eAqU" /> },
  ],
};

export default MARATHON;
