import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about-img.jpg';

const About = () => {
	return (
		<div id='about' className='container'>
			<div className='grid'>
				<div className='left-side'>
					<p className='about'>About</p>
					<h2>Who I Am</h2>
					<p>
						I graduated high school in 2021, with no clue what career I was
						willing to pursue. The mere idea of studying another 4-10 years for
						a degree and then doing the same repetitive work day in and day out
						for the next 50 years had me struggling to commit to any specific
						career path.
					</p>
					<p>
						It didn&apos;t immediately occur to me that I could monetise on my
						computer skills, and I was also hesitant to commit a degree, which
						is why I was drawn to the HyperionDev bootcamp – it was not
						extremely long, and I could also do it part-time, since I already
						accepted a job offer as high-school tutor and was planning on
						working while studying.
					</p>
					<p>
						The bootcamp turned out to be the best decision I could have made,
						now I am confident and genuinely excited to becoming a developer. I
						am graduating the Full-stack Web Development bootcamp in August 2022
						and will be focusing on creating more projects and challenging
						myself to learn other technologies before starting the Software
						Development bootcamp in January 2023.
					</p>
					<Link href='/#projects'>
						<p className='link'>See some of my latest projects</p>
					</Link>
				</div>
				<div className='right-side'>
					<Image src={AboutImg} alt='/' />
				</div>
			</div>
			<style jsx>{`
				.about {
					color: #9984d4;
					font-weight: 450;
					font-size: 20pt;
					line-height: 1.75rem;
					text-transform: uppercase;
					letter-spacing: 0.1em;
				}

				.container {
					width: 100%;
					max-height: 100vh;
					display: flex;
					text-align: justify;
					padding: 0.5rem;
					padding-top: 15rem;
					padding-bottom: 4rem;
				}
				.grid {
					margin: auto;
					display: flex;
				}
				.left-side {
					margin-left: 14%;
					flex: 80%;
				}
				.right-side {
					width: 80rem;
					margin-left: 10%;
					padding-top: 6%;
					padding-bottom: 15rem;
					padding-right: 7%;
				}
				p {
					color: rgb(75 85 99);
					padding-top: 0.5rem;
					padding-bottom: 0.5rem;
				}

				.link {
					color: rgb(75 85 99);
					padding-top: 0.5rem;
					padding-bottom: 0.5rem;
					text-decoration: underline;
					cursor: pointer;
				}

				.link:hover {
					color: #9984d4;
				}
			`}</style>
		</div>
	);
};

export default About;
