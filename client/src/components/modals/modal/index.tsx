import React from 'react';
import { H3, Icon } from '@blueprintjs/core';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';

interface IModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	elements: {
		title: string;
		showCloseButton?: boolean;
		body: string | React.ReactNode;
		footer?: React.ReactNode;
	};
}

export const Modal: React.FC<IModalProps> = (props) => {
	const { title, body, footer, showCloseButton } = props.elements;

	ReactModal.setAppElement('#root');

	return (
		<ReactModal shouldFocusAfterRender={true} isOpen={props.isOpen} style={modalStyles}>
			<div className={styles.modalContent}>
				<div className={styles.header}>
					<H3 className={styles.title}>{title}</H3>
					{showCloseButton && (
						<Icon
							icon="cross"
							className={styles.closeIcon}
							size={25}
							onClick={() => props.setIsOpen(false)}
						/>
					)}
				</div>
				<div className={styles.body}>{body}</div>
				{footer ? <div className={styles.footer}>{footer}</div> : null}
			</div>
		</ReactModal>
	);
};

const modalStyles = {
	content: {
		maxWidth: '30%',
		maxHeight: '50%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '0',
		contentBoxSize: true,
	},
};
