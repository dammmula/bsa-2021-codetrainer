import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import clsx from 'clsx';
import { Header } from './header';
import { IconTaskPageFullScreen } from 'common';
import { TabContent } from './tab-content';
import { ICreateTabsProps } from './types';

import styles from './styles.module.scss';

export const CreateTabs: React.FC<ICreateTabsProps> = ({ tabs, onChange }) => {
	const [tab, setTab] = useState<number>(0);
	const [fullScreen, setFullScreen] = useState<boolean>(false);

	const handleChangeTab = (tabNumber: number) => {
		setTab(tabNumber);
	};

	const handleFullScreen = () => {
		setFullScreen((state) => !state);
	};

	return (
		<div className={clsx(styles.root, fullScreen ? styles.edit__fullscreen : styles.edit)}>
			<Icon
				icon={IconTaskPageFullScreen.NAME}
				size={IconTaskPageFullScreen.SIZE}
				color={IconTaskPageFullScreen.COLOR}
				className={styles.icon}
				onClick={handleFullScreen}
			/>
			<Header tabs={tabs} onChange={handleChangeTab} />
			<div className={styles.panel}>
				<div />
				<div>
					<TabContent onChange={onChange} tab={tabs[tab]} />
				</div>
			</div>
		</div>
	);
};
