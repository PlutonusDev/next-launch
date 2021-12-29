import React from "react";
import Head from "next/head";

const SEO: React.FC<SEOProps> = ({ description, keywords, title, site_name, site_url, twitter_handle }) => (
	<Head>
		<title>{title} | next-launch</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords?.join(", ")} />

		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:site_name" content={site_name} />
		<meta property="og:url" content={site_url} />
		<meta property="og:image" content="" />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:site" content={site_url} />
		<meta name="twitter:creator" content={twitter_handle} />
		<meta name="twitter:image" content="" />

		<link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
		<link rel="apple-touch-icon" type="image/png" href="/icons/icon-72x72.png" />
	</Head>
);

export interface SEOProps {
	description?: string,
	lang?: string,
	meta?: any[];
	keywords?: string[];
	title?: string;
	site_name?: string;
	site_url?: string;
	twitter_handle?: string;
}

SEO.defaultProps = {
	site_name: "next-launch",
	site_url: "https://staging.plutonus.dev/",
	twitter_handle: "@PlutonusDev",
	description: "`next-launch` combines React, Next.JS, Prisma, MongoDB, and Express + many flexible, ready-to-ship components to help you kickstart your next big project.",
	keywords: [
		"react", "next.js", "boilerplate", "express",
		"mongodb", "prisma", "components", "nextjs"
	]
}

export default SEO;
