import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItems = ({ title, bgImage, projectURL }) => {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d87ff3] to-[#94317e]'>
			<Image
				className='rounded-xl group-hover:opacity-10'
				src={bgImage}
				alt='/'
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-white tracking-wider text-center pb-2'>
					{title}
				</h3>
				<Link href={projectURL}>
					<p className='text-center bg-white text-gray-700 rounded-lg font-bold cursor-pointer text-lg'>
						View
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItems;
