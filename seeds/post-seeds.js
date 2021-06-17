const { Post } = require('../models');

const postdata = [
  {
    title: 'One-Punch Man',
    post_url: 'is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent.',
    user_id: 10
  },
  {
    title: 'Saitama',
    post_url: 'Saitama (サイタマ, Saitama) is the main protagonist of the series and the titular One-Punch Man. He is the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle.',
    user_id: 8
  },
  {
    title: 'Genos.',
    post_url: 'Genos is the deuteragonist of One-Punch Man. He is a 19-year-old cyborg and the disciple of Saitama. Under the Hero Association, he is given the name Demon Cyborg and is currently S-Class Rank 14.',
    user_id: 1
  },
  {
    title: 'Garou',
    post_url: 'Garou (ガロウ, Garō; Viz: Garo) is a villain, a martial arts prodigy, the self-proclaimed "Hero Hunter," and a major adversary of the Hero Association and Monster Association.',
    user_id: 4
  },
  {
    title: 'Mysterious Beings (怪人, Kaijin)',
    post_url: 'According to Dr. Genus, Humans can naturally become monsters from a desire to transform into something else through their bad habits.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
