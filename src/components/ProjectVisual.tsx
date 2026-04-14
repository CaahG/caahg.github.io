import { motion } from "motion/react";

interface ProjectVisualProps {
    title: string;
    image?: string;
}

export const ProjectVisual = ({ title, image }: ProjectVisualProps) => {
    return (
        <div className="w-full h-full bg-[#f8f5ff] relative overflow-hidden group/visual flex items-center justify-center">
            {image ? (
                <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/visual:scale-110"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
            ) : (
                <div className="text-primary/20 font-black text-4xl select-none px-6 text-center leading-tight">
                    {title}
                </div>
            )}

            {/* Subtle Gradient Overlay for depth on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Minimal Live Status Badge */}
            <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-primary/10 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                <span className="text-[8px] text-primary font-black uppercase tracking-[0.15em]">Live</span>
            </div>
        </div>
    );
};
