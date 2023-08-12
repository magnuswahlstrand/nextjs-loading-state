import { CatCard } from "@/components/CatCard";

export async function CatSkeleton() {
  const skeletonName = (
    <div className="mx-auto mb-4 h-7 w-32 animate-pulse rounded-full bg-gray-300"></div>
  );

  const description = (
    <div className="max-w-sm animate-pulse">
      <div className="mb-2 h-4 w-full rounded-full bg-gray-300"></div>
      <div className="mb-2 h-4 w-full rounded-full bg-gray-300"></div>
      <div className="mb-2 h-4 w-full rounded-full bg-gray-300"></div>
      <div className="mb-2 h-4 w-32 rounded-full bg-gray-300"></div>
    </div>
  );
  return <CatCard name={skeletonName} description={description} score="" />;
}
