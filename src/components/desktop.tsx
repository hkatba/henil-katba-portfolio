"use client";

import { Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { sections, type SectionId } from "@/data/portfolio";

export const ScreenBounds = createContext<RefObject<HTMLDivElement | null> | null>(null);

const shortcutIcons: Record<SectionId, { outline: string; details: string }> = {
  work: {
    outline: "M1.5 16.5v-11h2v-2h5v2h9v2h1v9z",
    details: "M1.5 7.5h17",
  },
  about: {
    outline: "M4.5 1.5h8v2h2v2h2v13h-12z",
    details: "M12.5 1.5v5h4m-9 3h6m-6 3h6m-6 3h6",
  },
  skills: {
    outline: "M1.5 6.5h17v11h-17zM7.5 6.5v-3h5v3",
    details: "M1.5 11.5h17m-10-1h3v3h-3z",
  },
  experience: {
    outline: "M3.5 2.5h14v15h-14z",
    details: "M6.5 2.5v15m-5-12h3m-3 4h3m-3 4h3m5-7h5m-5 3h5m-5 3h3",
  },
  contact: {
    outline: "M1.5 4.5h17v11h-17z",
    details: "M2.5 6.5h2v2h2v2h2v2h3v-2h2v-2h2v-2h2",
  },
  education: {
    outline: "M2.5 3.5h6v1h3v-1h6v12h-6v1h-3v-1h-6z",
    details: "M10 5v10m-5-8h2m-2 3h2m6-3h2m-2 3h2",
  },
};

function ShortcutIcon({ section }: { section: SectionId }) {
  const { outline, details } = shortcutIcons[section];
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" shapeRendering="crispEdges">
      <path d={outline} fill="currentColor" fillOpacity=".12" stroke="currentColor" />
      <path d={details} fill="none" stroke="currentColor" />
    </svg>
  );
}

function playClick(contextRef: RefObject<AudioContext | null>) {
  if (!window.AudioContext) return;

  const context = (contextRef.current ??= new AudioContext());
  if (context.state === "suspended") void context.resume().catch(() => {});

  const start = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(420, start);
  oscillator.frequency.exponentialRampToValueAtTime(230, start + 0.06);
  gain.gain.setValueAtTime(0.035, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + 0.07);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + 0.075);
}

function Clock() {
  const [time, setTime] = useState("–:–");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
    const update = () => setTime(formatter.format(new Date()));
    const initial = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 5_000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, []);

  return <time className="taskbar-clock" aria-label="Local time">{time}</time>;
}

type DesktopProps = {
  children: ReactNode;
  name: string;
  summary: string;
  links: { github: string; linkedin: string };
};

export function Desktop({ children, name, summary, links }: DesktopProps) {
  const pathname = usePathname();
  const router = useRouter();
  const section = pathname.split("/")[1] as SectionId | undefined;
  const active = sections.find(({ id }) => id === section);
  const home = pathname === "/";
  const [sound, setSound] = useState(false);
  const bounds = useRef<HTMLDivElement>(null);
  const lastPath = useRef(pathname);
  const audioContext = useRef<AudioContext>(null);
  const audioFeedback = () => {
    if (sound) playClick(audioContext);
  };

  useEffect(() => {
    if (lastPath.current === pathname) return;
    const previousSection = sections.find(({ id }) => id === lastPath.current.split("/")[1]);
    lastPath.current = pathname;
    const target = home
      ? bounds.current?.querySelector<HTMLElement>(`[data-shortcut="${previousSection?.id ?? "work"}"]`)
      : bounds.current?.querySelector<HTMLElement>("[data-window-title]");
    target?.focus({ preventScroll: true });
  }, [home, pathname]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
      if (event.key === "Escape" && !home) router.push("/");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [home, router]);

  function shortcuts(compact: boolean) {
    return sections.map(({ id, title }) => {
      return (
        <Link
          key={id}
          className={compact ? "task-shortcut" : "desktop-shortcut"}
          href={`/${id}`}
          aria-current={active?.id === id ? (pathname === `/${id}` ? "page" : "location") : undefined}
          aria-label={compact ? title : undefined}
          title={compact ? title : undefined}
          data-shortcut={compact ? undefined : id}
          onClick={audioFeedback}
        >
          <ShortcutIcon section={id} />
          {!compact && <span>{title}</span>}
        </Link>
      );
    });
  }

  return (
    <main className="screen">
      <div className="workspace" ref={bounds} data-home={home}>
        <div className="desktop">
          <nav className="desktop-shortcuts" aria-label="Desktop">{shortcuts(false)}</nav>
          <header className="desktop-hero">
            <p className="hero-summary">{summary}<span className="caret" aria-hidden="true" /></p>
            {home ? <h1 className="hero-name">{name}</h1> : <p className="hero-name">{name}</p>}
          </header>
          {home && (
            <div className="desktop-actions">
              <div className="hero-actions">
                <Link href="/work" onClick={audioFeedback}>View work</Link>
                <Link href="/contact" onClick={audioFeedback}>Contact me</Link>
              </div>
              <div className="hero-socials">
                <a href={links.github}>GitHub</a>
                <a href={links.linkedin}>LinkedIn</a>
              </div>
            </div>
          )}
        </div>
        <ScreenBounds.Provider value={bounds}>{children}</ScreenBounds.Provider>
      </div>
      <footer className="taskbar">
        <nav className="task-shortcuts" aria-label="Taskbar">{shortcuts(true)}</nav>
        <div className="task-status">
          {active ? (
            <Link href={`/${active.id}`} onClick={audioFeedback}>{active.title}</Link>
          ) : <span>.NET APIs · Enterprise search</span>}
        </div>
        <div className="task-controls">
          <button
            className="task-shortcut"
            type="button"
            aria-label="Sound"
            aria-pressed={sound}
            title={sound ? "Mute sound" : "Enable sound"}
            onClick={() => {
              if (!sound) playClick(audioContext);
              setSound(!sound);
            }}
          >
            {sound ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
          </button>
          <Clock />
        </div>
      </footer>
    </main>
  );
}
