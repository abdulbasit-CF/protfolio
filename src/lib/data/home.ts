import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';
export const name = 'Abdul';
export const lastName = 'Basit';

export const description = "I am a full-stack developer specializing in Python (Flask, Django) and React, with expertise in REST API development, API integrations, and scalable web applications. My experience encompasses working with databases such as MySQL and PostgreSQL to create efficient, end-to-end solutions. I am proficient in implementing string authentication and authorization mechanisms to ensure secure user access and data protection within applications. This involves utilizing various methods to verify user identities and manage permissions effectively, thereby enhancing the overall security and functionality of the web applications I develop."

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/abdulbasit145' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/abdul-basit-dev/'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/profile.php?id=100012858904090'
	},
	{
		platform: Platform.Email,
		link: 'abdulbasitkhan145.45@gmail.com'
	}
];

export const skills = getSkills(
	'django',
	'celery',
	'reactjs',
	'js',
	'ts',
	'css',
	'html',
	'python',
	'bootstrap',
	'tailwind',
	'mui',
	'flask',
	'postgresql',
	'mysql',
	'redis',
	'docker',
	'scrapy',
	'firebase',
	'vite',
	'jest',
	'unittests',
	'django-orm',
	'sqlalchemy',
	'communication',
	'problem-solving',
	'git',
	'github',
	'vscode',
	'postman',
	'slack',
	'pycharm',
	'drf',
	'jwt'
);

