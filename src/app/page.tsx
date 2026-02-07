"use client";

import dynamic from 'next/dynamic';
import ClickSpark from '@/components/ClickSpark';
import ElectricBorder from '@/components/ElectricBorder';
import CountUp from '@/components/CountUp';

// Dynamic imports for components that use window/WebGL
const Dither = dynamic(() => import('@/components/Dither'), { ssr: false });
const ASCIIText = dynamic(() => import('@/components/ASCIIText'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Fixed background - Dither */}
      <div className="fixed inset-0 -z-10">
        <Dither
          colorNum={10}
          waveAmplitude={0.18}
          waveSpeed={0.06}
          waveFrequency={2.5}
          enableMouseInteraction={false}
          waveColor={[0.5, 0.5, 0.5]}
          pixelSize={2}
        />
      </div>

      <ClickSpark sparkColor="#ffffff" sparkRadius={25} sparkCount={10}>
        <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-8 sm:pt-0">
          {/* Hero */}
          <div className="text-center w-full max-w-5xl overflow-hidden">
            {/* ASCII Text Hero */}
            <div className="relative h-[25vh] sm:h-[40vh] md:h-[50vh] w-full mb-2 sm:mb-4">
              <ASCIIText
                text="COPE"
                textColor="#ffffff"
                asciiFontSize={4}
                textFontSize={100}
                planeBaseHeight={14}
                enableWaves={true}
              />
            </div>
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 px-2">
              see what the best memecoin traders are buying
              <br />
              before everyone else.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="https://t.me/copecapital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Channel
              </a>
              <a
                href="https://x.com/copedotcapital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors text-base sm:text-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12 mt-8 sm:mt-12 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <CountUp to={890} duration={2} separator="," />+
              </div>
              <div className="text-zinc-500 text-xs sm:text-sm mt-1">wallets tracked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <CountUp to={2} duration={1.5} />
              </div>
              <div className="text-zinc-500 text-xs sm:text-sm mt-1">chains</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-zinc-500 text-xs sm:text-sm mt-1">monitoring</div>
            </div>
          </div>

          {/* Signal Types */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 max-w-4xl w-full px-2 sm:px-0">
            <ElectricBorder color="#ffffff" borderRadius={12} chaos={0.06}>
              <div className="p-5 sm:p-6 bg-black/60 backdrop-blur-sm rounded-xl">
                <div className="text-2xl mb-2 sm:mb-3">🏆</div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Top Traders</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  890+ wallets tracked and ranked by win rate, PnL, and profit factor.
                </p>
              </div>
            </ElectricBorder>
            <ElectricBorder color="#ffffff" borderRadius={12} chaos={0.06}>
              <div className="p-5 sm:p-6 bg-black/60 backdrop-blur-sm rounded-xl">
                <div className="text-2xl mb-2 sm:mb-3">📡</div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Live Feed</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Real-time buys and sells from the best performing wallets as they happen.
                </p>
              </div>
            </ElectricBorder>
            <ElectricBorder color="#ffffff" borderRadius={12} chaos={0.06}>
              <div className="p-5 sm:p-6 bg-black/60 backdrop-blur-sm rounded-xl">
                <div className="text-2xl mb-2 sm:mb-3">🔀</div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Convergence</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Multiple top traders buying the same token. The strongest signal.
                </p>
              </div>
            </ElectricBorder>
          </div>

          {/* Footer */}
          <footer className="mt-16 sm:mt-24 mb-6 sm:mb-8 text-zinc-600 text-xs sm:text-sm">
            powered by foxhound
          </footer>
        </main>
      </ClickSpark>
    </>
  );
}
