import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import '../../styles.scss';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min';
import 'prismjs/plugins/match-braces/prism-match-braces.min';

type CodeViewerProps = {
  code: string;
  language: string;
};

const CodeViewer: React.FunctionComponent<CodeViewerProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log({ languages: Prism.languages, plugins: Prism.plugins });
    Prism.highlightAll();
  }, []);

  return (
    <div className='Code line-numbers' ref={codeRef}>
      <pre>
        <code className={`language-${language} match-braces`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeViewer;
