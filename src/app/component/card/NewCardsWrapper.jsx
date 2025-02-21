import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import NewCardsSkeleton from "./NewCardsSkeleton";

// Lazy load NewCards and show Skeleton while loading
const LazyNewCards = dynamic(() => import("./NewCards"), {
  ssr: false,
  loading: () => <NewCardsSkeleton />, // Show skeleton while component loads
});

const NewCardsWrapper = () => {
  return (
    <Suspense fallback={<NewCardsSkeleton />}>
      <LazyNewCards />
    </Suspense>
  );
};

export default NewCardsWrapper;
