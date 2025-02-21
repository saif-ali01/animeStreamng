import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import NewCardSkeleton from "./NewCardSkeleton";

// Lazy load NewCard and show Skeleton while loading
const LazyNewCard = dynamic(() => import("./NewCard"), {
  ssr: false,
  loading: () => <NewCardSkeleton />, // Show skeleton while component loads
});

const NewCardWrapper = ({ data }) => {
  return (
    <Suspense fallback={<NewCardSkeleton />}>
      <LazyNewCard data={data} />
    </Suspense>
  );
};

export default NewCardWrapper;
