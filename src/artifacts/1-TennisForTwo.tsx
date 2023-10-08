import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const TENNIS_FOR_TWO: CardDetailMap = {
  emoji: '🎾',
  heading: 'Tennis for Two',
  release: 'October 18, 1958',
  console: {
    platform: 'Analog Computer',
    createdBy: 'William Higinbotham',
  },
  gameDetails:
    'Tennis for Two is said to be the first ever video game created. The game is played by 2 players who compete against each other in a tennis match.',
  controllerDetails: `The controller comes in a rectangular shape, with a twistable knob and a button. 
    It’s small enough to be able to hold it in your hand while playing. 
    You turn the knob to adjust the angle of the ball and press the button to hit the ball away from you. 
    Each controller is connected to the machine via a wire.`,

  mainLabel: (
    <>
      <p>
        The controllers for Tennis for Two are surprisingly not too chunky for being the first video
        game controller. The square body and the controls being placed vertically however is not the
        best arrangement to hold the device comfortably. In the video by The Dot Eaters, we see a
        player holding the controller sideways for better grip (2007). The controls themselves are
        wonderfully simple and intuitive, you rotate the knob to rotate position and hit the button
        to hit the ball back.
      </p>
      <p>
        Unlike the controllers, it is easier to notice that the UI is from the first video game. The
        screen only shows the ground, net, and ball. It does not relay any information about the
        current angle you are aiming at. It relies on the players to remember where the last shot
        went and hopefully adjust the knob just the right amount.
      </p>
    </>
  ),
  references: [
    WebCitation({
      title: 'The First Video Game?',
      source: 'Brookhaven National Laboratory',
      url: 'https://www.bnl.gov/about/history/firstvideo.php',
    }),
    ImageCitation({
      author: 'Brookhaven National Laboratory (BNL)',
      year: 2013,
      title: 'aTennis for Two on a DuMont Lab Oscilloscope Type 304-A',
      source: 'Wikimedia Commons',
      url: 'https://commons.wikimedia.org/wiki/File:Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg#/media/File:Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg',
    }),
    YouTubeCitation({
      accountName: 'Stony Brook University',
      timestamp: { year: 2013, month: 'May', date: 24 },
      title: 'When Games Went Click: The Story of Tennis for Two',
      url: 'https://youtu.be/6QSHZ20MQfE',
    }),
    YouTubeCitation({
      accountName: 'The Dot Eaters',
      timestamp: { year: 2007, month: 'September', date: 10 },
      title: 'Tennis for Two - The Original Video Game',
      url: 'https://youtu.be/6PG2mdU_i8k',
    }),
  ],
  artifacts: [
    {
      label: 'Game Screen (Brookhaven National Laboratory, 2013)',
      media: (
        <Image
          label="Tennis for Two Game Screen"
          source="./assets/1/Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg"
        />
      ),
    },
    {
      label: 'Game Play (The Dot Eaters, 2007)',
      media: <YouTubeEmbed videoUID="6PG2mdU_i8k" />,
    },
    {
      label: 'Controller (Stony Brook University, 2013)',
      media: <Image label="Tennis for Two Controller" source="./assets/1/controller.png" />,
    },
    {
      label: 'When Games Went Click: The Story of Tennis for Two (Stony Brook University, 2013)',
      media: <YouTubeEmbed videoUID="6QSHZ20MQfE" />,
    },
  ],
};

export default TENNIS_FOR_TWO;
