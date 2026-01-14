export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
          Design System
        </h1>
        <p className="text-text-secondary text-lg">
          Official Color Palette & Components
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        
        {/* Colors Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Color Palette
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-text-muted text-sm uppercase tracking-wider mb-3">Primary (Purple)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ColorCard label="Primary" color="bg-primary" value="#8b5cf6" />
                <ColorCard label="Dark" color="bg-primary-dark" value="#7c3aed" />
                <ColorCard label="Deeper" color="bg-primary-deeper" value="#6d28d9" />
              </div>
            </div>

            <div>
              <h3 className="text-text-muted text-sm uppercase tracking-wider mb-3">Secondary (Pink)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ColorCard label="Primary" color="bg-secondary" value="#ec4899" />
                <ColorCard label="Dark" color="bg-secondary-dark" value="#db2777" />
                <ColorCard label="Accent" color="bg-secondary-accent" value="#f43f5e" />
              </div>
            </div>

            <div>
              <h3 className="text-text-muted text-sm uppercase tracking-wider mb-3">Accent (Gold)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ColorCard label="Primary" color="bg-accent" value="#fbbf24" text="text-bg-base" />
                <ColorCard label="Dark" color="bg-accent-dark" value="#f59e0b" text="text-bg-base" />
              </div>
            </div>

            <div>
              <h3 className="text-text-muted text-sm uppercase tracking-wider mb-3">Backgrounds</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <ColorCard label="Base" color="bg-bg-base" value="#0f172a" border />
                <ColorCard label="Medium" color="bg-bg-medium" value="#1e293b" />
                <ColorCard label="Lighter" color="bg-bg-lighter" value="#334155" />
                <ColorCard label="Tint" color="bg-bg-tint" value="#a78bfa" text="text-bg-base" />
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            Buttons
          </h2>
          <div className="bg-bg-medium p-8 rounded-2xl flex flex-wrap gap-6 items-center border border-bg-lighter">
            <button className="px-6 py-3 rounded-lg font-medium bg-primary hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 text-white cursor-pointer">
              Primary Action
            </button>
            <button className="px-6 py-3 rounded-lg font-medium bg-secondary hover:bg-secondary-dark transition-colors shadow-lg shadow-secondary/20 text-white cursor-pointer">
              Secondary Action
            </button>
            <button className="px-6 py-3 rounded-lg font-medium bg-accent hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20 text-bg-base cursor-pointer">
              Premium Feature
            </button>
            <button className="px-6 py-3 rounded-lg font-medium bg-bg-lighter hover:bg-bg-lighter/80 transition-colors text-text-primary cursor-pointer">
              Ghost / Neutral
            </button>
          </div>
        </section>

        {/* UI Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-accent rounded-full"></span>
            UI Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-bg-medium p-6 rounded-2xl border border-bg-lighter hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Lightning Fast</h3>
              <p className="text-text-secondary leading-relaxed">
                Experience smooth interactions and instant load times with our optimization.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-bg-medium p-6 rounded-2xl border border-bg-lighter hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl mb-4 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Premium Design</h3>
              <p className="text-text-secondary leading-relaxed">
                Crafted with attention to detail using our new vibrant secondary palette.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function ColorCard({ label, color, value, text = "text-white", border = false }) {
  return (
    <div className={`${color} p-4 rounded-xl flex items-center justify-between shadow-sm ${border ? 'border border-bg-lighter' : ''}`}>
      <div className="flex flex-col">
        <span className={`font-medium ${text}`}>{label}</span>
        <span className={`text-xs opacity-80 ${text}`}>{value}</span>
      </div>
    </div>
  );
}
