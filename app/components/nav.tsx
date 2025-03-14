"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Rocket, MessageCircle } from "lucide-react";

const navigation = [
	{ name: "Início", href: "/", icon: Home },
	{ name: "Sobre", href: "#about", icon: User },
	{ name: "Experiência", href: "#experience", icon: Briefcase },
	{ name: "Projetos", href: "#projects", icon: Rocket },
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
			{/* Desktop Navigation */}
			<div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b sm:block hidden ${
				isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500 border-zinc-800"
			}`}>
				<div className="container mx-auto">
					<div className="flex items-center justify-center p-4">
						<nav className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-600/50">
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="relative px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
								>
									<span>{item.name}</span>
								</Link>
							))}
							<Link
								href="https://wa.me/5533999123315"
								className="relative ml-2 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors bg-zinc-800 rounded-full border border-zinc-700"
								target="_blank"
								rel="noopener noreferrer"
							>
								Entrar em contato
							</Link>
						</nav>
					</div>
				</div>
			</div>

			{/* Mobile Bottom Navigation */}
			<div className="sm:hidden fixed bottom-0 inset-x-0 z-50 backdrop-blur duration-200 border-t border-zinc-800 bg-zinc-900/500">
				<div className="container mx-auto px-4 py-3">
					<nav className="flex items-center justify-around bg-zinc-800/50 py-2 px-2 rounded-full border border-zinc-600/50">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
							>
								<item.icon className="w-6 h-6" />
							</Link>
						))}
						<Link
							href="https://wa.me/5533999123315"
							className="relative p-2 text-emerald-400 hover:text-emerald-300 transition-colors bg-zinc-800 rounded-full border border-zinc-700"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle className="w-6 h-6" />
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};
