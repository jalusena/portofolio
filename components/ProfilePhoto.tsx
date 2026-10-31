"use client";

import { useState } from "react";

export default function ProfilePhoto({ alt }: { alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-8 border-white bg-gradient-to-br from-sky to-[#b9dcf2] shadow-xl shadow-brand/15">
      {failed ? (
        <div className="flex h-full items-center justify-center text-7xl font-bold text-brand/60">
          JS
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="images\foto.jpg"
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
