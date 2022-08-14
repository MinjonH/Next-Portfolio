import React from 'react';
import WeatherApp from '../public/assets/projects/weatherApp.png';
import ItunesApp from '../public/assets/projects/itunes-app.png';
import Minesweeper from '../public/assets/projects/minesweeper.png';
import NetflixClone from '../public/assets/projects/netflix-clone.jpg';
import ProjectItem from './ProjectItems';

const Projects = () => {
	return (
		<div id='projects' className='container'>
			<div className='inner'>
				<p className='about'>Projects</p>
				<h2>What I&apos;ve Built</h2>
				<div className='grid'>
					<ProjectItem
						title='Weather app'
						backgroundImg={WeatherApp}
						projectUrl='https://weather-app010.herokuapp.com/'
					/>
					<ProjectItem
						title='iTunes Search Api'
						backgroundImg={ItunesApp}
						projectUrl='https://itunes-api-server.herokuapp.com/'
					/>
					<ProjectItem
						title='Minesweeper'
						backgroundImg={Minesweeper}
						projectUrl='https://task13-minesweeper.herokuapp.com/'
					/>
					<ProjectItem
						title='Netflix Clone'
						backgroundImg={NetflixClone}
						projectUrl='https://netflix-clone-phi-neon.vercel.app/'
					/>
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
					margin-top: 10%;
					text-align: center;
				}

				h2 {
					text-align: center;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(2, minmax(0, 1fr));
				}
			`}</style>
		</div>
	);
};

export default Projects;
