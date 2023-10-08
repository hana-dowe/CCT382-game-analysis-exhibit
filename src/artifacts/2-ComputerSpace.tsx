import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const COMPUTER_SPACE: CardDetailMap = {
  emoji: '🚀',
  heading: 'Computer Space',
  release: 'November 1971',
  console: {
    platform: 'Arcade',
    createdBy: 'Nolan Bushnell',
  },
  gameDetails:
    'Computer Space is the first arcade video game, as well as the first commercially available video game. You play by controlling a spaceship which can rotate, thrust, and shoot. There are flying saucers on the screen that shoot at your spaceship, which you can shoot back at. The goal is to land more hits on the saucers than they do on you within a given time frame.',
  controllerDetails:
    'Since Computer Space is an arcade game, the controller is integrated below the screen in the machine. It has four main buttons with text labels above each one: fire missile, thrust, rotate (counterclockwise), rotate (clockwise). As well as a start game and coin return button on the side.',
  mainLabel: (
    <>
      <p>
        I believe the most notable thing about the Computer Space control panel is the labels above
        the buttons. Unlike Tennis for Two where it can assume someone will explain the controls to
        you, the machine needs the players to understand the controls on their own at the arcade.
        With the technology available to them, it seems self-explanatory that they would want to
        explain the controls on the panel instead of the screen. They made sure to put the labels
        above the buttons rather than on the buttons themselves so the player’s fingers don’t cover
        them up while playing. So the labels were a great idea, right? But wait there's a catch:
        they indented and added colour to the labels, and even made them bigger than the actual
        buttons you are supposed to press. The first time I saw the control panel, I assumed the
        labels were buttons, and that there were 8 main buttons total. Still, although the delivery
        was not great, Computer Space’s UI definitely beats Tennis for Two.
      </p>
      <p>
        Sadly, one feature actually worsened from Tennis for Two: The intuitiveness of the
        controller. Unlike Tennis for Two where the controls matched up to the actions that
        occurred, here you press a button to rotate which is less intuitive.
      </p>
      <p>
        The game required players to simultaneously use four fingers before video games were
        mainstream. Nolan Bushnell, the creator of the game, says the game was too confusing for
        typical bar-goers (Wardrip-Fruin, 2021). This possibly could have been avoided if the
        machine hadn’t intimidated new players with a control panel that looked like it had 10
        buttons.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Lee, Gaetan',
      year: 2007,
      title: 'Computer Space was innovative, but how was it to play?',
      source: 'Wikimedia Commons',
      url: 'https://commons.wikimedia.org/wiki/File:Computer_Space_Game_on-Science_museum_Crop.jpg',
    }),
    ImageCitation({
      author: 'Fries, Ed',
      title: 'Computer Space Game on-Science museum Crop',
      source: 'The MIT Press Reader',
      url: 'https://thereader.mitpress.mit.edu/wp-content/uploads/2021/10/computer-space-700x420.jpg',
    }),
    YouTubeCitation({
      accountName: 'andys-arcade',
      timestamp: {
        year: 2017,
        month: 'March',
        date: 22,
      },
      title: 'Original Nutting Associates Computer Space (1971) gameplay',
      url: 'https://youtu.be/YR7gmVpw6Io',
    }),
    WebCitation({
      title: 'Before Pong, There Was Computer Space',
      timestamp: { year: 2021, month: 'October', date: 15 },
      author: 'Wardrip-Fruin, Noah',
      source: 'The MIT Press Reader',
      url: 'https://thereader.mitpress.mit.edu/before-pong-there-was-computer-space/',
    }),
    YouTubeCitation({
      accountName: 'Dr. Retro',
      timestamp: {
        year: 2013,
        month: 'December',
        date: 7,
      },
      title: 'Computer Space Arcade Cabinet Gameplay',
      url: 'https://youtu.be/0ph5dcoMeTM',
    }),
  ],
  artifacts: [
    {
      label: 'Game Screen (Fries)',
      media: (
        <Image
          label="Computer Space control panel"
          source="./assets/2/computer-space-700x420.jpg"
        />
      ),
    },
    {
      label: 'Game Play (andys-arcade, 2017)',
      media: <YouTubeEmbed videoUID="YR7gmVpw6Io" />,
    },
    {
      label: 'Control Panel (Lee, 2007)',
      media: <Image label="Computer Space control panel" source="./assets/2/ControlPanel.jpg" />,
    },
    {
      label: 'Example of Control Panel in Use (Dr. Retro, 2013)',
      media: <YouTubeEmbed videoUID="0ph5dcoMeTM?start=24" />,
    },
  ],
};

export default COMPUTER_SPACE;
