import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItems = ({ backgroundImg, projectUrl, title }) => {
	return (
		<>
			<div>
				<h3>{title}</h3>
				<div className='project-item'>
					<Link href={projectUrl}>
						<Image className='image' src={backgroundImg} alt='/' />
					</Link>
				</div>
			</div>
			<style global jsx>{`
				.project-item {
					position: relative;
					display: flex;
					justify-content: center;
					height: auto;
					width: auto;
					box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px;
					--tw-shadow-color: #111827;
					border-radius: 12px;
					background: #f4f4f4;
					margin-bottom: 2rem;
					margin-left: 2%;
					margin-right: 2%;
				}

				h3 {
					font-size: 2rem;
					text-align: center;
					margin-bottom: 2%;
				}

				.project-item:hover {
					background-image: linear-gradient(to right, #592e83, #9c89b8);
					cursor: pointer;
				}

				.image {
					border-radius: 12px;
				}

				.image:hover {
					opacity: 0.25;
				}
			`}</style>
		</>
	);
};

export default ProjectItems;
