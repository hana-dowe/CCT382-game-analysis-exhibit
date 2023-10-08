import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const PHANTASY_STAR_ONLINE: CardDetailMap = {
  emoji: '⭐',
  heading: 'Phantasy Star Online Episode I & II',
  release: '2003',
  console: {
    platform: 'ASCII Keyboard Controller for GameCube',
    createdBy: 'Nintendo',
  },
  gameDetails: 'First online RPG game for game consoles.',
  controllerDetails:
    'A stretched out game cube controller with a computer keyboard placed in the middle of it',
  mainLabel: (
    <>
      <p>This wonderful invention exists. Why? I do not know.</p>
      <p>
        The Keyboard controller was developed for one single game, which is Phantasy Star Online
        Episode I & II. Nintendo thought it would be helpful to combine a keyboard with the
        controller because the game features text chat. What Nintendo didn’t seem to realize was
        that you can’t quite type and hold the keyboard at the same time.
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'Skyshifter',
      year: 2021,
      source: 'Wikimedia',
      title: 'ASCII_Corporation_keyboard_controller_for_the_GameCube',
      url: 'https://commons.wikimedia.org/wiki/File:ASCII_Corporation_keyboard_controller_for_the_GameCube.png',
    }),
    YouTubeCitation({
      accountName: 'Cross Chop',
      timestamp: { year: 2018, month: 'January', date: 24 },
      title: 'The Wacky GAMECUBE KEYBOARD Controller!',
      url: 'https://youtu.be/F4sSjz1nxWg',
    }),
  ],
  artifacts: [
    {
      label: 'ASCII Keyboard Controller (Skyshifter, 2021)',
      media: (
        <Image
          label="Ascii keyboard for game cube"
          source="./assets/15/ASCII_Corporation_keyboard_controller_for_the_GameCube.png"
        />
      ),
    },
    {
      label: 'The Wacky GAMECUBE KEYBOARD Controller! (Cross Chop, 2018)',
      media: <YouTubeEmbed videoUID="F4sSjz1nxWg" />,
    },
  ],
};

export default PHANTASY_STAR_ONLINE;
