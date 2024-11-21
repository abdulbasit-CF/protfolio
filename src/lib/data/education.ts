import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors - Computer Science',
		description: '',
		location: 'Islamabad, Pakistan',
		logo: Assets.BAHRIA_UNIVERSITY,
		name: '',
		organization: 'Bahria University',
		period: { from: new Date(2020, 0, 1), to: new Date(2024, 0, 0) },
		shortDescription: '',
		slug: 'bahria-university',
		subjects: ['C++','Object Oriented Programming', 'Data Structrues and Algorithms', 'Algebra', 'Python', 'Java', 'SQA', 'Web Development', 'Android Developemnt', 'Artifical Intelligence', 'Project Management',
			'SQL', 'Computer Architectrue and Assembly Language', 'Cryptography', 'Information Security', 'Analsysis of Algorithms'
		]
	},
	{
		degree: 'FSc - Pre-Engineering',
		description: '',
		location: 'Islamabad, Pakistan',
		logo: Assets.PUNJAB_COLLEGE,
		name: '',
		organization: 'Pubjab Group of Colleges',
		period: { from: new Date(2018, 0, 0), to: new Date(2020, 0, 0) },
		shortDescription: '',
		slug: 'punjab-college',
		subjects: ['Physics', 'Mathematics', 'Chemmistry']
	},
	{
		degree: 'Matric - Computer Science',
		description: '',
		location: 'Islamabad, Pakistan',
		logo: Assets.BAHRIA_COLLEGE,
		name: '',
		organization: 'Bahria Model College',
		period: { from: new Date(2016, 0, 1), to: new Date(2018, 0, 0)  },
		shortDescription: '',
		slug: 'bahria-college',
		subjects: ['Computer Science', 'Physics', 'Mathematics', 'Chemmistry']
	}
];

export const title = 'Education';
