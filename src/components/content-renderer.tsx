"use client";

import Image from "next/image";
import { type ReactElement } from "react";
import { getImagePath } from "@/utils/get-image-path";
import { AnimateIn } from "@/hooks/use-scroll-reveal";
import type { ContentBlock } from "@/data/projects";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseInlineMarkdown(text: string): ReactElement {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </span>
  );
}

function classifyBlock(
  text: string
): {
  type: "heading" | "text" | "bullet" | "numbered" | "image" | "empty";
  content: string;
} {
  const trimmed = text.trim();
  if (!trimmed) return { type: "empty", content: "" };
  if (/^\*\*.+\*\*$/.test(trimmed)) {
    return {
      type: "heading",
      content: trimmed.replace(/^\*\*|\*\*$/g, ""),
    };
  }
  if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
    return { type: "bullet", content: trimmed.replace(/^[•\-]\s*/, "") };
  }
  if (/^\d+\.\s/.test(trimmed)) {
    return { type: "numbered", content: trimmed.replace(/^\d+\.\s/, "") };
  }
  return { type: "text", content: trimmed };
}

// ─── Content Renderer ─────────────────────────────────────────────────────────

export function ContentRenderer({
  content,
  onImageClick,
}: {
  content?: ContentBlock[];
  onImageClick: (src: string) => void;
}) {
  const blocks = content || [];
  const elements: ReactElement[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === "image") {
      const imageGroup: typeof block[] = [block];
      let j = i + 1;
      while (j < blocks.length && blocks[j].type === "image") {
        imageGroup.push(blocks[j]);
        j++;
      }

      if (imageGroup.length === 1) {
        elements.push(
          <AnimateIn key={i}>
            <figure
              className="my-10 md:my-12 cursor-zoom-in group"
              onClick={() => onImageClick(block.content)}
            >
              <div className="relative aspect-video bg-[var(--muted)] rounded-xl overflow-hidden shadow-lg ring-1 ring-[var(--border)] image-skeleton">
                <Image
                  src={getImagePath(block.content)}
                  alt={block.caption || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {block.caption && (
                <figcaption className="text-sm text-[var(--muted-foreground)] mt-3 text-center font-medium">
                  {parseInlineMarkdown(block.caption)}
                </figcaption>
              )}
            </figure>
          </AnimateIn>
        );
      } else {
        const gridCols = imageGroup.length <= 3 ? imageGroup.length : 3;
        elements.push(
          <AnimateIn key={i}>
            <div
              className="grid gap-3 my-10"
              style={{
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              }}
            >
              {imageGroup.map((imgBlock, idx) => (
                <figure
                  key={`${i}-${idx}`}
                  className="cursor-zoom-in group relative overflow-hidden rounded-xl bg-[var(--muted)]"
                  onClick={() => onImageClick(imgBlock.content)}
                >
                  <div className="relative aspect-video overflow-hidden image-skeleton">
                    <Image
                      src={getImagePath(imgBlock.content)}
                      alt={imgBlock.caption || ""}
                      fill
                      sizes={`(max-width: 768px) 100vw, ${768 / gridCols}px`}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {imgBlock.caption && (
                    <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span className="text-white text-xs">
                        {imgBlock.caption}
                      </span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </AnimateIn>
        );
      }

      i = j - 1;
      continue;
    }

    const { type, content: cleanText } = classifyBlock(block.content);
    if (type === "empty") continue;

    const contentEl = parseInlineMarkdown(cleanText);

    let el: ReactElement;
    switch (type) {
      case "heading":
        el = (
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-2 mb-1">
            {contentEl}
          </h3>
        );
        break;
      case "bullet":
        el = (
          <li className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
            {contentEl}
          </li>
        );
        break;
      case "numbered":
        el = (
          <li className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed">
            <span className="mt-2 text-[var(--primary)] font-bold flex-shrink-0">
              →
            </span>
            {contentEl}
          </li>
        );
        break;
      default:
        el = (
          <p className="text-[var(--muted-foreground)] leading-[1.75] text-[1.05rem]">
            {contentEl}
          </p>
        );
    }

    elements.push(<AnimateIn key={i}>{el}</AnimateIn>);
  }

  return <div className="space-y-5">{elements}</div>;
}
