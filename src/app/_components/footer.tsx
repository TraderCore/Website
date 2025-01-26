export function Footer() {
    return (
        <footer className="mt-auto">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-2 justify-items-center gap-4 text-center md:grid-cols-4 lg:text-left">
                    {/* Company Section */}
                    <div>
                        <h3 className=" mb-4 font-bold">
                            Trader<span className="text-primary">Core</span>
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a
                                    href="/about"
                                    className="transition-colors hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/community"
                                    className="transition-colors hover:text-white"
                                >
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="transition-colors hover:text-white"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Resources</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a
                                    href="/docs"
                                    className="transition-colors hover:text-white"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/api"
                                    className="transition-colors hover:text-white"
                                >
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/support"
                                    className="transition-colors hover:text-white"
                                >
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Legal</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a
                                    href="/privacy"
                                    className="transition-colors hover:text-white"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="transition-colors hover:text-white"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/security"
                                    className="transition-colors hover:text-white"
                                >
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="mb-4 font-bold">Connect</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <a
                                    href="https://twitter.com/apecollective"
                                    className="transition-colors hover:text-white"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ape-collective"
                                    className="transition-colors hover:text-white"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/ape-collective"
                                    className="transition-colors hover:text-white"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-8 border-muted border-t pt-8 text-center text-muted-foreground text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} TraderCore. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
