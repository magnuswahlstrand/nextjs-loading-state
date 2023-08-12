import { Shuffle } from "@/components/Shuffle";
import { Suspense } from "react";
import { CatSkeleton } from "@/components/CatSkeleton";
import { RandomCatCard } from "@/components/RandomCatCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Suspense
        key={Math.random()}
        fallback={
          <>
            <CatSkeleton />
            <Shuffle ongoing={true} />
          </>
        }
      >
        <RandomCatCard />
        <Shuffle />
      </Suspense>
    </main>
  );
}
