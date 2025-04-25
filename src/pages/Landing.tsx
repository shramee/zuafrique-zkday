import React from 'react';

export const eventDetails = {
	date: "Tuesday, 29th April",
	title: "Zero Knowledge Day",
	tagline: "Zero Knowledge proofs and ZK design thinking",
	sessions: [
		{
			title: "ZK Mechanics & Primitives",
			subtitle: "Kili Sunrise Resort - 28th April 12:00 pm",
			points: [
				"Core concepts behind zero-knowledge proofs",
				"Primitives and practical applications"
			]
		},
		{
			title: "Building with Noir",
			subtitle: "AyaHQ Builders Hub - 29th April 3:00 pm",
			points: [
				"Deep dive into the Noir language",
				"Circuit code walkthrough"
			]
		},
		{
			title: "From Circuit to Deployment",
			subtitle: "AyaHQ Builders Hub - 29th April 4:00 pm",
			points: [
				"Generating proofs and verification",
				"On-chain verifier deployment",
				"Frontend integration and proving"
			]
		}
	]
};

const Landing = () => {
	return (
		<div className="bg-black min-h-screen text-white font-sans">
			{/* Announcement Bar */}
			<div className="w-full bg-orange-500 py-4">
				<div className="max-w-6xl mx-auto px-6">
					<p className="text-black text-xl">
						{eventDetails.tagline}
					</p>
				</div>
			</div>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-6 pt-12 gap-10">
				{/* Left Section - Main Heading */}
				<div className="">
					<h1 className="text-5xl md:text-6xl font-black mb-6">
						<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Zero Knowledge Day
						</span>
					</h1>

					<p className="text-lg mb-8">For developers, enthusiasts, and anyone curious about digital privacy technology.</p>

					<a
						href="#register"
						className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-8 py-3 text-black font-bold text-lg"
					>
						Join the telegram
					</a>
				</div>

				{/* Right Section - Africa Image and Sessions */}
				<div className=" relative">
					<div className="relative z-10 space-y-6 mt-8">
						<h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">Sessions</h2>

						<div className="border-l-4 border-orange-500 pl-4 ml-1 md:pt-8 pt-4 md:pb-5 pb-1">
							{eventDetails.sessions.map((session, index) => (
								<div key={index} className="mb-3">
									<h3 className="text-xl font-bold text-orange-400 mb-1">{session.title}</h3>
									<ul className="space-y-1">
										<li className="flex items-start">
											<span className="text-yellow-200 text-sm mr-2">{session.subtitle}</span>
										</li>
										{session.points.map((point, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-orange-400 mr-2">•</span>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="md:absolute inset-0 flex md:justify-end">
						<img
							src="https://zuafrique.com/images/website/landing/africa.svg"
							alt="Africa"
							className="w-64 mx-auto md:w-full h-full object-contain object-right"
						/>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="w-full bg-gray-900 py-6">
				<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
					{/* <p className="text-gray-400 mb-4 md:mb-0">Organized by Shramee @ ZuAfrique</p> */}
					<div className="flex gap-4">
						<a href="#" className="text-orange-400 hover:text-orange-300">Event Details</a>
						<a href="#" className="text-orange-400 hover:text-orange-300">Contact</a>
						<a href="#" className="text-orange-400 hover:text-orange-300">ZuAfrique.com</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Landing;