import React from 'react';
import Image from 'next/image';

const ProjectItems = ({
	title,
	bgImage,
	projectURL,
	aboutProject,
	languages,
}) => {
	return (
		<div className='relative items-center bg-[#f2f5f8] justify-center h-fit w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
			<Image className='rounded-xl' src={bgImage} alt='/' />
			<h3 className='text-2xl pt-2 tracking-wider text-center text-[#a981b4]'>
				{title}
			</h3>
			<p className='text-sm italic pb-4 text-gray-400'>{languages}</p>
			<p className='text-left'>{aboutProject}</p>
			<a href={projectURL} target='_blank'>
				<p className='text-center font-bold text-gray-800 hover:underline cursor-pointer text-sm  px-16 py-2'>
					View
				</p>
			</a>
		</div>
	);
};

export default ProjectItems;
