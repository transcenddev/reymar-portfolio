"use client";

import { FC, useEffect, useState } from "react";

export type SensorStatus = "OPTIMAL" | "HEALTHY" | "BRACKISH NORMAL" | "WARNING" | "CRITICAL";

type SensorReading = {
  label: string;
  value: string;
  unit: string;
  range: string;
  sensor: string;
  baseline: number;
  jitter: number;
  min: number;
  max: number;
  status: SensorStatus;
};

type Probability = {
  species: string;
  value: number;
  baseline: number;
};

export type TelemetrySnapshot = {
  readings: SensorReading[];
  recommendation: {
    species: string;
    match: number;
    matchBaseline: number;
  };
  probabilities: Probability[];
  isLive: boolean;
};

/**
 * AgwaSuri telemetry hero — a simulated live sensor console.
 *
 * Renders a terminal-style header strip, a 4-column sensor matrix,
 * and an ML inference banner with species recommendation. When the
 * user prefers reduced motion the interval ticker is disabled and
 * static baseline values are shown.
 */
const TelemetryHero: FC<{
  prefersReducedMotion: boolean;
  className?: string;
}> = ({ prefersReducedMotion, className }) => {
  // Initial state seeded with baseline values so the first render is
  // deterministic and matches SEO / SSR output.
  const initial: TelemetrySnapshot = {
    readings: [
      {
        label: "pH",
        value: "7.2",
        unit: "",
        range: "6.5–8.5",
        sensor: "Analog pH-4502C",
        baseline: 7.2,
        jitter: 0.3,
        min: 6.5,
        max: 8.5,
        status: "OPTIMAL",
      },
      {
        label: "DO",
        value: "6.8",
        unit: " mg/L",
        range: ">5.0 threshold",
        sensor: "Galvanic Probe",
        baseline: 6.8,
        jitter: 0.5,
        min: 5.0,
        max: 12.0,
        status: "HEALTHY",
      },
      {
        label: "SALINITY",
        value: "15.3",
        unit: " ppt",
        range: "10–25 ppt",
        sensor: "Analog EC (K=1)",
        baseline: 15.3,
        jitter: 2.0,
        min: 10,
        max: 25,
        status: "BRACKISH NORMAL",
      },
      {
        label: "TEMP",
        value: "28.5",
        unit: " °C",
        range: "26–30 °C",
        sensor: "DS18B20 (1-Wire)",
        baseline: 28.5,
        jitter: 0.8,
        min: 26,
        max: 30,
        status: "OPTIMAL",
      },
    ],
    recommendation: {
      species: "Bangus (Milkfish)",
      match: 94,
      matchBaseline: 94,
    },
    probabilities: [
      { species: "Lapu-lapu", value: 72, baseline: 72 },
      { species: "Tilapia", value: 68, baseline: 68 },
      { species: "Sugpo", value: 45, baseline: 45 },
      { species: "Mud Crab", value: 38, baseline: 38 },
    ],
    isLive: true,
  };

  const [telemetry, setTelemetry] = useState<TelemetrySnapshot>(initial);

  const tickStatus = (reading: SensorReading, value: number): SensorStatus => {
    if (reading.label === "pH") {
      return value >= 6.5 && value <= 8.5 ? "OPTIMAL" : "WARNING";
    }
    if (reading.label === "DO") {
      return value > 5.0 ? "HEALTHY" : "CRITICAL";
    }
    if (reading.label === "SALINITY") {
      if (value < 10) return "WARNING";
      if (value > 25) return "CRITICAL";
      return "BRACKISH NORMAL";
    }
    if (reading.label === "TEMP") {
      return value >= 26 && value <= 30 ? "OPTIMAL" : "WARNING";
    }
    return "OPTIMAL";
  };

  const randJitter = (baseline: number, jitter: number, min: number, max: number) => {
    const v = baseline + (Math.random() * 2 - 1) * jitter;
    return Math.min(Math.max(v, min), max);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        readings: prev.readings.map((r) => {
          const value = randJitter(r.baseline, r.jitter, r.min, r.max);
          return {
            ...r,
            value: value.toFixed(r.label === "pH" || r.label === "DO" || r.label === "SALINITY" || r.label === "TEMP" ? 1 : 0),
            status: tickStatus(r, value),
          };
        }),
        recommendation: {
          ...prev.recommendation,
          match: Math.min(
            99,
            Math.max(
              89,
              prev.recommendation.matchBaseline + Math.floor((Math.random() * 2 - 1) * 4),
            ),
          ),
        },
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const formatReadingValue = (reading: SensorReading) => {
    if (reading.label === "pH") {
      return parseFloat(reading.value).toFixed(1);
    }
    if (reading.label === "DO" || reading.label === "SALINITY" || reading.label === "TEMP") {
      return parseFloat(reading.value).toFixed(1);
    }
    return reading.value;
  };

  const statusColor = (status: SensorStatus) => {
    switch (status) {
      case "OPTIMAL":
      case "HEALTHY":
      case "BRACKISH NORMAL":
        return "text-emerald-400";
      case "WARNING":
        return "text-amber-400";
      case "CRITICAL":
        return "text-red-400";
      default:
        return "text-neutral-400";
    }
  };

  return (
    <section
      className={[
        "rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505]",
        "mt-6 md:mt-8",
        className ?? "",
      ].join(" ")}
      aria-label="Live AgwaSuri sensor telemetry"
    >
      {/* Terminal header strip */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-3 py-2 border-b border-neutral-200 dark:border-neutral-800 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 bg-emerald-500 rounded-none ${!prefersReducedMotion ? "animate-pulse" : ""}`}
            aria-hidden="true"
          />
          NODE: ESP32-WROOM-32 // SAN JUAN I, TERNATE (POND #3)
        </span>
        <span>INTERVAL: 5-MIN CYCLES · SUB-5S BROADCAST</span>
      </div>

      {/* 4-column sensor matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-3 md:p-4">
        {telemetry.readings.map((reading) => (
          <div
            key={reading.label}
            className="bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-none p-3 md:p-4"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
              {reading.label}
            </div>
            <div className="font-display font-bold tabular-nums text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl">
              {formatReadingValue(reading)}
              <span className="font-sans text-sm text-neutral-500 dark:text-neutral-400 ml-0.5">
                {reading.unit}
              </span>
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {reading.range} · {reading.sensor}
            </div>
            <div
              className={`font-mono text-xs uppercase tracking-wider mt-1 ${statusColor(reading.status)}`}
              aria-label={`Status: ${reading.status}`}
            >
              {reading.status}
            </div>
          </div>
        ))}
      </div>

      {/* ML inference / model card banner */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 px-3 py-2 md:px-4 md:py-3">
        <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
          ML INFERENCE // DECISION TREE CLASSIFIER (93.5% BENCHMARK)
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <span className="font-display font-bold tabular-nums text-neutral-900 dark:text-neutral-100 text-xl">
              {telemetry.recommendation.species.split(" (")[0]}
            </span>
            <span className="font-sans text-neutral-600 dark:text-neutral-300">
              {" "}
              ({telemetry.recommendation.species.split("(")[1]?.replace(")", "")})
            </span>
            <span className="font-display font-bold tabular-nums text-neutral-900 dark:text-neutral-100">
              {" "}
              — {telemetry.recommendation.match}% Suitability Match
            </span>
          </div>
          <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            MULTI-CLASS PROBABILITIES:{" "}
            {telemetry.probabilities.map((p) => `${p.species}: ${p.value}%`).join(" | ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemetryHero;
