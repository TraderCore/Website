import Script from 'next/script';

export const Animation = () => {
    return (
        <>
            <div
                id="homepage-background"
                className="h-[80vh] w-screen"
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js"
                strategy="beforeInteractive"
            />
            <Script id="script">
                {`VANTA.TRUNK({
                    el: "#homepage-background",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 10.00,
                    minWidth: 10.00,
                    color: 0xac00f7,
                    backgroundColor: 0x20617,
                    scale: 1,
                    scaleMobile: 1,
                    spacing: -1,
                    chaos: 2.00
                });`}
            </Script>
        </>
    );
};
