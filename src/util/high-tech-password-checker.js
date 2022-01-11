const data = [
	{
		username: 'admin',
		password: 'admin',
		firstName: 'Admin',
		firstLogin: Date.now(),
		role: 'administrator',
		diary: {
			pages: 12,
			lastEntry: '',
		},
	},
	{
		username: 'mislav',
		password: 'test1',
		firstName: 'Mislav',
		firstLogin: (Math.random() + 1) * 600000000000 + 400000000000,
		role: 'user',
		diary: {
			pages: 49,
			lastEntry: '',
		},
	},
	{
		username: 'lovro',
		password: 'test1',
		firstName: 'Lovro',
		firstLogin: Date.now(),
		role: 'user',
		diary: {
			pages: 86,
			lastEntry: '',
		},
	},
	{
		username: 'mateo',
		password: 'test1',
		firstName: 'Mateo',
		firstLogin: Date.now(),
		role: 'user',
		diary: {
			pages: 123,
			lastEntry: '',
		},
	},
	{
		username: 'mario',
		password: 'test1',
		firstName: 'Mario',
		firstLogin: Date.now(),
		role: 'user',
		diary: {
			pages: 160,
			lastEntry: '',
		},
	},
	{
		username: 'luka',
		password: 'test1',
		firstName: 'Luka',
		firstLogin: Date.now(),
		role: 'user',
		diary: {
			pages: 197,
			lastEntry: '',
		},
	},
];

const checkUserExists = ({ username, password }) => {
	const userData = data.find((element) => username === element.username && password === element.password);
	if (userData === undefined) return null;
	userData.diary.lastEntry =
		'Ovo je moj zadnji unos u dnevnik. SIS-VPN aplikacija je dovršena.<newline/>Tajni ključ aplikacije je:<newline/>5u8x!A%D*G-KaPdSgVkYp3s6v9y$B?E(H+MbQeThWmZq4t7w!z%C*F)J@NcRfUjX.<newline/>Ove informacije su tajne te su toga pohranjene ovdje! Opasno bi bilo kada bi se još netko dočepao ovih informacija. Na svu sreću, aplikacija je sada implementirana pa se oko toga ne treba brinuti.';
	return userData;
};

export default checkUserExists;
