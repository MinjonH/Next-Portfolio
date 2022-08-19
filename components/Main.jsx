import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='py-4 text-gray-700'>
						Hi, I&apos;m <span className='text-[#9C89B8]'>Minjon</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Junior Full-stack Developer</h1>
					<p className='text-gray-600 max-w-[70%] m-auto py-4'>
						I am an aspiring Full-stack Web Developer and student. Along with
						studing part-time, I am employed as a full-time high-school tutor.
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
								<FaLinkedinIn />
							</div>
						</a>

						{/* GitHub profile */}
						<a
							href='https://github.com/MinjonH'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<FaGithub />
							</div>
						</a>

						{/* Email */}
						<a
							href='mailto:minjon.holtzhausen@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<AiOutlineMail />
							</div>
						</a>
						{/* Call or message */}
						<a href='tel:+27836029730'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
