import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

const Main = () => {
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='py-4 text-gray-700'>
						Hi! I&apos;m{' '}
						<span className='text-[#9C89B8]'>Minjon Holtzhausen</span>
					</h1>
					<h1 className='py-2 text-gray-700'>An Aspiring Web Developer</h1>
					<p className='text-gray-600 max-w-[70%] m-auto py-4'>
						I completed the HyperionDev Fullstack Web Development course in
						August 2022 and am planning to enrol in the HyperionDev Software
						Engineering course in the beginning of 2023.
					</p>

					{/* icons container */}
					<div className='flex items-center max-w-[330px] py-4 justify-between m-auto'>
						{/* LinkenIn profile */}
						<a
							href='https://www.linkedin.com/in/minjon-holtzhausen'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaLinkedinIn title='LinkedIn' />
							</div>
						</a>

						{/* GitHub profile */}
						<a
							href='https://github.com/MinjonH'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaGithub title='GitHub' />
							</div>
						</a>

						{/* Email */}
						<a
							href='mailto:minjon.holtzhausen@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<AiOutlineMail title='Email' />
							</div>
						</a>
						{/* Call or message */}
						<a href='tel:+27836029730'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<IoCallOutline title='Call or Message' />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
