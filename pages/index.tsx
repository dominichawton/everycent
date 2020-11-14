import { Flex, Heading } from '@chakra-ui/core';
import Head from 'next/head';
import * as React from 'react';
import Layout from '../components/Layout';
import auth0 from '../utils/auth0';

function Home({ user }) {
	return (
		<>
			<Head>
				<title>Home | EveryCent</title>
				<link rel="stylesheet" href="https://use.typekit.net/wmh7yoi.css" />
			</Head>
			<Layout user={user}>
				<Flex flexDir="column" justify="center" align="center" w="100%" h="100%" flexGrow={2}>
					<Heading as="h1" size="2xl" mb={6}>
						Track your net worth
					</Heading>
					<Heading
						as="h3"
						size="lg"
						fontWeight="500"
						w="50%"
						textAlign="center"
						lineHeight="1.5"
						color="gray.500"
					>
						Personal Finance Dashboard
					</Heading>
				</Flex>
			</Layout>
		</>
	);
}

export default Home;

export const getServerSideProps = async ({ req, res }) => {
	if (typeof window === 'undefined') {
		let user;
		try {
			const response = await auth0.getSession(req);
			user = response.user;
		} catch (err) {
			return {
				props: {},
			};
		}

		if (!user) {
			res.writeHead(302, {
				Location: '/api/login',
			});
			res.end();
			return;
		}

		return { props: { user } };
	}
};
