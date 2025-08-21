import { Heart, MessageCircle, Repeat2, Bookmark, MoreHorizontal, AlignLeft, Sparkles, Tag, Flame, ChevronDown } from 'lucide-react';

export const Feed = () => {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Your Feed</h2>
          <div className="inline-flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg text-xs text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
              Following
            </button>
            <button className="px-3 py-2 rounded-lg text-xs text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
              For You
            </button>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-[260px,1fr] gap-6">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block glass-card rounded-2xl p-4 h-max sticky top-24">
            <div className="text-[11px] uppercase tracking-wider text-quaternary mb-3">Filters</div>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-glass-tertiary border border-glass-border text-sm text-secondary hover:bg-glass-quaternary">
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={14} /> AI Type
                </span>
                <ChevronDown size={14} />
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-glass-tertiary border border-glass-border text-sm text-secondary hover:bg-glass-quaternary">
                <span className="inline-flex items-center gap-2">
                  <Tag size={14} /> Tags
                </span>
                <ChevronDown size={14} />
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-glass-tertiary border border-glass-border text-sm text-secondary hover:bg-glass-quaternary">
                <span className="inline-flex items-center gap-2">
                  <Flame size={14} /> Challenges
                </span>
                <ChevronDown size={14} />
              </button>
            </div>
          </aside>

          {/* Feed Stream */}
          <section className="space-y-6">
            {/* Post Card 1 */}
            <article className="glass-card rounded-2xl overflow-hidden">
              <header className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=240&auto=format&fit=crop" 
                    className="h-9 w-9 rounded-full object-cover" 
                    alt="avatar"
                  />
                  <div>
                    <div className="text-sm text-white tracking-tight font-medium">@neli</div>
                    <div className="text-[11px] text-quaternary">2h • portrait diffusion • opt-in remix</div>
                  </div>
                </div>
                <button className="h-9 w-9 rounded-lg bg-glass-tertiary border border-glass-border flex items-center justify-center hover:bg-glass-quaternary">
                  <MoreHorizontal size={16} />
                </button>
              </header>
              
              <div className="px-4">
                <details className="group">
                  <summary className="list-none cursor-pointer text-sm text-secondary hover:text-white inline-flex items-center gap-2">
                    <AlignLeft size={14} className="opacity-70 group-open:opacity-100" />
                    <span>Prompt</span>
                    <span className="text-quaternary group-open:hidden">— detailed portrait, rim light, filmic grain...</span>
                    <span className="text-quaternary hidden group-open:inline">— expanded</span>
                  </summary>
                  <p className="mt-2 text-xs text-tertiary leading-relaxed bg-glass-tertiary border border-glass-border rounded-lg p-3">
                    ultra-detailed portrait of a cyberpunk violinist in rain, teal/orange bokeh, 85mm f1.4, Kodak Portra, 
                    dramatic rim lighting, subtle skin texture, studio grade post-process
                  </p>
                </details>
              </div>
              
              <div className="mt-3 aspect-video bg-glass-tertiary border-t border-b border-glass-border">
                <img 
                  src="https://images.unsplash.com/photo-1640622652266-16b8462e7f27?q=80&w=1600&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="post result"
                />
              </div>
              
              <footer className="px-4 py-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-3 text-sm">
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <Heart size={16} />
                    <span>1.2k</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <MessageCircle size={16} />
                    <span>128</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <Repeat2 size={16} />
                    <span>Remix</span>
                  </button>
                </div>
                <button className="rounded-lg px-2 py-1.5 text-tertiary hover:text-white hover:bg-glass-primary">
                  <Bookmark size={16} />
                </button>
              </footer>
            </article>

            {/* Post Card 2 */}
            <article className="glass-card rounded-2xl overflow-hidden">
              <header className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=240&auto=format&fit=crop" 
                    className="h-9 w-9 rounded-full object-cover" 
                    alt="avatar"
                  />
                  <div>
                    <div className="text-sm text-white tracking-tight font-medium">@tek</div>
                    <div className="text-[11px] text-quaternary">5h • code → visuals • CC BY-SA</div>
                  </div>
                </div>
                <button className="h-9 w-9 rounded-lg bg-glass-tertiary border border-glass-border flex items-center justify-center hover:bg-glass-quaternary">
                  <MoreHorizontal size={16} />
                </button>
              </header>
              
              <div className="px-4">
                <details className="group">
                  <summary className="list-none cursor-pointer text-sm text-secondary hover:text-white inline-flex items-center gap-2">
                    <AlignLeft size={14} className="opacity-70 group-open:opacity-100" />
                    <span>Prompt</span>
                    <span className="text-quaternary group-open:hidden">— orbital lattice shader with glsl noise...</span>
                    <span className="text-quaternary hidden group-open:inline">— expanded</span>
                  </summary>
                  <p className="mt-2 text-xs text-tertiary leading-relaxed bg-glass-tertiary border border-glass-border rounded-lg p-3">
                    generative GLSL: fbm noise + polar warp + bloom threshold for neon lattice; parameters: speed=0.8, 
                    density=0.6, hue=200..240; exported 1080p 60fps
                  </p>
                </details>
              </div>
              
              <div className="mt-3 aspect-video bg-glass-tertiary border-t border-b border-glass-border">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="shader result"
                />
              </div>
              
              <footer className="px-4 py-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-3 text-sm">
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <Heart size={16} />
                    <span>640</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <MessageCircle size={16} />
                    <span>54</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-secondary hover:text-white hover:bg-glass-primary">
                    <Repeat2 size={16} />
                    <span>Remix</span>
                  </button>
                </div>
                <button className="rounded-lg px-2 py-1.5 text-tertiary hover:text-white hover:bg-glass-primary">
                  <Bookmark size={16} />
                </button>
              </footer>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};