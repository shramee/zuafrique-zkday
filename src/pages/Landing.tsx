import React from 'react';

const Landing = () => {
	// Customizable event details
	const eventDetails = {
		date: "Tuesday, 29th April",
		title: "Zero Knowledge Day",
		tagline: "Demystifying Zero Knowledge proofs",
		sessions: [
			{
				title: "ZK Mechanics & Primitives",
				points: [
					"Core concepts behind zero-knowledge proofs",
					"Key primitives and practical applications in blockchain"
				]
			},
			{
				title: "The Math & Inner Workings",
				points: [
					"Mathematical foundations made accessible",
					"Building intuition behind homomorphic encryption"
				]
			},
			{
				title: "Building with Noir",
				points: [
					"Deep dive into the Noir language",
					"Step-by-step circuit building walkthrough"
				]
			},
			{
				title: "From Circuit to Deployment",
				points: [
					"End-to-end implementation workflow",
					"On-chain deployment & frontend integration"
				]
			}
		]
	};

	return (
		<div className="bg-black min-h-screen text-white font-sans">
			{/* Header */}
			<header className="w-full py-4 px-6 flex justify-between items-center">
				<div className="flex items-center">
					<div className="flex items-center justify-center mr-3">
						<img src="https://zuafrique.com/images/logo.png" alt="ZuAfrique Logo" className="w-12 h-12" />
					</div>
					<span className="text-white text-2xl font-bold">ZUAFRIQUE</span>
				</div>
				<div>
					<div className="border border-orange-500 text-orange-500 rounded-full px-6 py-2">
						{eventDetails.title}
					</div>
				</div>
			</header>

			{/* Announcement Bar */}
			<div className="w-full bg-orange-500 py-4">
				<div className="max-w-6xl mx-auto px-6">
					<p className="text-black font-semibold text-xl">
						{eventDetails.date} - {eventDetails.tagline}
					</p>
				</div>
			</div>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
				{/* Left Section - Main Heading */}
				<div className="lg:w-1/2">
					<h1 className="text-6xl font-black mb-6">
						<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
							Zero<br />Knowledge<br />Day
						</span>
					</h1>

					<p className="text-lg mb-8">
						Join us for an immersive day exploring zero-knowledge technology. Learn from fundamentals to practical applications in a collaborative environment designed for both beginners and experts.
					</p>

					<a
						href="#register"
						className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-8 py-3 text-black font-bold text-lg"
					>
						Register Now
					</a>
				</div>

				{/* Right Section - Africa Image and Sessions */}
				<div className="lg:w-1/2 relative">
					<div className="absolute inset-0 flex justify-center">
						<img
							src="https://zuafrique.com/images/website/landing/africa.svg"
							alt="Africa"
							className="w-full h-full object-contain opacity-50"
						/>
					</div>
					<div className="relative z-10 space-y-6">
						<h2 className="text-2xl font-bold text-orange-400 mb-4">Sessions</h2>

						{eventDetails.sessions.map((session, index) => (
							<div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
								<h3 className="text-xl font-bold text-orange-400 mb-2">{session.title}</h3>
								<ul className="space-y-1">
									{session.points.map((point, idx) => (
										<li key={idx} className="flex items-start">
											<span className="text-orange-400 mr-2">•</span>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						))}

						<div className="mt-8 p-4 bg-gray-900 rounded-lg">
							<h3 className="text-xl font-bold text-orange-400 mb-2">Who Should Attend?</h3>
							<p>Developers, blockchain enthusiasts, privacy advocates, and anyone curious about the future of digital privacy technology.</p>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="w-full bg-gray-900 py-6">
				<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 mb-4 md:mb-0">Organized by Shramee @ ZuAfrique</p>
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