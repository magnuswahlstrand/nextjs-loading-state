import { ReactNode } from "react";

const PlaceholderImage = (
  <svg
    className="h-10 w-10 text-gray-600"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
  >
    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
  </svg>
);

export function CatCard(props: {
  score: string | ReactNode;
  name: string | ReactNode;
  description: string | ReactNode;
  url?: string;
}) {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white text-black">
      {props.url ? (
        <img src={props.url} alt="" className="h-96 object-cover" />
      ) : (
        <div className="flex h-96 w-full items-center justify-center rounded bg-gray-300">
          {PlaceholderImage}
        </div>
      )}
      <div className="relative">
        <div className="absolute -top-36 h-36 w-full overflow-hidden">
          <div className="absolute top-16 h-32 w-[120%] -rotate-12 bg-white"></div>
          <div className="relative top-1/2 mx-auto flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-indigo-500 font-mono text-xl font-black text-white">
            {props.score}
          </div>
        </div>
      </div>
      <div className="relative mx-auto -mt-6 max-h-6 text-center font-mono text-2xl font-bold">
        {props.name}
      </div>
      <div className="font-base text-md max-h-8 min-h-[8rem] p-8 pt-4 text-justify text-slate-600">
        {props.description}
      </div>
    </div>
  );
}
