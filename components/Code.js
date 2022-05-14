import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('javascript', javascript);

export default function Code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');

    if (!inline && match) {
        console.log('>>>', match[1]);
        return <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={prism}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    }
    return <code className={className} {...props}>
        {children}
    </code>
}