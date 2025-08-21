import { SlidersHorizontal, ArrowUpRight, Flame, Music2, User, Terminal, Video } from 'lucide-react';

export const Explore = () => {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Explore</h2>
          <div className="inline-flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg text-xs text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Explore Card 1 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1520975922215-230d9fda3e25?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="3D render"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Trending: 3D Renders</div>
                <div className="text-[11px] text-quaternary">2.1k posts • #hard-surface</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <ArrowUpRight size={12} /> View
              </div>
            </div>
          </a>

          {/* Explore Card 2 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="cosmic"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Challenge: Cosmic Week</div>
                <div className="text-[11px] text-quaternary">Ends in 3 days • prize pool</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <Flame size={12} /> Join
              </div>
            </div>
          </a>

          {/* Explore Card 3 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1520974735194-87672f2d7e6d?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="lofi"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Audio: LoFi Loops</div>
                <div className="text-[11px] text-quaternary">1.4k tracks • #chillhop</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <Music2 size={12} /> Listen
              </div>
            </div>
          </a>

          {/* Explore Card 4 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="portrait"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Portrait Studio</div>
                <div className="text-[11px] text-quaternary">New models trending</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <User size={12} /> Open
              </div>
            </div>
          </a>

          {/* Explore Card 5 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="code art"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Code → Visuals</div>
                <div className="text-[11px] text-quaternary">Shaders, p5, TouchDesigner</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <Terminal size={12} /> Browse
              </div>
            </div>
          </a>

          {/* Explore Card 6 */}
          <a href="#" className="group glass-card relative rounded-2xl overflow-hidden">
            <div className="h-48 bg-glass-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1526312426976-593c2c1e691b?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="video"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-white tracking-tight font-medium">Video Diffusion</div>
                <div className="text-[11px] text-quaternary">Motion prompts & edits</div>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-glass-tertiary border border-glass-border text-[11px] text-tertiary">
                <Video size={12} /> Watch
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};