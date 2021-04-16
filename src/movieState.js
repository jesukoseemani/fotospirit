//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Regardless of the situation, regardless of the scoreboard, you’re going to be successful because you’ve put in all the time, all the effort, all the hard work, and you know that it’s going to pay off.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“It’s okay to cry because we’re not going to play together anymore. But we’re going to be friends forever.”",
        },
        {
          title: "Mad Piece.",
          description:
            "“Creating the most valuable image in world History and its all bam.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Regardless of the situation, regardless of the scoreboard, you’re going to be successful because you’ve put in all the time, all the effort, all the hard work, and you know that it’s going to pay off.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“It’s okay to cry because we’re not going to play together anymore. But we’re going to be friends forever.”",
        },
        {
          title: "Mad piece.",
          description:
            "“Creating the most valuable image in world History and its all bam.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Regardless of the situation, regardless of the scoreboard, you’re going to be successful because you’ve put in all the time, all the effort, all the hard work, and you know that it’s going to pay off.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“It’s okay to cry because we’re not going to play together anymore. But we’re going to be friends forever.”",
        },
        {
          title: "Mad piece.",
          description:
            "“Creating the most valuable image in world History and its all bam.”",
        },
      ],
    },
  ];
};
