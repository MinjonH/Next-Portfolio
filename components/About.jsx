import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about-img.jpg';

const About = () => {
	return (
		<div id='about' className='w-full md:w-screen flex py-16 items-center'>
			{/* left container */}
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='text-[#9984D4] uppercase text-xl tracking-widest'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600 text-[15pt]'>
						I graduated high school in 2021, with no clue what career I was
						willing to pursue. The mere idea of studying another 4-10 years for
						a degree and then doing the same repetitive work day in and day out
						for the next 50 years had me struggling to commit to any specific
						career path.
					</p>
					<p className='py-2 text-gray-600 text-[15pt]'>
						It didn&apos;t immediately occur to me that I could monetise on my
						computer skills, and I was also hesitant to commit a degree, which
						is why I was drawn to the HyperionDev bootcamp – it was not
						extremely long, and I could also do it part-time, since I already
						accepted a job offer as high-school tutor and was planning on
						working while studying.
					</p>
					<p className='py-2 text-gray-600 text-[15pt]'>
						The bootcamp turned out to be the best decision I could have made,
						now I am confident and genuinely excited to becoming a developer. I
						am graduating the Full-stack Web Development bootcamp in August 2022
						and will be focusing on creating more projects and challenging
						myself to learn other technologies before starting the Software
						Development bootcamp in January 2023.
					</p>
					<Link href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							See some of my latest projects
						</p>
					</Link>
				</div>
				{/* right container */}
				<div className='w-full h-auto m-auto shadow-gray-400 rounded-xl felx items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image className='rounded-xl' src={AboutImg} alt='/' />
				</div>
			</div>
		</div>
	);
};

export default About;
