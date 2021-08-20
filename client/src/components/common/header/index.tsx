import React, { useState } from 'react';
import { Avatar, Label } from 'components';
import styles from './header.module.scss';
import bellImg from 'assets/icons/header/bell.svg';

export interface IHeaderProps {
	name: string;
	rank: number;
	notificationCounter: number;
	mark: number;
	avatar?: string;
	listItems: Array<IListItem>;
}

interface IListItem {
	icon: React.ElementType;
	text: string;
	id: string;
	onClick?: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
	const [isListVisible, setListVisibility] = useState(false);

	const changeVisible = () => {
		setListVisibility(!isListVisible);
	};

	const getListItem = ({ icon: Icon, text, id, onClick = () => {} }: IListItem) => {
		return (
			<li
				className={styles.navigationItem}
				key={id}
				onClick={() => {
					onClick();
					changeVisible();
				}}
			>
				<div className={styles.navigationLink}>
					<Icon className={styles.icon} />
					<span>{text}</span>
				</div>
			</li>
		);
	};

	const renderList = (items: IListItem[]) => {
		return <ul className={styles.navigationList}>{items.map((item: IListItem) => getListItem(item))}</ul>;
	};

	return (
		<div className={styles.header}>
			<div className={styles.bell}>
				<img src={bellImg} alt="bell" />
				<div className={styles.bellCounter}>
					<span>{props.notificationCounter}</span>
				</div>
			</div>
			<span className={styles.name}>{props.name}</span>
			<div className={styles.avatarCover}>
				<div onClick={changeVisible}>
					<Avatar avatar={props.avatar} size={61} color="#EC4179" />
				</div>

				{isListVisible && <div className={styles.navigation}>{renderList(props.listItems)}</div>}
			</div>
			<Label label={props.rank + ' rank'} color="#EC4179" />
			<Label label={props.mark} color="#EC4179" />
		</div>
	);
};

export default Header;
