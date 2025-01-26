import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-semibold mt-6 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-base font-semibold mt-3 mb-1">{children}</h4>
        ),
        p: ({ children }) => <p className="mb-4 text-gray-300">{children}</p>,
        ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4">{children}</ul>
        ),
        li: ({ children }) => <li className="mb-2">{children}</li>,
        strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
        ),
        a: ({ children, href }) => (
            <a
                href={href}
                className="text-primary underline"
            >
                {children}
            </a>
        ),
    };
}

export default useMDXComponents;
