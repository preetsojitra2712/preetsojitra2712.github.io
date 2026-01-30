"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Card } from "@/components/Card";

export function ProfilePortrait() {
  const [hasError, setHasError] = useState(false);

  return (
    <Card className="relative overflow-hidden">
      {!hasError ? (
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          width={520}
          height={680}
          className="h-96 w-full rounded-2xl object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 520px"
          priority
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-emerald-400/10 text-3xl font-semibold text-white/80">
          PS
        </div>
      )}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Early career engineer
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-white/60">{profile.location}</p>
        </div>
    </Card>
  );
}
