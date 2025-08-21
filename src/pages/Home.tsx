import { Link } from 'react-router-dom';
import { PlayCircle, Wand2, MessageSquarePlus, Handshake, Infinity, IdCard, ArrowRight, Repeat2, Music2 } from 'lucide-react';

export const Home = () => {
  return (
    <main className="pt-20">
      {/* HERO */}
      <section id="hero" className="relative flex items-center justify-center min-h-[92vh] w-full">
        <div className="relative z-10 w-full px-6 sm:px-8">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative inline-flex items-center">
                <div className="hero-glow"></div>
                <h1 className="relative text-5xl sm:text-6xl md:text-7xl tracking-tight font-semibold leading-[0.95] text-white">
                  <span className="inline-block">Lu</span>
                  <span className="inline-block relative">
                    <span className="px-1">u</span>
                    <span 
                      className="absolute -inset-1 rounded-full opacity-70 pointer-events-none"
                      style={{
                        background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.14), transparent 70%)',
                        filter: 'blur(6px)'
                      }}
                    />
                  </span>
                  <span className="inline-block">p</span>
                </h1>
              </div>
              <p className="mt-5 text-lg sm:text-xl text-secondary max-w-xl">
                The Social Feed of Human + AI Creativity
              </p>
              <p className="mt-3 text-sm sm:text-base text-tertiary max-w-2xl">
                Where imagination meets infinite possibilities. Share prompts, remix with permission, 
                and orbit into an endless stream of generative art, music, edits, and ideas.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/feed"
                  className="group cta-button relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  <span className="relative z-10">Join the Loop</span>
                  <span 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0.06), transparent 40%)'
                    }}
                  />
                </Link>
                <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary hover:border-glass-strong transition-all">
                  <PlayCircle size={16} />
                  <span>See it in action</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card relative rounded-2xl p-4 sm:p-5">
                <div 
                  className="absolute -top-12 -right-10 w-40 h-40 rounded-full blur-xl opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(160,170,210,0.22), transparent 70%)'
                  }}
                />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-glass-quaternary border border-glass-border flex items-center justify-center">
                    <Wand2 size={16} className="text-white" />
                  </div>
                  <div className="text-secondary">
                    <p className="text-sm">Animated prompt → result</p>
                    <p className="text-[11px] text-quaternary">Show your recipe, not just the dish</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12 gap-3">
                  <div className="col-span-5">
                    <div className="text-[11px] uppercase tracking-wider text-quaternary mb-2">Prompt</div>
                    <div className="rounded-xl border border-glass-border bg-glass-tertiary p-3 text-xs text-secondary leading-relaxed">
                      synthwave skyline at dusk, chrome reflections, neon fog, 35mm anamorphic, cinematic grain
                    </div>
                  </div>
                  <div className="col-span-7">
                    <div className="text-[11px] uppercase tracking-wider text-quaternary mb-2">Result</div>
                    <div className="rounded-xl overflow-hidden border border-glass-border bg-glass-tertiary aspect-video">
                      <img 
                        src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" 
                        className="w-full h-full object-cover saturate-[1.15] contrast-110" 
                        alt="Synthwave skyline result"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="inline-flex items-center gap-2 text-[12px] text-tertiary">
                    <Handshake size={12} /> Remix with permission
                  </div>
                  <Link 
                    to="/upload" 
                    className="cta-button px-3 py-2 text-[12px] rounded-lg text-white transition"
                  >
                    Try this prompt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent" />
      </div>

      {/* FEATURES */}
      <section id="features" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group glass-card rounded-2xl p-6 hover:bg-glass-secondary transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-xl bg-glass-quaternary border border-glass-border flex items-center justify-center mb-4">
                <MessageSquarePlus size={16} className="text-white" />
              </div>
              <h3 className="text-lg tracking-tight font-semibold text-white">Share Your Prompts & Creations</h3>
              <p className="mt-2 text-sm text-tertiary">Post the recipe and the result. Inspire others with your process.</p>
            </div>
            <div className="group glass-card rounded-2xl p-6 hover:bg-glass-secondary transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-xl bg-glass-quaternary border border-glass-border flex items-center justify-center mb-4">
                <Handshake size={16} className="text-white" />
              </div>
              <h3 className="text-lg tracking-tight font-semibold text-white">Remix with Permission</h3>
              <p className="mt-2 text-sm text-tertiary">Opt-in remixes keep credit flowing and creativity looping.</p>
            </div>
            <div className="group glass-card rounded-2xl p-6 hover:bg-glass-secondary transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-xl bg-glass-quaternary border border-glass-border flex items-center justify-center mb-4">
                <Infinity size={16} className="text-white" />
              </div>
              <h3 className="text-lg tracking-tight font-semibold text-white">Endless Challenges</h3>
              <p className="mt-2 text-sm text-tertiary">Daily loops that spark momentum, themes, and friendly competition.</p>
            </div>
            <div className="group glass-card rounded-2xl p-6 hover:bg-glass-secondary transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-xl bg-glass-quaternary border border-glass-border flex items-center justify-center mb-4">
                <IdCard size={16} className="text-white" />
              </div>
              <h3 className="text-lg tracking-tight font-semibold text-white">Build Your AI Identity</h3>
              <p className="mt-2 text-sm text-tertiary">Craft your style graph, showcase tools, and track your creative fingerprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-tertiary text-xs uppercase tracking-wider">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-glass-secondary">1</span> 
                Generate
              </div>
              <h4 className="mt-2 text-xl tracking-tight font-semibold text-white">Create with your favorite tools</h4>
              <p className="mt-2 text-sm text-tertiary">Text-to-image, music, code, video—anything that loops imagination into reality.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-tertiary text-xs uppercase tracking-wider">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-glass-secondary">2</span> 
                Post
              </div>
              <h4 className="mt-2 text-xl tracking-tight font-semibold text-white">Share prompt + result</h4>
              <p className="mt-2 text-sm text-tertiary">Attach your settings, steps, and credits so others can learn and build.</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-tertiary text-xs uppercase tracking-wider">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-glass-secondary">3</span> 
                Inspire
              </div>
              <h4 className="mt-2 text-xl tracking-tight font-semibold text-white">Loop into the community</h4>
              <p className="mt-2 text-sm text-tertiary">Remix with permission, join challenges, and build your creative identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PREVIEW */}
      <section id="community" className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Community Preview</h2>
            <Link to="/explore" className="group inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition">
              <span>Explore more</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="AI portrait"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(180deg, transparent, rgba(7,9,14,0.85))'
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-secondary">
                <span>@neli • portrait diffusion</span>
                <div className="inline-flex items-center gap-2">
                  <Repeat2 size={12} /><span>Remix</span>
                </div>
              </div>
            </div>
            
            <div className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" 
                className="w-full h-56 object-cover transition duration-500 group-hover:rotate-1 group-hover:scale-[1.03]" 
                alt="AI LoFi room"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 text-[10px] rounded-full bg-glass-quaternary border border-glass-border text-secondary">
                <Music2 size={10} /> lofi loop
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">@zai • music + cover art</div>
            </div>
            
            <div className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.06]" 
                alt="AI cosmic render"
              />
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition"
                style={{
                  background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(255,255,255,0.06) 3px, rgba(255,255,255,0.06) 4px)'
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">#challenge • cosmic week</div>
            </div>
            
            <div className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-56 object-cover" 
                alt="AI code art"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                style={{
                  background: 'linear-gradient(180deg, rgba(6,8,12,0) 40%, rgba(6,8,12,0.95) 100%)'
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">@tek • code → visuals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="glass-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-glass-primary via-glass-primary to-glass-secondary p-6 sm:p-10">
            <div 
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(200,205,220,0.16), transparent 50%)'
              }}
            />
            <div 
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(170,180,200,0.16), transparent 50%)'
              }}
            />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Ready to Loop In?</h3>
              <p className="mt-2 text-tertiary max-w-2xl">Get early access, new challenges, and featured creator drops.</p>
              <form className="mt-6 grid sm:grid-cols-[1fr,auto] gap-3 w-full max-w-xl">
                <div className="relative">
                  <input 
                    type="email" 
                    required 
                    placeholder="your@email.com" 
                    className="peer w-full h-12 rounded-xl bg-glass-tertiary border border-glass-border px-4 text-sm text-white placeholder-quaternary outline-none focus:border-glass-strong focus:ring-0"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 peer-focus:ring-1 ring-glass-border-strong transition" />
                </div>
                <button 
                  type="submit" 
                  className="cta-button inline-flex items-center justify-center h-12 px-5 rounded-xl text-sm text-white font-medium"
                >
                  Get Early Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pb-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-xs text-quaternary flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-glass-primary border border-glass-border text-white tracking-tight font-semibold">L</span>
            <span>Luup © 2025</span>
          </div>
          <div className="inline-flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
};
