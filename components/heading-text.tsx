function isAbbreviationPeriod(text: string) {
  return /(?:^|\s)(?:[A-Z]\.)+$/.test(text) ||
    /(?:^|\s)(?:Mr|Mrs|Ms|Dr|Prof|St|Jr|Sr|vs|etc|Inc|Ltd|Co|U\.S|U\.K|e\.g|i\.e|Ph\.D)\.$/i.test(text);
}

function splitSentences(text: string) {
  const sentences: string[] = [];
  let sentenceStart = 0;

  for (let index = 0; index < text.length; index += 1) {
    if (!'.!?'.includes(text[index]) || !/\s/.test(text[index + 1] ?? '')) {
      continue;
    }

    const precedingText = text.slice(sentenceStart, index + 1);
    if (text[index] === '.' && isAbbreviationPeriod(precedingText)) {
      continue;
    }

    const nextCharacterIndex = text.slice(index + 1).search(/\S/);
    if (nextCharacterIndex < 0) {
      continue;
    }

    const nextCharacter = text[index + 1 + nextCharacterIndex];
    if (!/[A-Z“"'(]/.test(nextCharacter)) {
      continue;
    }

    sentences.push(text.slice(sentenceStart, index + 1).trim());
    sentenceStart = index + 1 + nextCharacterIndex;
    index = sentenceStart - 1;
  }

  const finalSentence = text.slice(sentenceStart).trim();
  if (finalSentence.endsWith('.') && !isAbbreviationPeriod(finalSentence)) {
    sentences.push(finalSentence.slice(0, -1));
  } else if (finalSentence) {
    sentences.push(finalSentence);
  }

  return sentences;
}

export function HeadingText({text}: {text: string}) {
  return splitSentences(text).map((sentence, index) => (
    <span className="heading-sentence" key={`${index}-${sentence}`}>
      {sentence}
    </span>
  ));
}