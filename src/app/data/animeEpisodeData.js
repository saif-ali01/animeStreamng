// data/animeEpisodeData.js
import animeData from './animeData'; // Assuming animeData is in the same directory

const animeEpisodeData = [
  {
    id: 1,
    animeId: 1, // Links to Attack on Titan
    thumbnail: animeData[0].previewImage, // Using AOT preview image
    title: "S1 E1 - To You, in 2000 Years",
    animeTitle: animeData[0].title.toUpperCase(),
    duration: "25m",
    type: "sub/dub",
  },
  {
    id: 2,
    animeId: 1, // Links to Attack on Titan
    thumbnail: animeData[0].previewImage,
    title: "S1 E2 - That Day",
    animeTitle: animeData[0].title.toUpperCase(),
    duration: "24m",
    type: "sub/dub",
  },
  {
    id: 3,
    animeId: 2, // Links to Naruto
    thumbnail: animeData[1].previewImage,
    title: "S1 E1 - Enter: Naruto Uzumaki!",
    animeTitle: animeData[1].title.toUpperCase(),
    duration: "23m",
    type: "sub/dub",
  },
  {
    id: 4,
    animeId: 2, // Links to Naruto
    thumbnail: animeData[1].previewImage,
    title: "S1 E2 - My Name is Konohamaru!",
    animeTitle: animeData[1].title.toUpperCase(),
    duration: "22m",
    type: "sub/dub",
  },
  {
    id: 5,
    animeId: 3, // Links to Demon Slayer
    thumbnail: animeData[2].previewImage,
    title: "S1 E1 - Cruelty",
    animeTitle: animeData[2].title.toUpperCase(),
    duration: "23m",
    type: "sub/dub",
  },
  {
    id: 6,
    animeId: 4, // Links to Jujutsu Kaisen
    thumbnail: animeData[3].previewImage,
    title: "S1 E1 - Ryomen Sukuna",
    animeTitle: animeData[3].title.toUpperCase(),
    duration: "24m",
    type: "sub/dub",
  },
  {
    id: 7,
    animeId: 5, // Links to Death Note
    thumbnail: animeData[4].previewImage,
    title: "S1 E1 - Rebirth",
    animeTitle: animeData[4].title.toUpperCase(),
    duration: "22m",
    type: "sub/dub",
  },
  {
    id: 8,
    animeId: 6, // Links to Bleach
    thumbnail: animeData[5].previewImage,
    title: "S1 E1 - The Day I Became a Shinigami",
    animeTitle: animeData[5].title.toUpperCase(),
    duration: "24m",
    type: "sub/dub",
  },
  {
    id: 9,
    animeId: 7, // Links to Hunter x Hunter
    thumbnail: animeData[6].previewImage,
    title: "S1 E1 - Departure x And x Friends",
    animeTitle: animeData[6].title.toUpperCase(),
    duration: "23m",
    type: "sub/dub",
  },
  {
    id: 10,
    animeId: 8, // Links to Tokyo Revengers
    thumbnail: animeData[7].previewImage,
    title: "S1 E1 - Reborn",
    animeTitle: animeData[7].title.toUpperCase(),
    duration: "24m",
    type: "sub/dub",
  },
  {
    id: 11,
    animeId: 9, // Links to Chainsaw Man
    thumbnail: animeData[8].previewImage,
    title: "S1 E1 - Dog & Chainsaw",
    animeTitle: animeData[8].title.toUpperCase(),
    duration: "25m",
    type: "sub/dub",
  },
  {
    id: 12,
    animeId: 10, // Links to My Hero Academia
    thumbnail: animeData[9].previewImage,
    title: "S1 E1 - Izuku Midoriya: Origin",
    animeTitle: animeData[9].title.toUpperCase(),
    duration: "23m",
    type: "sub/dub",
  },
];

export default animeEpisodeData;