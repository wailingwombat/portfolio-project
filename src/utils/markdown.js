import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';

export function MarkdownContent({ children }) {
  console.log('Markdown content:', children); // Debug log
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Customize heading styles
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold mb-8" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
        ),
        // Customize paragraph styles
        p: ({ node, children, ...props }) => {
          // Check if the paragraph only contains an image
          const hasOnlyImage = node?.children?.length === 1 && 
            node.children[0].type === 'element' && 
            node.children[0].tagName === 'img';
          
          if (hasOnlyImage) {
            // Create a figure element for the image
            const imgNode = node.children[0];
            return (
              <figure className="my-8">
                <div className="relative w-full aspect-video mb-2">
                  <img
                    src={imgNode.properties.src}
                    alt={imgNode.properties.alt}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                {imgNode.properties.alt && (
                  <figcaption className="text-center text-sm text-gray-500 mt-2">
                    {imgNode.properties.alt}
                  </figcaption>
                )}
              </figure>
            );
          }
          
          return <p className="mb-4 leading-relaxed" {...props}>{children}</p>;
        },
        // Customize list styles
        ul: ({ node, children, ...props }) => (
          <ul className="list-disc pl-8 space-y-2 mb-4 marker:text-gray-600 dark:marker:text-gray-400" {...props}>
            {children}
          </ul>
        ),
        ol: ({ node, children, ...props }) => (
          <ol className="list-decimal pl-8 space-y-2 mb-4 marker:text-gray-600 dark:marker:text-gray-400" {...props}>
            {children}
          </ol>
        ),
        li: ({ node, children, ...props }) => {
          // Filter out newline characters and ensure we have valid children
          const validChildren = React.Children.toArray(children).filter(
            child => typeof child === 'string' ? child.trim() !== '' : true
          );
          
          return (
            <li className="mb-2 pl-2" {...props}>
              {validChildren}
            </li>
          );
        },
        // Customize code blocks
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              className="rounded-lg my-4"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-100 dark:bg-gray-800 rounded px-1" {...props}>
              {children}
            </code>
          );
        },
        // Customize image with caption
        img: ({ node, alt, src, ...props }) => (
          <figure className="my-8">
            <div className="relative w-full aspect-video mb-2">
              <img
                src={src}
                alt={alt}
                className="object-cover rounded-lg w-full h-full"
                {...props}
              />
            </div>
            {alt && (
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {alt}
              </figcaption>
            )}
          </figure>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
} 