import React from 'react';
import WeatherApp from '../public/assets/projects/weatherApp.png';
import ItunesApp from '../public/assets/projects/itunes-app.png';
import Minesweeper from '../public/assets/projects/minesweeper.png';
import NetflixClone from '../public/assets/projects/netflix-clone.png';
import ProjectItem from './ProjectItems';

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] m-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#9C89B8]'>
					Projects
				</p>
				<h2>What I&apos;ve Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Netflix Clone'
						bgImage={NetflixClone}
						projectURL='https://nextjs-netflix-app.vercel.app/'
					/>
					<ProjectItem
						title='Weather App'
						bgImage={WeatherApp}
						projectURL='https://weather-app010.herokuapp.com/'
					/>
					<ProjectItem
						title='Minesweeper'
						bgImage={Minesweeper}
						projectURL='https://reactjs-minesweeper.vercel.app/'
					/>
					<ProjectItem
						title='iTunes App'
						bgImage={ItunesApp}
						projectURL='https://itunes-api-server.herokuapp.com/'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
