"use client";

import { useEffect, useState } from "react";

function formatTime(value: number) {
  return value.toString().padStart(2, "0");
}

export function CountdownTimer({ target }: { target: string }) {
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date(target).getTime();
    const update = () => {
      const now = Date.now();
      setRemaining(Math.max(targetDate - now, 0));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex items-center gap-4 font-stat text-lg text-accent-lime">
      <span>{formatTime(days)}d</span>
      <span>{formatTime(hours)}h</span>
      <span>{formatTime(minutes)}m</span>
      <span>{formatTime(seconds)}s</span>
    </div>
  );
}
