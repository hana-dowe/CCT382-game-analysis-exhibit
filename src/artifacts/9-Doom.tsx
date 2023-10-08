import Image from '../components/Image';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const DOOM: CardDetailMap = {
  emoji: '🧟',
  heading: 'Doom',
  release: '1993',
  console: {
    platform: 'PC',
    createdBy: 'John Carmack, John Romero, Adrian Carmack, Kevin Cloud, Tom Hall',
  },
  gameDetails:
    'Doom is a first-person shooter with a 3D map. You must shoot demons or undead humans in order to survive.',
  controllerDetails: 'Your everyday keyboard and mouse turns into a video game controller.',
  mainLabel: (
    <p>
      Doom was one of the first 3D action games and became widely popular. With the introduction of
      3D games, camera movement suddenly became very important. What we know as the standard for PC
      gaming uses the mouse to control the camera and WASD to control player movement, but this was
      not always the case. The manual for Doom uses the left and right arrows to look around. Using
      your mouse to move the camera is mentioned as a tip for players who are comfortable with the
      game (id Software, 1933). The camera only supports left or right movement and cannot look up
      or down. Players back then were used to pressing buttons for their controls, so the game
      manual stuck to the arrow keys as the default at this point.
    </p>
  ),
  references: [
    YouTubeCitation({
      accountName: 'Stormspirit 86',
      timestamp: { year: 2010, month: 'August', date: 13 },
      title: 'Doom 1 {1993)',
      url: 'https://youtu.be/jP2jI0BVG0w',
    }),
    WebCitation({
      author: 'id Software',
      timestamp: { year: 1993 },
      title: 'Doom Manual',
      source: 'starehry',
      url: 'https://www.starehry.eu/download/action3d/docs/Doom-Manual.pdf',
    }),
  ],
  artifacts: [
    { label: 'Gameplay (Stormspirit 86, 2010)', media: <YouTubeEmbed videoUID="jP2jI0BVG0w" /> },
    {
      label: 'Movement Manual (id Software, 1993)',
      media: <Image label="Doom Movement Manual" source="./assets/9/manual.png" />,
    },
  ],
};

export default DOOM;
