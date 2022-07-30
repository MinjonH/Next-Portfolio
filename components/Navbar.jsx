import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const [shadow, setShadow] = useState(false);

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
		<div className={shadow ? 'shadowContainer' : 'firstContainer'}>
			<div className='secondContainer'>
				<Image
					src='/../public/assets/navLogo.png'
					alt='logo'
					width='115'
					height='80'
				/>
				<div>
					<ul>
						<Link href='/'>
							<li>HOME</li>
						</Link>
						<Link href='/#about'>
							<li>ABOUT</li>
						</Link>
						<Link href='/#projects'>
							<li>PROJECTS</li>
						</Link>
					</ul>
				</div>
			</div>
			<style jsx>{`
					.shadowContainer {
						width: 100%;
						height: 20;
						box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
						z-index: 100;
						position: fixed;
                        background: #f4f6f7;
					}
					.firstContainer {
						width: 100%;
						height: 20;
						z-index: 100;
						position: fixed;
					}
					.secondContainer {
						display: flex;
						justify-content: space-between;
						justify-items: center;
						width: 100%;
						height: 100%;
						padding-left: 1rem;
						padding-right: 5rem;
					}

					li {
						font-size: sm;
						list-style: none;
						font-weight: 450;
						margin-left: 2.5rem;
                        font-size: large;
					}
					li:hover {
						border-bottom: 0.7px solid #592e83;
                        color: #592e83;
					}

					ul {
						display: flex;
                        padding-top: 10px;
					}
					}
				`}</style>
		</div>
	);
};

export default Navbar;
