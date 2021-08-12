import { Button, Select } from 'components/basic';
import { Label } from '@blueprintjs/core';
import clsx from 'clsx';
import { ButtonClasses } from 'components/basic/button';
import React from 'react';
import styles from './buttons-block.module.scss';
import './buttons-block.scss';
import { useState } from 'react';
import { ISelectValue } from 'components/basic/select/interface';
import { ChangeTheme } from 'components/basic/change-theme';

interface IButtonsBlockProps {}
export const ButtonsBlock = (props: IButtonsBlockProps) => {
	const [goToActiveValue, setGoToActiveValue] = useState({
		id: 1,
		title: 'Go to',
	});
	const [challengeActiveValue, setChallengeActiveValue] = useState({
		id: 1,
		title: 'Go to',
	});
	return (
		<>
			<div className={styles.buttonsBlock}>
				<Button className={clsx(ButtonClasses.red, styles.button)}>Preview</Button>
				<div className="select">
					<Label>Go to</Label>
					<Select
						values={goToValues}
						activeValue={goToActiveValue}
						onChange={(newValue: ISelectValue) => setGoToActiveValue(newValue)}
					/>
				</div>
				<div className="select">
					<Label>Your challenge</Label>
					<Select
						values={challengeValues}
						activeValue={challengeActiveValue}
						onChange={(newValue: ISelectValue) => setChallengeActiveValue(newValue)}
					/>
				</div>
				<ChangeTheme />
			</div>
		</>
	);
};
const goToValues = [
	{
		id: 1,
		title: 'Go to',
	},
	{
		id: 2,
		title: 'Sopmethin else',
	},
];

const challengeValues = [
	{
		id: 1,
		title: 'New challenge',
	},
	{
		id: 2,
		title: 'Sopmethin else',
	},
];
