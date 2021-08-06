export const CODE_ERRORS = {
	CLAN_NAME_IS_TAKEN: (name: string) => ({ message: `Clan name: ${name} is already taken.`, status: 401 }),
	NO_CLAN: { message: 'You have no clan', status: 401 },
	IN_CLAN: { message: 'You is already in clan', status: 401 },
	NO_RECORD: { message: 'there is no such record', status: 400 },
};
