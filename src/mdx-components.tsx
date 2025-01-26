import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => (
            <h1 className="mb-6 font-bold text-3xl">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-6 mb-3 font-semibold text-xl">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-4 mb-2 font-semibold text-lg">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="mt-3 mb-1 font-semibold text-base">{children}</h4>
        ),
        p: ({ children }) => <p className="mb-4 text-gray-300">{children}</p>,
        ul: ({ children }) => (
            <ul className="mb-4 list-disc pl-6">{children}</ul>
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
