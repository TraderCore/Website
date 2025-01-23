export default function Home() {
    return (
        <main className="min-h-screen relative">
            {/* Work in Progress Banner */}
            <div className="bg-primary py-2 px-4 text-center border-b">
                <span className="text-sm text-primary-foreground font-medium">
                    🚧 Work in Progress - Development Site 🚧
                </span>
            </div>

            {/* Hero Section */}
            <section className="container relative mx-auto px-4">
                <div className="my-24">
                    <h1 className="text-4xl font-semibold tracking-tight  sm:text-7xl lg:text-8xl 2xl:text-9xl mb-8">
                        Take <span className="text-primary">control</span> of
                        your own trading framework
                    </h1>
                    <p className="mt-6 max-w-lg text-md text-muted-foreground">
                        At TraderCore, we're revolutionizing trading
                        infrastructure. Traditional brokerage/trading technology
                        is outdated and expensive - we're making it modern,
                        open, and accessible through open-source solutions.
                    </p>
                </div>

                {/* Stats Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold">1st</div>
                        <div className="text-sm text-muted-foreground">
                            Open Source Solution
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold">1st</div>
                        <div className="text-sm text-muted-foreground">
                            Modular Solution
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold">1st</div>
                        <div className="text-sm text-muted-foreground">
                            Self-Hostable Solution
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
