import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import auth0 from '../../utils/auth0';

function Index({ user }) {
	return (
		<Layout user={user}>
			<Flex flexDir="column" justify="center" align="flex-start">
				<Heading size="md" as="h1" mt={12}>
					Net Worth
				</Heading>
			</Flex>
		</Layout>
	);
}

export default Index;

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
