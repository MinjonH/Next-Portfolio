import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<head>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-5HC8CCLQDN'
				></script>
				<script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'G-5HC8CCLQDN');
				</script>
			</head>
			<Navbar />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
