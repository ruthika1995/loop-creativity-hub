import { Link } from 'react-router-dom';
import { Upload as UploadIcon } from 'lucide-react';

export const Upload = () => {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Upload</h2>
        <form className="mt-6 space-y-5">
          <div>
            <label className="block text-xs text-tertiary mb-2">Title</label>
            <input 
              type="text" 
              placeholder="Give your creation a title" 
              className="w-full h-11 rounded-xl bg-glass-tertiary border border-glass-border px-4 text-sm text-white placeholder-quaternary outline-none focus:border-glass-strong focus:ring-0"
            />
          </div>
          
          <div>
            <label className="block text-xs text-tertiary mb-2">Prompt</label>
            <textarea 
              rows={4} 
              placeholder="Describe your prompt, settings, and steps" 
              className="w-full rounded-xl bg-glass-tertiary border border-glass-border px-4 py-3 text-sm text-white placeholder-quaternary outline-none focus:border-glass-strong focus:ring-0"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-tertiary mb-2">Tags</label>
              <input 
                type="text" 
                placeholder="e.g. portrait, neon, 85mm" 
                className="w-full h-11 rounded-xl bg-glass-tertiary border border-glass-border px-4 text-sm text-white placeholder-quaternary outline-none focus:border-glass-strong focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-xs text-tertiary mb-2">Tools / Models</label>
              <input 
                type="text" 
                placeholder="e.g. SDXL, MidJ, Ableton" 
                className="w-full h-11 rounded-xl bg-glass-tertiary border border-glass-border px-4 text-sm text-white placeholder-quaternary outline-none focus:border-glass-strong focus:ring-0"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs text-tertiary mb-2">Upload Media</label>
            <div className="rounded-xl border border-dashed border-glass-border bg-glass-primary px-4 py-6 text-center hover:border-glass-strong transition">
              <div className="mx-auto h-12 w-12 rounded-lg bg-glass-tertiary border border-glass-border flex items-center justify-center mb-3">
                <UploadIcon size={16} className="text-white" />
              </div>
              <div className="text-sm text-secondary">Drag & drop your image/video here</div>
              <div className="text-xs text-quaternary mt-1">Max 50MB • PNG, JPG, MP4, MOV</div>
            </div>
          </div>
          
          <div className="glass-card flex items-center justify-between rounded-xl p-4">
            <div>
              <div className="text-sm text-secondary tracking-tight font-medium">Allow Remix</div>
              <div className="text-xs text-quaternary">Others can build on your prompt with credit</div>
            </div>
            {/* Custom Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <span className="w-12 h-7 rounded-full bg-glass-quaternary border border-glass-border transition-all peer-checked:bg-glass-secondary peer-checked:border-glass-strong relative">
                <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white/80 transition-all peer-checked:translate-x-5" />
              </span>
            </label>
          </div>
          
          <div className="flex items-center justify-end gap-2">
            <Link 
              to="/" 
              className="px-4 h-11 inline-flex items-center rounded-xl text-sm text-secondary bg-glass-primary border border-glass-border hover:bg-glass-secondary"
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              className="cta-button h-11 px-5 rounded-xl text-sm text-white"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};