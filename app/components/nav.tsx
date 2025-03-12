"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navigation = [
	{ name: "Início", href: "/" },
	{ name: "Sobre", href: "#about" },
	{ name: "Projetos", href: "#projects" },
];

export const Navigation: React.FC<{ lang?: string }> = ({ lang = 'pt-BR' }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container mx-auto">
					<div className="flex items-center justify-center p-4">
						<nav className="flex items-center gap-2 bg-zinc-800/50 px-2 sm:px-4 py-2 rounded-full border border-zinc-600/50">
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="relative px-2 sm:px-4 py-2 text-xs sm:text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
								>
									<span>{item.name}</span>
								</Link>
							))}
							<Link
								href="/schedule"
								className="relative ml-1 sm:ml-2 px-2 sm:px-4 py-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors bg-zinc-800 rounded-full border border-zinc-700"
							>
								Agendar chamada
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
