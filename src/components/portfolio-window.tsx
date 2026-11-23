"use client";

import { Copy, Square, X } from "lucide-react";
import { motion, useDragControls, useMotionValue, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useContext, useId, useState, type ReactNode } from "react";
import { ScreenBounds } from "./desktop";

type PortfolioWindowProps = {
  title: string;
  parent?: { href: string; label: string };
  status: string;
  children: ReactNode;
};

export function PortfolioWindow({ title, parent, status, children }: PortfolioWindowProps) {
  const bounds = useContext(ScreenBounds);
  const titleId = useId();
  const drag = useDragControls();
  const reduceMotion = useReducedMotion();
  const [maximized, setMaximized] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.section
      className="portfolio-window"
      aria-labelledby={titleId}
      data-maximized={maximized}
      initial={reduceMotion ? false : { opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.18 }}
      drag={!maximized}
      dragListener={false}
      dragControls={drag}
      dragConstraints={bounds ?? undefined}
      dragElastic={0}
      dragMomentum={false}
      style={{ x, y }}
    >
      <header
        className="window-titlebar"
        onPointerDown={(event) => {
          if (
            !maximized &&
            event.pointerType === "mouse" &&
            event.button === 0 &&
            event.target instanceof Element &&
            !event.target.closest("button, a")
          ) {
            drag.start(event);
          }
        }}
      >
        <h1 id={titleId} tabIndex={-1} data-window-title>{title}</h1>
        <div className="window-controls">
          <button
            className="maximize-control"
            type="button"
            aria-label={maximized ? "Restore window" : "Maximize window"}
            title={maximized ? "Restore window" : "Maximize window"}
            onClick={() => {
              x.set(0);
              y.set(0);
              setMaximized(!maximized);
            }}
          >
            {maximized ? <Copy aria-hidden="true" /> : <Square aria-hidden="true" />}
          </button>
          <Link href="/" aria-label="Close window" title="Close window"><X aria-hidden="true" /></Link>
        </div>
      </header>
      <nav className="window-path" aria-label="Breadcrumb">
        <Link href="/">Desktop</Link><span aria-hidden="true">/</span>
        {parent && <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></>}
        <span aria-current="page">{title}</span>
      </nav>
      <div className="window-content" tabIndex={0} aria-label={`${title} content`}>{children}</div>
      <footer className="window-status"><span>{status}</span><span>{title}</span></footer>
    </motion.section>
  );
}
