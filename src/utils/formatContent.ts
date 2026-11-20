/**
 * Utility to format raw database article content into semantic, beautifully styled HTML.
 * Handles:
 * - Preserving existing rich HTML (<p>, <div>, <h2>, etc.)
 * - Unescaping literal escaped characters (\\n, \\r, \\t)
 * - Removing redundant repeated title if it mirrors the article title
 * - Detecting inline numbered lists (e.g. "haya 1. Kupambana... 2. Kuondoa... 3. Au hata...")
 * - Converting consecutive numbered items (1. 2. 3.) into clean <ol> lists
 * - Converting bullet items (- * •) into clean <ul> lists
 * - Formatting markdown headings (#, ##, ###) and bold headers (*Header*)
 * - Formatting inline bold (**text**, *text*) and italic (_text_)
 * - Formatting paragraphs with modern typography and spacing
 */
export function formatArticleContent(raw?: string, articleTitle?: string): string {
  if (!raw || !raw.trim()) {
    return '<p class="text-text-muted italic">Hakuna maudhui yaliyohifadhiwa bado.</p>';
  }

  // If already rich HTML containing semantic blocks (<p>, <div>, <h2>, etc.), return as is
  if (/<(p|div|h[1-6]|ul|ol|blockquote|table)\b/i.test(raw)) {
    return raw;
  }

  let text = raw;

  // Unescape literal \n or \r if stored as escaped string from JSON
  if (text.includes('\\n') && !text.includes('\n')) {
    text = text.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');
  } else {
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }

  text = text.trim();

  // Strip repeated title if the author started the body with the article title
  if (articleTitle && articleTitle.trim()) {
    const cleanTitle = articleTitle.trim();
    // Case 1: text starts directly with the title (with or without markdown/newlines)
    const titleRegex = new RegExp('^([#*\\s]*' + escapeRegExp(cleanTitle) + '[#*\\s]*)([\\n\\r\\s]+|$)', 'i');
    if (titleRegex.test(text)) {
      text = text.replace(titleRegex, '').trim();
    } else {
      // Case 2: first line equals or is contained in title
      const firstLineEnd = text.indexOf('\n');
      const firstLine = (firstLineEnd > -1 ? text.slice(0, firstLineEnd) : text)
        .trim()
        .replace(/^[*#\s]+|[*#\s]+$/g, '');

      if (
        firstLine.length > 5 &&
        (cleanTitle.toLowerCase().includes(firstLine.toLowerCase()) ||
          firstLine.toLowerCase().includes(cleanTitle.toLowerCase()))
      ) {
        text = firstLineEnd > -1 ? text.slice(firstLineEnd).trim() : '';
      }
    }
  }

  if (!text) {
    return '<p class="text-text-muted italic">Hakuna maudhui ya ziada.</p>';
  }

  // Detect and format inline numbered lists like:
  // "...moja kati ya haya 1. Kupambana na maambukizi 2. Kuondoa seli 3. Au hata kuzuia saratani Unaweza..."
  // Break before numbers: " 1. ", " 2. ", " 3. "
  text = text.replace(/([^\n])\s+(\d{1,2}[\.\)])\s+/g, '$1\n\n$2 ');

  // Normalize single linebreaks before list markers into double linebreaks
  text = text.replace(/([^\n])\n(\d{1,2}[\.\)]\s+)/g, '$1\n\n$2');
  text = text.replace(/([^\n])\n([\-\*\•]\s+)/g, '$1\n\n$2');

  const rawBlocks = text.split(/\n\s*\n/);
  const htmlBlocks: string[] = [];

  let pendingNumList: string[] = [];
  let pendingBulletList: string[] = [];

  const flushLists = () => {
    if (pendingNumList.length > 0) {
      const items = pendingNumList
        .map(l => `<li class="pl-2">${formatInline(l.replace(/^\d+[\.\)]\s+/, ''))}</li>`)
        .join('');
      htmlBlocks.push(
        `<ol class="my-6 list-decimal pl-6 sm:pl-8 space-y-2.5 text-text text-base sm:text-lg leading-relaxed marker:font-bold marker:text-dark-green">${items}</ol>`
      );
      pendingNumList = [];
    }
    if (pendingBulletList.length > 0) {
      const items = pendingBulletList
        .map(l => `<li class="pl-2">${formatInline(l.replace(/^[\-\*\•]\s+/, ''))}</li>`)
        .join('');
      htmlBlocks.push(
        `<ul class="my-6 list-disc pl-6 sm:pl-8 space-y-2.5 text-text text-base sm:text-lg leading-relaxed marker:text-accent">${items}</ul>`
      );
      pendingBulletList = [];
    }
  };

  for (let block of rawBlocks) {
    block = block.trim();
    if (!block) continue;

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);

    // Numbered list item(s)
    if (lines.length > 0 && lines.every(l => /^\d+[\.\)]\s+/.test(l))) {
      pendingNumList.push(...lines);
      continue;
    } else if (pendingNumList.length > 0) {
      flushLists();
    }

    // Bullet list item(s)
    if (lines.length > 0 && lines.every(l => /^[\-\*\•]\s+/.test(l))) {
      pendingBulletList.push(...lines);
      continue;
    } else if (pendingBulletList.length > 0) {
      flushLists();
    }

    // Markdown Headers: #, ##, ###
    if (/^#\s+/.test(block)) {
      htmlBlocks.push(
        `<h2 class="mt-8 mb-4 text-2xl sm:text-3xl font-extrabold text-dark-green tracking-tight">${formatInline(block.replace(/^#\s+/, ''))}</h2>`
      );
      continue;
    }
    if (/^##\s+/.test(block)) {
      htmlBlocks.push(
        `<h3 class="mt-7 mb-3 text-xl sm:text-2xl font-bold text-dark-green tracking-tight">${formatInline(block.replace(/^##\s+/, ''))}</h3>`
      );
      continue;
    }
    if (/^###\s+/.test(block)) {
      htmlBlocks.push(
        `<h4 class="mt-6 mb-2 text-lg sm:text-xl font-bold text-dark-green">${formatInline(block.replace(/^###\s+/, ''))}</h4>`
      );
      continue;
    }

    // Blockquote
    if (/^[>”]\s*/.test(block)) {
      htmlBlocks.push(
        `<blockquote class="my-6 border-l-4 border-accent bg-primary-soft/40 p-4 sm:p-5 rounded-r-2xl italic text-dark-green font-medium text-base sm:text-lg">${formatInline(block.replace(/^[>”]\s*/, ''))}</blockquote>`
      );
      continue;
    }

    // Standalone Question as section subhead (e.g., "Jinsi Inavyotokea?")
    if (block.endsWith('?') && block.length < 90 && !block.includes('\n')) {
      htmlBlocks.push(
        `<h3 class="mt-7 mb-3 text-xl sm:text-2xl font-bold text-dark-green tracking-tight">${formatInline(block)}</h3>`
      );
      continue;
    }

    // Standalone bold header
    if (/^(\*\*|\*)([^\*\n]+)(\*\*|\*)$/.test(block)) {
      const cleanHdr = block.replace(/^(\*\*|\*)/, '').replace(/(\*\*|\*)$/, '').trim();
      htmlBlocks.push(
        `<h3 class="mt-7 mb-3 text-xl sm:text-2xl font-bold text-dark-green tracking-tight">${formatInline(cleanHdr)}</h3>`
      );
      continue;
    }

    // If block is a single long continuous run of prose (> 250 chars) without newlines,
    // break into readable paragraphs around major punctuation followed by capitalized sentences.
    if (!block.includes('\n') && block.length > 250) {
      // Split on sentence boundaries: period/question mark followed by space and a capital letter
      const sentences = block.split(/(?<=[.?!])\s+(?=[A-Z])/);
      if (sentences.length >= 3) {
        // Group sentences into paragraphs of 2-3 sentences each
        const grouped: string[] = [];
        let currentGroup: string[] = [];
        for (const s of sentences) {
          currentGroup.push(s);
          if (currentGroup.join(' ').length >= 180 || currentGroup.length >= 3) {
            grouped.push(currentGroup.join(' '));
            currentGroup = [];
          }
        }
        if (currentGroup.length > 0) {
          grouped.push(currentGroup.join(' '));
        }

        for (const p of grouped) {
          htmlBlocks.push(
            `<p class="mb-5 text-base sm:text-lg leading-relaxed text-text font-normal">${formatInline(p)}</p>`
          );
        }
        continue;
      }
    }

    // Standard Paragraph
    const formattedParagraph = lines.map(line => formatInline(line)).join('<br />');
    htmlBlocks.push(
      `<p class="mb-5 text-base sm:text-lg leading-relaxed text-text font-normal">${formattedParagraph}</p>`
    );
  }

  // Flush any remaining list
  flushLists();

  return htmlBlocks.join('\n');
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatInline(str: string): string {
  return str
    // Bold **word** or *word*
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-dark-green">$1</strong>')
    .replace(/(?<!\*)\*([^\*\n]+?)\*(?!\*)/g, '<strong class="font-bold text-dark-green">$1</strong>')
    // Italic _word_
    .replace(/_([^_]+?)_/g, '<em class="italic">$1</em>');
}
