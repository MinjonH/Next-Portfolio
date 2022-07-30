import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Main = () => {
	return (
		<div id='home' className='main'>
			<div className='inner'>
				<div>
					<h1 className='line1'>
						Hi, I'm <span>Minjon</span>
					</h1>
					<h1>A Junior Full-stack Developer</h1>
					<p>
						I am an aspiring Full-stack Web Developer and student. Along with
						studing part-time, I am employed as a full-time high-school tutor.
					</p>
					<div className='icons-box'>
						{/* LinkenIn profile */}
						<a
							href='https://www.linkedin.com/in/minjon-holtzhausen'
							target='_blank'
						>
							<div className='icon'>
								<BsLinkedin />
							</div>
						</a>

						{/* GitHub profile */}
						<a href='https://github.com/MinjonH' target='_blank'>
							<div className='icon'>
								<FaGithub />
							</div>
						</a>

						{/* Email */}
						<a href='mailto:minjon.holtzhausen@gmail.com' target='_blank'>
							<div className='icon'>
								<AiOutlineMail />
							</div>
						</a>
						{/* Call or message */}
						<a href='tel:+27836029730'>
							<div className='icon'>
								<AiOutlinePhone />
							</div>
						</a>
					</div>
				</div>
			</div>
			<style jsx>{`
				.main {
					width: 100%;
					height: auto;
					text-align: center;
				}
				.inner {
					max-width: 1240px;
					width: 100%;
					height: 100%;
					display: flex;
					margin-left: auto;
					margin-right: auto;
					justify-content: center;
				}

				.line1 {
					padding-top: 1rem;
					color: rgb(55 65 81);
					margin-top: 30%;
					margin-bottom: -3%;
				}

				a {
					color: #1f2937;
				}

				h1 {
					padding-top: 1rem;
					color: rgb(55 65 81);
				}
				span {
					color: #9c89b8;
				}
				p {
					color: rgb(113 113 122);
					padding-top: 0.5rem;
					padding-bottom: 1rem;
					font-size: 15pt;
					max-width: 70%;
					margin: auto;
				}

				.icons-box {
					align-items: center;
					justify-content: space-between;
					max-width: 400px;
					margin: auto;
					padding-top: 1rem;
					padding-bottom: 1rem;
					display: flex;
				}

				.icon {
					border-radius: 9999px;
					box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px;
					width: 4.5rem;
					height: 4.5rem;
					font-size: 20pt;
					padding-top: 1.3rem;
					background: #f4f4f4;
					cursor: pointer;
				}

				.icon:hover {
					color: rgb(89, 46, 131, 0.5);
				}
			`}</style>
		</div>
	);
};

export default Main;
