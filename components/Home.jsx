import React from 'react';

const FirstPage = () => {
	if (typeof window !== 'undefined') {
		const gallery = document.getElementById('gallery');

		window.onmousemove = (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			const xDecimal = mouseX / window.innerWidth;
			const yDecimal = mouseY / window.innerHeight;

			const maxX = gallery.offsetWidth - window.innerWidth;
			const maxY = gallery.offsetHeight - window.innerHeight;

			const panX = maxX * xDecimal * -1;
			const panY = maxY * yDecimal * -1;

			gallery.animate(
				{
					transform: `translate(${panX}px,${panY}px)`,
				},
				{ duration: 6000, fill: 'forwards', easing: 'ease' }
			);
		};
	}

	return (
		<div id='gallery'>
			<div className='tile bg-[#6f3bb3] w-[9%] h-[15%] left-[2%] top-[5%]'></div>
			<div className='tile bg-[#b89bb0] w-[8%] h-[5%] left-[20%] top-[2%]'></div>
			<div className='tile bg-[#a34ca3ce] w-[7%] h-[5%] left-[1%] top-[25%]'></div>
			<div className='tile bg-[#4f364f] w-[10%] h-[15%] left-[35%] top-[0%]'></div>
			<div className='tile bg-[#8c87a5] w-[5%] h-[8%] left-[15%] top-[15%]'></div>
			<div className='tile bg-[#ca858f] w-[10%] h-[7%] left-[30%] top-[32%]'></div>
			<div className='tile bg-[#d1c4cf] w-[6%] h-[8%] left-[50%] top-[23%]'></div>
			<div className='tile bg-[#e4bcb8] w-[5%] h-[7%] left-[65%] top-[3%]'></div>
			<div className='tile bg-[#888596] w-[5%] h-[5%] left-[70%] top-[18%]'></div>
			<div className='tile bg-[#c4b8ac] w-[7%] h-[9%] left-[15%] top-[30%]'></div>
			<div className='tile bg-[#f7d2f7] w-[9%] h-[10%] left-[79%] top-[30%]'></div>
			<div className='tile bg-[#c59abebb] w-[10%] h-[15%] right-[10%] bottom-[1%]'></div>
			<div className='tile bg-[#2c1e2c] w-[8%] h-[12%] right-[40%] bottom-[5%]'></div>
			<div className='tile bg-[#ddb5c9] w-[4%] h-[6%] right-[32%] bottom-[19%]'></div>
			<div className='tile bg-[#833483] w-[9%] h-[6%] right-[16%] bottom-[27%]'></div>
			<div className='tile bg-[#716671] w-[13%] h-[9%] right-[46%] bottom-[22%]'></div>
			<div className='tile bg-[#bb9abb] w-[7%] h-[4%] right-[55%] bottom-[10%]'></div>
			<div className='tile bg-[#8a728a] w-[10%] h-[15%] right-[32%] bottom-[30%]'></div>
			<div className='tile bg-[#d8c5be] w-[9%] h-[7%] right-[73%] bottom-[19%]'></div>
			<div className='tile bg-[#c9bed8] w-[6%] h-[9%] right-[80%] bottom-[2%]'></div>
			<div className='tile bg-[#685580] w-[10%] h-[14%] right-[75%] bottom-[35%]'></div>
			<div className='tile bg-[#aa6e87] w-[15%] h-[10%] right-[5%] top-[5%]'></div>
			<div className='tile bg-[#815fac] w-[6%] h-[4%] right-[40%] top-[12%]'></div>
			<div className='tile bg-[#aeb1da] w-[11%] h-[17%] right-[30%] top-[32%]'></div>
			<div className='tile bg-[#53567a] w-[11%] h-[7%] right-[9%] top-[52%]'></div>
			<div className='tile bg-[#c79dc3] w-[5%] h-[6%] right-[60%] top-[54%]'></div>
			<div className='tile bg-[#c79dc3] w-[11%] h-[15%] left-[3%] bottom-[16%]'></div>
		</div>
	);
};

export default FirstPage;
