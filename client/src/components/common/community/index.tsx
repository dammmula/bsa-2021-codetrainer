import React from 'react';
import { Card, Text } from '@blueprintjs/core';

import CommunityUser from '../CommunityUser';

import styles from './community.module.scss';
import Button from '../Button/index';

interface User {
	id: string;
	rank: number;
	imageSource: string;
	name: string;
	clan: string;
	honor: number;
}

interface Props {
	users: User[];
}

const Community: React.FC<Props> = ({ users }) => {
	return (
		<div className={styles.community}>
			<Card>
				<Text tagName="h4" className={styles.communityHeader}>
					Community
				</Text>
				<Text className={styles.communityDescription}>
					You are automatically given an allegiance with anyone who is in the same clan as you. You can also
					become allies with other warriors by following each other or inviting new warriors to join.
				</Text>

				<div className={styles.communityTable}>
					<div className={styles.communityColumn}>
						<Text tagName="h5">User</Text>
						{users.map((user) => (
							<CommunityUser key={user.id} {...user} />
						))}
					</div>

					<div className={styles.communityColumn}>
						<Text tagName="h5">Clan</Text>

						{users.map((user) => (
							<Text key={user.id} className={styles.columnText}>
								{user.clan}
							</Text>
						))}
					</div>

					<div className={styles.communityColumn}>
						<Text tagName="h5">Honor</Text>

						{users.map((user) => (
							<Text key={user.id} className={styles.columnText}>
								{user.honor}
							</Text>
						))}
					</div>
				</div>
				<div className={styles.buttonsContainer}>
					<Button text="Add New Friend" classList={styles.addButton} />
					<Button text="Create New Clan" classList={styles.createButton} />
				</div>
			</Card>
		</div>
	);
};

export default Community;
