import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import AboutImg from '../public/assets/about-img.jpg';

const About = () => {
	return (
		<div className='w-full flex py-24 items-start'>
			<Head>
				<title>Minjon | About Me</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/icon.svg' />
			</Head>
			{/* left container */}
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<h2 className='py-4'>About Me</h2>
					<p className='py-2 text-gray-600 text-[15pt]'>
						I graduated high school, with no idea which career I was interested
						to pursue. The mere idea of studying another 4-10 years for a degree
						and then doing the same repetitive work day in and day out for the
						next 50 years had me struggling to commit to any specific career
						path.
					</p>
					<p className='py-2 text-gray-600 text-[15pt]'>
						It didn't immediately occur to me that I could monetise on my
						computer skills, and I was also hesitant to commit to a degree,
						which is why I was drawn to bootcamps.
					</p>
					<p className='py-2 text-gray-600 text-[15pt]'>
						The HyperionDev bootcamp turned out to be the best decision I could
						have made, now I am confident and genuinely excited to become a web
						developer. I have completed the Full-stack Web Development bootcamp
						in August 2022 and am currently challenging myself to learn more.
					</p>
					<Link href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							See some of my latest projects
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-gray-400 rounded-xl felx items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image className='rounded-xl' src={AboutImg} alt='/' />
				</div>
			</div>
		</div>
	);
};

export default About;