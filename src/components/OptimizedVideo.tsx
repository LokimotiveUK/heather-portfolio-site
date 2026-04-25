const VIDEO_DIMENSIONS: Record<string, [number, number]> = {
  "Demon Beauty": [1920, 1080],
  "DM Turn": [1980, 2200],
  "MB Video1": [1750, 1920],
  "MB Video2": [1750, 1920],
  "Temple Vid": [1920, 1080],
  "Toko Turn": [1920, 1080],
  "war turn": [1080, 1126],
  "WildCat Turn": [2500, 1800],
  "Witch Witch Turn": [3840, 2160],
};

export const OptimizedVideo = ({ slug, title: _title }: { slug: string; title?: string }) => {
  const dims = VIDEO_DIMENSIONS[slug];
  const aspectRatio = dims ? `${dims[0]} / ${dims[1]}` : "16 / 9";
  return (
    <div className="relative w-full bg-surface-container-low overflow-hidden" style={{ aspectRatio }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={`/videos/Posters/${slug}.webp`}
        className="w-full h-full object-contain block"
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
