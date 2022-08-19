import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/navLogo.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#f4f6f7]'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl-px-16'>
				<Image src={NavLogo} alt='logo' width='115' height='80' />
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>

					{/* Sidenav */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						{/* Image container */}
						<div className='flex w-full items-center justify-between'>
							<Image src={NavLogo} alt='logo' width='85' height='50' />
							{/* Icon container */}
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='py-4 flex flex-col'>
							<ul className='uppercase'>
								<Link href='/'>
									<li className='py-4 text-sm'>Home</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>About</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>Skills</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>Projects</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>Contact</li>
								</Link>
							</ul>
							<div className='pt-40 uppercase tracking-widest text-[#9C89B8]'>
								<p>Let's Connect</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
										<FaLinkedinIn />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
