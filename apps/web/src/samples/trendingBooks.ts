const trendingBooks: {
  position: number;
  title: string;
  rating: number;
  type: string;
  genre: string;
  image: string;
  description: string;
  status: string;
  published: string;
}[] = [
  {
    position: 1,
    title: "Solo Leveling",
    rating: 9.1,
    type: "Web Novel",
    genre: "Action, Fantasy",
    image: "/images/solo-leveling.webp",
    description:
      "A weak hunter, Sung Jin-Woo, gains the ability to level up infinitely after surviving a deadly dungeon. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2016-03-25",
  },
  {
    position: 2,
    title: "Omniscient Reader's Viewpoint",
    rating: 9.3,
    type: "Web Novel",
    genre: "Fantasy, Adventure",
    image: "/images/2.webp",
    description:
      "Kim Dokja finds himself inside his favorite web novel, forced to survive as the world follows the story’s events. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2018-01-30",
  },
  {
    position: 3,
    title: "The Beginning After The End",
    rating: 8.9,
    type: "Web Novel",
    genre: "Fantasy, Action",
    image: "/images/3.webp",
    description:
      "King Grey is reborn into a magical world, seeking a second chance to live a meaningful life. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2017-01-18",
  },
  {
    position: 4,
    title: "Reverend Insanity",
    rating: 9.0,
    type: "Web Novel",
    genre: "Dark Fantasy, Xianxia",
    image: "/images/4.webp",
    description:
      "Fang Yuan, a ruthless and cunning Gu Master, strives for eternal life in a cruel and lawless world. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Hiatus",
    published: "2012-06-20",
  },
  {
    position: 5,
    title: "Lord of the Mysteries",
    rating: 9.4,
    type: "Web Novel",
    genre: "Mystery, Fantasy",
    image: "/images/5.webp",
    description:
      "A man reincarnates into a steampunk world of occult powers and seeks to uncover its hidden truths. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2018-04-15",
  },
  {
    position: 6,
    title: "Warlock of the Magus World",
    rating: 8.7,
    type: "Web Novel",
    genre: "Dark Fantasy, Magic",
    image: "/images/6.webp",
    description:
      "Leylin, a scientist, is reincarnated into a ruthless world of magic, seeking absolute power. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2015-05-10",
  },
  {
    position: 7,
    title: "Trash of the Count’s Family",
    rating: 8.8,
    type: "Web Novel",
    genre: "Fantasy, Adventure",
    image: "/images/7.webp",
    description:
      "A man wakes up in a novel as the weakest noble, striving to survive and change his fate. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2018-06-14",
  },
  {
    position: 8,
    title: "Mother of Learning",
    rating: 9.2,
    type: "Web Novel",
    genre: "Time Loop, Magic",
    image: "/images/8.webp",
    description:
      "A young mage finds himself trapped in a time loop, striving to master magic and uncover secrets. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2011-10-05",
  },
  {
    position: 9,
    title: "The Legendary Mechanic",
    rating: 8.9,
    type: "Web Novel",
    genre: "Sci-Fi, System",
    image: "/images/9.webp",
    description:
      "A game tester is transported into the game world as an NPC and must adapt to survive. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2017-12-12",
  },
  {
    position: 10,
    title: "Super Gene",
    rating: 8.5,
    type: "Web Novel",
    genre: "Sci-Fi, Action",
    image: "/images/10.webp",
    description:
      "A young man enters a mysterious sanctuary where genes determine strength and evolution. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2016-04-20",
  },
  {
    position: 11,
    title: "Overgeared",
    rating: 8.6,
    type: "Web Novel",
    genre: "VRMMO, Adventure",
    image: "/images/11.webp",
    description:
      "A struggling gamer stumbles upon an overpowered class in a VR game, changing his fate. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2017-01-10",
  },
  {
    position: 12,
    title: "The Second Coming of Gluttony",
    rating: 8.8,
    type: "Web Novel",
    genre: "Fantasy, Reincarnation",
    image: "/images/12.webp",
    description:
      "A man with wasted potential gets a second chance at life in a mysterious otherworldly trial. lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2018-02-22",
  },
  {
    position: 13,
    title: "The Great Mage Returns After 4000 Years",
    rating: 8.7,
    type: "Web Novel",
    genre: "Fantasy, Reincarnation",
    image: "/images/13.webp",
    description:
      "The soul of a powerful mage awakens in the body of a weak noble, seeking revenge. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2019-03-17",
  },
  {
    position: 14,
    title: "Kill the Hero",
    rating: 8.4,
    type: "Web Novel",
    genre: "Revenge, Game System",
    image: "/images/14.webp",
    description:
      "A man betrayed by the world's greatest hero gets a second chance to take revenge. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Completed",
    published: "2019-06-09",
  },
  {
    position: 15,
    title: "Supremacy Games",
    rating: 8.7,
    type: "Web Novel",
    genre: "Sci-Fi, System",
    image: "/images/15.webp",
    description:
      "A man reincarnates into a  futuristic world of deadly intergalactic games. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Ongoing",
    published: "2020-05-03",
  },
];
export default trendingBooks;
