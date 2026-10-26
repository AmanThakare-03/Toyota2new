import { useState } from "react";

// Renders an image and, if the file is missing or fails to load, collapses into
// a branded panel instead of a broken-image icon. No placeholder content is
// invented — the fallback just explains that the document is available on
// request.
export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackLabel,
  fallbackClassName = "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#F6F9FC] p-6 text-center",
  ...rest
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={fallbackClassName}>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
          Document on request
        </span>

        {fallbackLabel && (
          <span className="text-xs leading-5 text-slate-500">{fallbackLabel}</span>
        )}
      </div>
    );
  }

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
