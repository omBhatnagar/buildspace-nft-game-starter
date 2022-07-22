const CONTRACT_ADDRESS = "0x2f2135c3a379CA9C2F4Aa43CC1f3E32097BA8021";

const transformCharacterData = (characterData) => {
	return {
		name: characterData.name,
		imageURI: characterData.imageURI,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		attackDamage: characterData.attackDamage.toNumber(),
	};
};

export { CONTRACT_ADDRESS, transformCharacterData };
