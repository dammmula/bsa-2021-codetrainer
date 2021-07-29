import React from 'react';
import { Text } from '@blueprintjs/core';

import styles from './community-user.module.scss';

import defaultUserPhoto from './assets/user.svg';

import Rank from '../Rank';

interface Props {
	rank: number;
	imageSource: string;
	name: string;
}

const CommunityUser: React.FC<Props> = ({ imageSource, name, rank }) => {
	return (
		<div className={styles.userRow}>
			<Rank rank={rank} classList={styles.rank} />
			<img className={styles.userImage} src={imageSource || defaultUserPhoto} alt={name} />
			<Text className={styles.name}>{name}</Text>
		</div>
	);
};

export default CommunityUser;
