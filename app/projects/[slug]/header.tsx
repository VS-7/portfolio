"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};
};
export const Header: React.FC<Props> = ({ project }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
		>
			<div className="absolute inset-0 -z-10">
				<div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-zinc-800/20 blur-3xl" />
				<div className="absolute left-1/3 bottom-1/3 h-96 w-96 rounded-full bg-zinc-800/30 blur-3xl" />
			</div>

			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/5 border-zinc-800/10"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link target="_blank" href="https://github.com/VS-7" 
							className="relative group">
							<Github
								className={`w-6 h-6 duration-200 ${
									isIntersecting
										? "text-zinc-400 group-hover:text-zinc-100"
										: "text-zinc-600 group-hover:text-zinc-900"
								}`}
							/>
							<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-400 group-hover:w-full transition-all duration-200" />
						</Link>
					</div>

					<div className="flex items-center gap-6">
						<Link
							href="/"
							className={`relative group duration-200 ${
								isIntersecting
									? "text-zinc-400 hover:text-zinc-100"
									: "text-zinc-600 hover:text-zinc-900"
							}`}
						>
							<ArrowLeft className="w-6 h-6" />
							<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-400 group-hover:w-full transition-all duration-200" />
						</Link>

						<span
							className={`duration-200 font-medium ${
								isIntersecting
									? "opacity-0 -translate-y-2"
									: "opacity-100 translate-y-0"
							}`}
						>
							{project.title}
						</span>
					</div>
				</div>
			</div>

			<div className="container mx-auto relative isolate py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0 relative">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
							{project.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							{project.description}
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link 
									target="_blank" 
									key={link.label} 
									href={link.href}
									className="relative group inline-flex items-center"
								>
									<span className="relative">
										{link.label}
										<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-200" />
									</span>
									<span aria-hidden="true" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
