import { motion } from 'framer-motion';

type Version = 'A' | 'B' | 'C';

interface VersionSwitcherProps {
  current: Version;
  onChange: (version: Version) => void;
}

const versions: { id: Version; label: string; desc: string }[] = [
  { id: 'A', label: 'A', desc: 'Professional & Modern' },
  { id: 'B', label: 'B', desc: 'Bold & Dynamic' },
  { id: 'C', label: 'C', desc: 'Classic & Corporate' },
];

const VersionSwitcher = ({ current, onChange }: VersionSwitcherProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-20 lg:top-24 right-4 lg:right-8 z-50"
    >
      <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-1.5 shadow-2xl">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground text-center mb-1.5 px-2 pt-1">
          Template
        </div>
        <div className="flex gap-1">
          {versions.map((v) => (
            <button
              key={v.id}
              onClick={() => onChange(v.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                current === v.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {current === v.id && (
                <motion.div
                  layoutId="version-indicator"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{v.label}</span>
            </button>
          ))}
        </div>
        <div className="text-[9px] text-muted-foreground text-center mt-1 pb-0.5 px-2">
          {versions.find((v) => v.id === current)?.desc}
        </div>
      </div>
    </motion.div>
  );
};

export default VersionSwitcher;
