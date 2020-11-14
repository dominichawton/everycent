import { Heading } from '@chakra-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import auth0 from '../../utils/auth0';

function Assets({ user }) {
	return (
		<Layout user={user}>
			<Heading mt={12} as="h1" size="md">
				Assets
			</Heading>
		</Layout>
	);
}

export default Assets;

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
