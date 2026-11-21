"use client";

import { useState, useRef } from "react";
import { Download, Maximize2, Minimize2, ExternalLink, FileText, Check, AlertCircle, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function ResumeViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 150));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 75));
  const handleZoomReset = () => setZoomLevel(100);

  return (
    <div
      ref={containerRef}
      className={`relative rounded-3xl bg-background-card/90 border border-white/10 p-4 sm:p-8 shadow-card-subtle transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-[1000] rounded-none p-6 bg-[#09090b] flex flex-col justify-between" : ""
      }`}
    >
      {/* Top Controls Toolbar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-champagne-400/10 border border-champagne-400/20 text-champagne-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-ivory">
              Curriculum Vitae
            </h3>
            <p className="text-xs text-ivory-subtle font-mono mt-0.5">
              Verified PDF Document • {PERSONAL_INFO.name}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Zoom controls (desktop only) */}
          <div className="hidden sm:flex items-center gap-1 bg-white/[0.02] border border-white/10 rounded-full px-2 py-1">
            <button
              onClick={handleZoomOut}
              className="p-1 rounded-full text-ivory-muted hover:text-ivory transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-champagne-300 px-1">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1 rounded-full text-ivory-muted hover:text-ivory transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleZoomReset}
              className="p-1 rounded-full text-ivory-muted hover:text-ivory transition-colors ml-1"
              title="Reset zoom"
              aria-label="Reset zoom"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Download Button */}
          <a
            href={PERSONAL_INFO.resumePath}
            download="Shailendra_Patidar_Resume.pdf"
            onClick={handleDownload}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-colors shadow-gold-glow"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </>
            )}
          </a>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center justify-center p-2.5 rounded-full border border-white/10 hover:border-champagne-400/50 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
            aria-label={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
            title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* New Tab Fallback */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-full border border-white/10 hover:border-champagne-400/50 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
            aria-label="Open PDF in new tab"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Embedded Document Frame */}
      <div
        className={`relative w-full rounded-2xl overflow-hidden bg-[#111218] border border-white/5 transition-all duration-300 ${
          isFullscreen ? "flex-1 h-[calc(100vh-140px)]" : "h-[650px] sm:h-[820px]"
        }`}
      >
        <iframe
          src={`${PERSONAL_INFO.resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
          title={`${PERSONAL_INFO.name} Resume Document Viewer`}
          className="w-full h-full border-0"
          style={{
            transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : "none",
            transformOrigin: "top center",
          }}
        />

        {/* Mobile / Fallback Helper Notice */}
        <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-background-dark/95 backdrop-blur-md border border-white/10 text-center">
          <p className="text-[11px] text-ivory-muted mb-2 font-mono">
            Mobile PDF view optimization
          </p>
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-champagne-300 uppercase tracking-wider"
          >
            <span>Open Fullscreen in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Footer Info & Verification Tag */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-subtle gap-2">
        <span className="flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-champagne-400/60" />
          <span>Verified document rendered directly from source: /resume.pdf</span>
        </span>
        <span className="font-mono text-[10px] text-champagne-400/80">
          SHAILENDRA PATIDAR // B.TECH CS
        </span>
      </div>
    </div>
  );
}
