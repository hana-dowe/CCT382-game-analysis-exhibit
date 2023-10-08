import Image from '../components/Image';
import ImageCitation from '../components/ImageCitation';
import WebCitation from '../components/WebCitation';
import YouTubeCitation from '../components/YouTubeCitation';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { CardDetailMap } from '../types';

const BALL: CardDetailMap = {
  emoji: '🤹',
  heading: 'Ball',
  release: 'April 28, 1980',
  console: {
    platform: 'Game & Watch',
    createdBy: 'Nintendo',
  },
  gameDetails: 'A very simple game where you play as Mr Game & Watch, and juggle balls.',
  controllerDetails:
    'With the controller and screen combined, the whole console is portable. Only two main buttons left and right both with arrows drawn on top as an extra signifier.',
  mainLabel: (
    <>
      <p>
        Game & Watch is one of the first portable consoles. Before portable consoles, games had to
        be played in certain places like the arcade or at your house. When other portable consoles
        released, they tried to let players have the same experience that they would have at home
        anywhere. But unlike those games, Ball was an extremely simple game (McFerran, 2021). This
        worked well with the portability of the console because players don’t have the time to get
        engrossed in a game while they are out.
      </p>
      <p>
        Controls should feel natural so that players don’t need to keep looking down at it to know
        what to press. By having the screen right in between the two main buttons, this was less of
        a concern because players could see the screen and what their hands were doing
        simultaneously.
      </p>
      <p>
        The Game & Watch and its portability was definitely a huge step forward, just not quite sure
        how many people really used the watch feature to tell the time…
      </p>
    </>
  ),
  references: [
    ImageCitation({
      author: 'ThePViana',
      year: 2011,
      title: 'Game & Watch',
      source: 'Wikimedia',
      url: 'https://commons.wikimedia.org/wiki/File:Game_%26_Watch.png',
    }),
    YouTubeCitation({
      accountName: 'William Ng',
      timestamp: {
        year: 2013,
        month: 'April',
        date: 23,
      },
      title: 'Ball (Original) Gameplay - Nintendo Game & Watch',
      url: 'https://youtu.be/3UhZwwTfu8c',
    }),
    WebCitation({
      author: 'Damien McFerran',
      timestamp: {
        year: 2021,
        month: 'January',
        date: 1,
      },
      title: `Feature: How Nintendo's Game & Watch Took "Withered Technology" And Turned It Into A Million-Seller`,
      source: 'NintendoLife',
      url: 'https://www.nintendolife.com/news/2021/01/feature_how_nintendos_game_and_watch_took_withered_technology_and_turned_it_into_a_million-seller',
    }),
  ],
  artifacts: [
    {
      label: 'Console (ThePViana, 2011)',
      media: <Image label="game & watch console" source="./assets/4/Game_&_Watch.png" />,
    },
    {
      label: 'Gameplay (William Ng, 2013)',
      media: <YouTubeEmbed videoUID="3UhZwwTfu8c" />,
    },
  ],
};

export default BALL;
