type TableOfContentsProps = {
  items: Array<{ id: string; label: string }>;
};

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav aria-label="Table of contents" className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-bold tracking-tight text-slate-950">
        Table of contents
      </h2>
      <ol className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
