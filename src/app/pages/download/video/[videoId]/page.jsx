import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { VideoSkeleton } from './Video';

// Use Next.js dynamic import
const LazyVideo = dynamic(() => import('./Video'), {
  suspense: true,
  loading: () => <VideoSkeleton />, // Fallback while loading
});

export default function Page() {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <LazyVideo />
    </Suspense>
  );
}
