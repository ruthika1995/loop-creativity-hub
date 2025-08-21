import { MessageCircle } from 'lucide-react';

export const Profile = () => {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-0 sm:px-8">
        {/* Banner */}
        <div className="mx-6 sm:mx-0 glass-card rounded-2xl overflow-hidden">
          <div className="h-40 sm:h-56 bg-glass-tertiary relative">
            <img 
              src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="banner"
            />
            <div className="absolute -bottom-10 left-5">
              <img 
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=240&auto=format&fit=crop" 
                className="h-20 w-20 rounded-xl object-cover border-2 border-glass-tertiary" 
                alt="avatar"
              />
            </div>
          </div>
          <div className="pt-12 px-5 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <div className="text-xl tracking-tight font-semibold text-white">@neli</div>
                <div className="text-xs text-tertiary">Portraits • Style graphs • Open for collabs</div>
              </div>
              <div className="inline-flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg text-sm text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
                  <MessageCircle size={16} />
                </button>
                <button className="px-3 py-2 rounded-lg text-sm text-white bg-glass-secondary border border-glass-border hover:bg-glass-border-strong">
                  Follow
                </button>
              </div>
            </div>
            <div className="mt-3 text-xs text-quaternary">2,108 followers • 178 following • 64 posts</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mx-6 sm:mx-0 mt-6 glass-card rounded-2xl p-3">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg text-sm text-white bg-glass-secondary border border-glass-border">
              Posts
            </button>
            <button className="px-3 py-2 rounded-lg text-sm text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
              Collections
            </button>
            <button className="px-3 py-2 rounded-lg text-sm text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary">
              About
            </button>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1659535951285-33823535f87a?q=80&w=1200&auto=format&fit=crop" 
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="post"
              />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">rimlight portrait • 85mm</div>
            </a>
            <a href="#" className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" 
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="post"
              />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">editorial cyber street</div>
            </a>
            <a href="#" className="group glass-card relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop" 
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                alt="post"
              />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-secondary">sound design pack</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};