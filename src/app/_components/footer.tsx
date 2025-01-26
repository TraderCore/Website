export function Footer() {
    return (
        <footer className="text-muted-foreground mt-auto">
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Company Section */}
                    <div>
                        <h3 className="text-white font-bold mb-4">
                            Trader<span className="text-primary">Core</span>
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/community"
                                    className="hover:text-white transition-colors"
                                >
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="hover:text-white transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/docs"
                                    className="hover:text-white transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/api"
                                    className="hover:text-white transition-colors"
                                >
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/support"
                                    className="hover:text-white transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/privacy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/security"
                                    className="hover:text-white transition-colors"
                                >
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://twitter.com/apecollective"
                                    className="hover:text-white transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ape-collective"
                                    className="hover:text-white transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/ape-collective"
                                    className="hover:text-white transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} TraderCore. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
