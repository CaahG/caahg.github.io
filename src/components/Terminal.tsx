import { motion } from "motion/react";
import { Terminal as TerminalIcon, Circle } from "lucide-react";

interface TerminalProps {
  lines: string[];
  title?: string;
}

export const Terminal = ({ lines, title = "test_execution.log" }: TerminalProps) => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl font-mono text-sm">
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-slate-400 text-xs">{title}</span>
        </div>
        <div className="flex gap-1.5">
          <Circle className="w-2.5 h-2.5 fill-slate-700 text-transparent" />
          <Circle className="w-2.5 h-2.5 fill-slate-700 text-transparent" />
          <Circle className="w-2.5 h-2.5 fill-slate-700 text-transparent" />
        </div>
      </div>
      <div className="p-4 space-y-1">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="flex gap-3"
          >
            <span className="text-slate-600 select-none">{idx + 1}</span>
            <span className={line.includes('✓') || line.includes('PASS') ? 'text-primary' : line.includes('FAIL') ? 'text-error' : 'text-slate-300'}>
              {line}
            </span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
        />
      </div>
    </div>
  );
};
