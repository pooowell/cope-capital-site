export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          cope<span className="text-cope-blue">.</span>capital
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl mb-12">
          see what the best memecoin traders are buying
          <br />
          before everyone else.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/copecapital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cope-blue text-black font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
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
            className="inline-flex items-center justify-center gap-2 border border-cope-border text-white font-semibold px-8 py-4 rounded-lg hover:bg-cope-card transition-colors text-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow on X
          </a>
        </div>
      </div>

      {/* Signal Types */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 max-w-4xl w-full">
        <div className="bg-cope-card border border-cope-border rounded-xl p-6">
          <div className="text-2xl mb-3">🏆</div>
          <h3 className="font-semibold text-lg mb-2">Top Traders</h3>
          <p className="text-zinc-400 text-sm">
            890+ wallets tracked and ranked by win rate, PnL, and profit factor.
          </p>
        </div>
        <div className="bg-cope-card border border-cope-border rounded-xl p-6">
          <div className="text-2xl mb-3">📡</div>
          <h3 className="font-semibold text-lg mb-2">Live Feed</h3>
          <p className="text-zinc-400 text-sm">
            Real-time buys and sells from the best performing wallets as they happen.
          </p>
        </div>
        <div className="bg-cope-card border border-cope-border rounded-xl p-6">
          <div className="text-2xl mb-3">🔀</div>
          <h3 className="font-semibold text-lg mb-2">Convergence</h3>
          <p className="text-zinc-400 text-sm">
            Multiple top traders buying the same token. The strongest signal.
          </p>
        </div>
      </div>

      {/* Stats teaser */}
      <div className="flex gap-12 mt-20 text-center">
        <div>
          <div className="text-3xl font-bold text-cope-blue">890+</div>
          <div className="text-zinc-500 text-sm mt-1">wallets tracked</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-cope-blue">2</div>
          <div className="text-zinc-500 text-sm mt-1">chains</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-cope-blue">24/7</div>
          <div className="text-zinc-500 text-sm mt-1">monitoring</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 mb-8 text-zinc-600 text-sm">
        powered by foxhound · built by degens, for degens
      </footer>
    </main>
  );
}
