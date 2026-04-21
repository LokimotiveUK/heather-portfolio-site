export const OptimizedVideo = ({ slug, title }: { slug: string; title?: string }) => {
  return (
    <div className="relative w-full aspect-[16/9] bg-surface-container-low overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={`/videos/Posters/${slug}.webp`}
        className="w-full h-full object-cover block"
      >
        {/* H.265 version */}
        <source src={`/videos/${slug}.mp4`} type='video/mp4; codecs="hvc1"' />
        {/* Fallback standard MP4 */}
        <source src={`/videos/${slug}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
