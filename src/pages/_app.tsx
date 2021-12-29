import "../components/styles/index.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps: { ...pageProps } }) {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
