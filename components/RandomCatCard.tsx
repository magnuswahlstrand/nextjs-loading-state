import { CatCard } from "@/components/CatCard";

const cats = [
  {
    name: "Misty",
    description:
      "Misty has soft gray fur that looks like a cloud. She's sneaky and loves to hide, only to jump out and surprise you when you least expect it.",
    score: "1.5",
    url: "https://placekitten.com/600/500",
  },
  {
    name: "Blaze",
    description:
      "Blaze has bright orange stripes that look like they're on fire. He's super fast and loves racing around the house, especially at night.",
    score: "4.5",
    url: "https://placekitten.com/700/400",
  },
  {
    name: "Luna",
    description:
      "Luna's coat shines like the night sky. She's a night owl and loves staring out the window, probably chatting with the moon.",
    score: "3.0",
    url: "https://placekitten.com/350/250",
  },
  {
    name: "Bubbles",
    description:
      "Bubbles has round, curious eyes that remind you of soapy bubbles in a bath. She's playful and often chases after her own tail, going around in circles.",
    score: "4.0",
    url: "https://placekitten.com/700/600",
  },
  {
    name: "Shadow",
    description:
      "Shadow has sleek black fur and moves silently, blending in wherever he goes. He's a master at hide and seek, always finding the coolest hiding spots.",
    score: "2.5",
    url: "https://placekitten.com/600/400",
  },
];

function delay(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number));
}

export async function RandomCatCard() {
  const { name, description, score, url } =
    cats[Math.floor(Math.random() * cats.length)];

  await delay(1000);

  return (
    <CatCard name={name} score={score} description={description} url={url} />
  );
}
