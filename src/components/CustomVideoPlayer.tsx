"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

// VideoFrameCallbackMetadata is not in default TS lib; declare minimal shape
type VideoFrameCallbackMetadata = {
  mediaTime: number;
  presentationTime: number;
};

type CustomVideoPlayerProps = {
  src: string;
  title?: string;
  chapters?: { start: number; title: string }[];
  poster?: string;
  className?: string;
};

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  title = "Video",
  chapters = [],
  poster,
  className = "",
}) => {
  // DEBUG
  console.log("[DEBUG CustomVideoPlayer] props", { src, title, chapters: chapters.length, poster });
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredTime, setHoveredTime] = useState<number | null>(null);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onRateChange = () => setPlaybackRate(video.playbackRate);
    const onVolumeChange = () => setIsMuted(video.muted);
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ratechange", onRateChange);
    video.addEventListener("volumechange", onVolumeChange);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ratechange", onRateChange);
      video.removeEventListener("volumechange", onVolumeChange);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  const getChapterAtTime = useCallback((time: number) => {
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (time >= chapters[i].start) return chapters[i].title;
    }
    return null;
  }, [chapters]);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) video.pause(); else video.play();
  };

  const handleSeek = (e: React.MouseEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const video = videoRef.current;
    if (!video) return;
    switch (e.key) {
      case " ":
      case "k":
        e.preventDefault();
        handleTogglePlay();
        break;
      case "ArrowLeft":
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 10);
        break;
      case "ArrowRight":
        e.preventDefault();
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
        break;
      case "m":
        e.preventDefault();
        video.muted = !video.muted;
        break;
      case "f":
        e.preventDefault();
        toggleFullscreen();
        break;
      case ",":
        e.preventDefault();
        video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
        break;
      case ".":
        e.preventDefault();
        video.playbackRate = Math.min(4, video.playbackRate + 0.25);
        break;
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    if (!document.fullscreenElement) {
      await container.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const time = percent * video.duration;
    setHoveredTime(time);
    setHoveredChapter(getChapterAtTime(time));
  };

  const handleProgressLeave = () => {
    setHoveredTime(null);
    setHoveredChapter(null);
  };

  const handleSpeedChange = (rate: number) => {
    const video = videoRef.current;
    if (video) video.playbackRate = rate;
  };

  const handleCanvasDraw = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const vw = video.videoWidth;
    const vh = video.videoHeight;
    const maxW = 160;
    const maxH = 90;
    const scale = Math.min(maxW / vw, maxH / vh);
    canvas.width = vw * scale;
    canvas.height = vh * scale;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !video.requestVideoFrameCallback) return;

    let callbackId: number;
    const onFrame = (now: number, metadata: VideoFrameCallbackMetadata) => {
      if (hoveredTime !== null && Math.abs(metadata.mediaTime - hoveredTime) < 0.1) {
        handleCanvasDraw();
      }
      callbackId = video.requestVideoFrameCallback!(onFrame);
    };
    callbackId = video.requestVideoFrameCallback(onFrame);
    return () => video.cancelVideoFrameCallback?.(callbackId);
  }, [hoveredTime, handleCanvasDraw]);

  if (prefersReducedMotion) {
    return (
      <div className={`relative aspect-video bg-stone-900 ${className}`}>
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
          aria-label={title}
        />
        {/* Static chapter markers — no hover tooltip, no animation */}
        {chapters.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-stone-800/50">
            <div className="h-full bg-teal-500" style={{ width: "0%" }} />
            {chapters.map((ch, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-teal-500/60"
                style={{ left: duration > 0 ? `${(ch.start / duration) * 100}%` : "0%" }}
                title={ch.title}
                aria-label={`Chapter: ${ch.title} at ${formatTime(ch.start)}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video bg-stone-900 overflow-hidden ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onFocus={() => setShowControls(true)}
      onBlur={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        poster={poster}
        className="w-full h-full object-cover"
        aria-label={title}
        onClick={handleTogglePlay}
        onDoubleClick={toggleFullscreen}
      />

      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />

      {/* Progress bar + chapter markers */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-stone-800/50"
        onMouseMove={handleProgressHover}
        onMouseLeave={handleProgressLeave}
        role="slider"
        aria-label="Playback progress"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            handleSeek(e as unknown as React.MouseEvent<HTMLInputElement>);
          }
        }}
      >
        <div
          className="h-full bg-teal-500 transition-all duration-75 ease-out"
          style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
        />
        {chapters.map((ch, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-teal-500/60 hover:bg-teal-500 transition-colors"
            style={{ left: duration > 0 ? `${(ch.start / duration) * 100}%` : "0%" }}
            title={ch.title}
            aria-label={`Chapter: ${ch.title} at ${formatTime(ch.start)}`}
          />
        ))}
      </div>

      {/* Hover scrub tooltip with frame thumbnail */}
      {hoveredTime !== null && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          style={{ transform: `translateX(-50%) translateX(${(hoveredTime / duration) * 100}%)` }}
        >
          <div className="flex flex-col items-center gap-1.5">
            {canvasRef.current?.width && (
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="w-24 h-auto rounded-none border border-stone-700 bg-stone-900 shadow-lg"
                  width={canvasRef.current.width}
                  height={canvasRef.current.height}
                />
              </div>
            )}
            <div className="bg-stone-950/95 backdrop-blur-sm border border-stone-800 rounded-none px-3 py-1.5 text-stone-100 font-mono text-xs whitespace-nowrap shadow-lg">
              <div className="flex items-center gap-2">
                <span>{formatTime(hoveredTime)} / {formatTime(duration)}</span>
                {hoveredChapter && <span className="text-teal-400">— {hoveredChapter}</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating controls pill */}
      {showControls && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-stone-800 rounded-none shadow-lg z-10 animate-in fade-in-0 duration-150">
          <button
            onClick={handleTogglePlay}
            className="p-1 text-stone-100 hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
            aria-label={isPlaying ? "Pause" : "Play"}
            aria-pressed={isPlaying}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6V4zm12 0h4v16h-4V4z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7-11-7z"/></svg>
            )}
          </button>

          <span className="font-mono text-xs text-stone-400 tabular-nums w-24 text-right">
            {formatTime(currentTime)}
          </span>
          <span className="font-mono text-xs text-stone-600">/</span>
          <span className="font-mono text-xs text-stone-400 tabular-nums w-24">
            {formatTime(duration)}
          </span>

          <div className="flex items-center gap-1 px-2 py-1 bg-stone-900/50 border border-stone-800">
            <span className="font-mono text-xs text-stone-400">Speed</span>
            <select
              value={playbackRate}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              className="bg-transparent border-none text-stone-100 font-mono text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 appearance-none cursor-pointer"
              aria-label="Playback speed"
            >
              {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 4].map((r) => (
                <option key={r} value={r}>{r}×</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => { const v = videoRef.current; if (v) v.muted = !v.muted; }}
            className="p-1 text-stone-100 hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
            aria-label={isMuted ? "Unmute" : "Mute"}
            aria-pressed={isMuted}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            )}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1 text-stone-100 hover:text-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6m-6 6v-6m0 6h6m-6-6V3a2 2 0 012-2h6a2 2 0 012 2v6m-6 6a2 2 0 002 2h6a2 2 0 002-2v-6m0 0V3a2 2 0 012-2h6a2 2 0 012 2v6"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            )}
          </button>
        </div>
      )}

      {/* Keyboard hint */}
      {showControls && (
        <div className="absolute top-3 left-3 flex flex-col gap-1 text-stone-500 font-mono text-[10px] opacity-60 pointer-events-none">
          <span>Space / K — Play/Pause</span>
          <span>← / → — Seek ±10s</span>
          <span>M — Mute</span>
          <span>F — Fullscreen</span>
          <span>, / . — Speed</span>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;