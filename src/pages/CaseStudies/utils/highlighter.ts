/**
 * Final Robust Syntax Highlighter for Terminal Preview
 * Uses a single-pass tokenization to prevent inner highlighting of tags.
 */

export const highlightCode = (code: string, isDarkMode: boolean) => {
    const colors: Record<string, string> = isDarkMode ? {
        keyword: '#c586c0',
        string: '#ce9178',
        comment: '#6a9955',
        key: '#9cdcfe',
        number: '#b5cea8',
        function: '#dcdcaa'
    } : {
        keyword: '#af00db',
        string: '#a31515',
        comment: '#008000',
        key: '#0451a5',
        number: '#098658',
        function: '#795e26'
    };

    // Escape HTML special characters
    const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const tokens: Array<{ type: string; text: string }> = [];
    const keywords = ['const', 'let', 'var', 'async', 'await', 'return', 'type', 'while', 'if', 'else', 'break', 'new', 'interface'];

    // Named Capture Groups in a single Regex
    const regex = new RegExp([
        `(?<comment>\\/\\/.*)`,
        `(?<string>"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*')`,
        `\\b(?<keyword>${keywords.join('|')})\\b`,
        `\\b(?<number>\\d+)\\b`,
        `\\b(?<function>\\w+)(?=\\s*\\()`,
        `\\b(?<key>\\w+)\\b(?=\\s*:)`
    ].join('|'), 'g');

    let current = 0;
    let match;

    while ((match = regex.exec(escaped)) !== null) {
        // Plain text before match
        if (match.index > current) {
            tokens.push({ type: 'plain', text: escaped.substring(current, match.index) });
        }

        // Identify which group matched
        const groups = match.groups as Record<string, string>;
        const type = Object.keys(groups).find(key => !!groups[key]);
        
        if (type) {
            tokens.push({ type, text: groups[type] });
        }

        current = regex.lastIndex;
    }

    // Remaining plain text
    if (current < escaped.length) {
        tokens.push({ type: 'plain', text: escaped.substring(current) });
    }

    return tokens.map(token => {
        if (token.type === 'plain') return token.text;
        const color = colors[token.type];
        return `<span style="color: ${color}">${token.text}</span>`;
    }).join('');
};
