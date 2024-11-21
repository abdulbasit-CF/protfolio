import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: "Python is a versatile programming language renowned for its readability and simplicity, making it an ideal choice for both beginners and experienced developers. Its vast ecosystem of libraries and frameworks enables a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, and automation. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. The language's strong community support and extensive documentation facilitate learning and problem-solving. With its cross-platform capabilities, Python can run on various operating systems, including Windows, macOS, and Linux. For more information, visit the [official Python website](https://www.python.org/).",
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: "JavaScript is a dynamic and powerful programming language that is essential for creating interactive web applications. With its ability to manipulate HTML and CSS, JavaScript allows developers to create responsive and dynamic user interfaces that enhance user experience. The language supports event-driven, functional, and imperative programming styles, making it versatile for various applications. JavaScript is also the backbone of popular front-end frameworks like React, Angular, and Vue.js, which streamline web development processes. Additionally, with the advent of Node.js, JavaScript can also be used for server-side programming, allowing developers to build full-stack applications. For more information, visit the [official JavaScript page](https://developer.mozilla.org/en-US/docs/Web/JavaScript).",
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: "TypeScript is a powerful superset of JavaScript that introduces static typing, enabling developers to catch errors early in the development process. It enhances the JavaScript experience by providing robust tooling and improved code quality, making it particularly beneficial for large-scale applications. TypeScript's compatibility with existing JavaScript code allows developers to gradually adopt it in their projects without the need for a complete rewrite. The language supports advanced features like interfaces, generics, and enums, facilitating better design and organization of code. TypeScript is widely used in conjunction with popular frameworks like Angular and React, providing a strong foundation for developing complex applications. For more information, visit the [official TypeScript website](https://www.typescriptlang.org/).",
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: "CSS (Cascading Style Sheets) is a fundamental technology for web development that controls the visual appearance and layout of web pages. By separating content from design, CSS allows developers to maintain cleaner and more manageable HTML code. It provides powerful styling capabilities, including the ability to control colors, fonts, spacing, and positioning of elements. CSS also enables responsive design through media queries, allowing websites to adapt to different screen sizes and devices. With the advent of CSS frameworks like Bootstrap and Tailwind, developers can rapidly prototype and build aesthetically pleasing interfaces. For more information, visit the [official CSS page](https://www.w3.org/Style/CSS/).",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It forms the backbone of all web pages, providing the basic structure for text, images, links, and other multimedia elements. HTML elements are represented by tags that define their role and structure, allowing browsers to render the content appropriately. HTML also supports semantic markup, enhancing accessibility and search engine optimization (SEO). With the evolution of HTML5, developers gained access to new elements and APIs that enable advanced features such as audio, video, and interactive forms. For more information, visit the [official HTML page](https://developer.mozilla.org/en-US/docs/Web/HTML).",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'orange',
		description: "Bootstrap is a widely-used front-end framework designed to streamline the development of responsive and mobile-first websites. It offers a collection of pre-designed components and CSS classes that allow developers to create visually appealing and consistent user interfaces quickly. Bootstrap utilizes a grid system, which simplifies layout management and ensures compatibility across various devices and screen sizes. Additionally, the framework supports customization through its Sass variables, enabling developers to tailor styles to their specific needs. With extensive documentation and a large community, Bootstrap provides the resources necessary to help developers effectively implement its features. For more information, visit the [official Bootstrap website](https://getbootstrap.com/).",
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description:  "Tailwind CSS is a utility-first CSS framework that revolutionizes how developers approach styling in web development. Unlike traditional CSS frameworks that provide predefined components, Tailwind offers low-level utility classes that enable developers to construct custom designs directly in their markup. This approach encourages rapid prototyping and results in cleaner, more maintainable code. Tailwind's extensive customization options allow developers to define their design system, ensuring consistency across their applications. With built-in responsive design features, Tailwind makes it easy to create adaptable interfaces for any screen size. For more information, visit the [official Tailwind CSS website](https://tailwindcss.com/).",
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'mui',
		color: 'blue',
		description: "MUI (Material-UI) is a popular React UI framework that implements Google\'s Material Design principles, providing a rich library of customizable components. MUI simplifies the process of creating responsive, modern user interfaces with its extensive set of pre-designed elements, including buttons, dialogs, and navigation menus. Its theming capabilities allow developers to adapt the look and feel of applications to match branding guidelines or personal preferences easily. The framework's commitment to accessibility ensures that applications built with MUI are usable by all individuals, regardless of their abilities. With comprehensive documentation and community support, MUI is an excellent choice for React developers seeking to enhance their projects. For more information, visit the [official MUI website](https://mui.com/).",
		logo: Assets.MUI,
		name: 'MUI',
		category: 'library'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: "React is a powerful JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where performance and responsiveness are crucial. With its component-based architecture, React allows developers to create reusable UI components, which enhances maintainability and scalability. The library employs a virtual DOM, which optimizes rendering and improves application speed by minimizing direct interactions with the actual DOM. React's ecosystem is rich with tools and libraries, such as React Router for routing and Redux for state management, enabling developers to build complex applications with ease. Additionally, the extensive community support provides a wealth of resources and best practices for developers. For more information, visit the [official React website](https://reactjs.org/).",
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: "Django is a high-level Python web framework that emphasizes rapid development and clean, pragmatic design. With its batteries-included philosophy, Django provides a comprehensive suite of tools and features, including an admin interface, an ORM for database management, and built-in security measures to protect applications. The framework promotes the DRY (Don\'t Repeat Yourself) principle, encouraging developers to write reusable and modular code. Django is particularly well-suited for building robust web applications quickly, making it a popular choice among startups and enterprises alike. Its vibrant community contributes a wealth of plugins and extensions, allowing developers to easily integrate additional functionality into their projects. For more information, visit the [official Django website](https://www.djangoproject.com/).",
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'green',
		description: "Flask is a lightweight WSGI web application framework in Python that is designed to make getting started quick and easy, while also being highly extensible. Flask provides the essentials for web development, allowing developers to add libraries and tools as needed to suit their project requirements. Its simplicity and flexibility make it an ideal choice for small to medium-sized applications, while its modular design allows for easy integration with various extensions. Flask's built-in development server and debugger streamline the development process, enabling rapid prototyping and testing. The extensive documentation and supportive community make Flask a popular option for developers seeking a straightforward yet powerful framework. For more information, visit the [official Flask website](https://flask.palletsprojects.com/).",
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'celery',
		color: 'green',
		description: "Celery is an open-source distributed task queue system written in Python that allows developers to handle asynchronous workloads with ease. It is designed to handle millions of tasks a day, making it suitable for applications that require high scalability and performance. Celery integrates seamlessly with various message brokers, such as RabbitMQ and Redis, to manage task execution and communication between workers. The framework supports task scheduling, periodic tasks, and a wide range of execution options, giving developers flexibility in managing background jobs. With its robust community and extensive documentation, Celery is a popular choice for building efficient, scalable applications. For more information, visit the [official Celery website](https://docs.celeryproject.org/en/stable/).",
		logo: Assets.Celery,
		name: 'Celery',
		category: 'library'
	}),
	defineSkill({
		slug: 'postgreSQL',
		color: 'green',
		description: "PostgreSQL is an advanced open-source relational database management system (RDBMS) that emphasizes extensibility and standards compliance. Renowned for its powerful features, PostgreSQL supports a wide array of data types and offers advanced capabilities such as full-text search, GIS (Geographic Information System) support, and JSON data storage. Its robust transaction management and concurrency control ensure data integrity and reliability in high-demand applications. PostgreSQL's commitment to SQL standards and active development community make it a preferred choice for developers seeking a feature-rich database solution. With extensive documentation and a variety of extensions available, PostgreSQL caters to both small and large-scale applications. For more information, visit the [official PostgreSQL website](https://www.postgresql.org/).",
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: "MySQL is a widely-used open-source relational database management system (RDBMS) known for its reliability, ease of use, and strong performance. It supports various storage engines, allowing developers to choose the best options for their applications based on performance and data integrity requirements. MySQL’s structured query language (SQL) capabilities enable developers to perform complex queries and manage large datasets efficiently. The database system is designed to handle high-demand applications, making it suitable for both small projects and large enterprise solutions. With a vibrant community and extensive documentation, MySQL provides the resources necessary for developers to succeed. For more information, visit the [official MySQL website](https://www.mysql.com/).",
		logo: Assets.MYSQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'green',
		description: "Redis is an in-memory data structure store, used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more. Redis is known for its high performance and flexibility, making it suitable for real-time analytics, caching, and queuing tasks in applications. With built-in replication, persistence, and high availability, Redis has become a popular choice for building scalable applications. For more information, visit the <a href='https://redis.io/documentation' target='_blank'>official Redis documentation</a>.",
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'green',
		description: "Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerization technology. By encapsulating applications and their dependencies within containers, Docker ensures consistent environments across various stages of development and production. This approach enhances portability and scalability, making it easier for teams to manage complex applications. Docker’s robust ecosystem, including Docker Hub for sharing images and Docker Compose for managing multi-container applications, further streamlines the development process. With an active community and extensive documentation, Docker has become an essential tool for modern DevOps practices and microservices architectures. For more information, visit the [official Docker website](https://www.docker.com/).",
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'scrapy',
		color: 'purple',
		description: "Scrapy is an open-source web crawling framework written in Python. It is designed to extract data from websites and process it as needed. Scrapy provides a fast, high-level interface for web scraping, allowing developers to build spiders that can navigate websites, handle requests, and manage data extraction efficiently. With its extensive ecosystem of plugins and middleware, Scrapy is widely used for web scraping, data mining, and building data-driven applications. For more information, visit the <a href='https://docs.scrapy.org/en/latest/' target='_blank'>official Scrapy documentation</a>.",
		logo: Assets.Scrapy,
		name: 'Scrapy',
		category: 'framework'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: 'Firebase is a comprehensive platform developed by Google that provides a suite of tools for building and managing mobile and web applications. It offers a variety of services, including real-time databases, authentication, cloud functions, and hosting, enabling developers to focus on building applications without worrying about backend infrastructure. Firebase’s easy integration with popular frameworks and its extensive documentation make it accessible for developers of all skill levels. With features like analytics and performance monitoring, Firebase helps teams optimize their applications and enhance user experiences. For more information, visit the [official Firebase website](https://firebase.google.com/).',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vite',
		color: 'cyan',
		description: "Vite is a modern build tool that provides a fast and efficient development experience for web applications. It leverages native ES modules in the browser, enabling lightning-fast hot module replacement (HMR) for rapid feedback during development. Vite's optimized build process bundles your application for production, ensuring high performance and smaller file sizes. With support for various front-end frameworks like Vue, React, and Preact, Vite simplifies the setup and configuration of modern web projects. For more information, visit the <a href='https://vitejs.dev/guide/' target='_blank'>official Vite documentation</a>.",
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jest',
		color: 'purple',
		description: "Jest is a delightful JavaScript testing framework developed by Facebook, designed for simplicity and ease of use. It supports unit testing, integration testing, and snapshot testing, allowing developers to test their applications effectively. Jest provides a rich API, built-in test runner, and powerful mocking capabilities, making it a popular choice for testing React applications and other JavaScript projects. For more information, visit the <a href='https://jestjs.io/docs/getting-started' target='_blank'>official Jest documentation</a>.",
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'unittests',
		color: 'blue',
		description: "UnitTest is a built-in testing framework in Python that provides tools for writing and running tests for individual units of code, such as functions or methods. It follows a test-driven development (TDD) approach, allowing developers to create test cases that ensure their code behaves as expected. UnitTest supports various assertions, test discovery, and test organization, making it a fundamental part of Python development. For more information, visit the <a href='https://docs.python.org/3/library/unittest.html' target='_blank'>official UnitTest documentation</a>.",
		logo: Assets.UNITTEST,
		name: 'Unit Tests',
		category: 'test'
	}),
	defineSkill({
		slug: 'django-orm',
		color: 'green',
		description: "Django ORM (Object-Relational Mapping) is a powerful feature of the Django web framework that allows developers to interact with databases using Python code instead of SQL. It provides a high-level abstraction for database operations, enabling developers to define models, query data, and manage database migrations easily. Django ORM supports various database backends and simplifies the process of building data-driven applications. For more information, visit the <a href='https://docs.djangoproject.com/en/stable/topics/db/models/' target='_blank'>official Django ORM documentation</a>.",
		logo: Assets.DJANGO_ORM,
		name: 'Django ORM',
		category: 'orm'
	}),
	defineSkill({
		slug: 'sqlalchemy',
		color: 'blue',
		description: "SQLAlchemy is a popular SQL toolkit and Object-Relational Mapping (ORM) library for Python. It provides a flexible and efficient way to interact with relational databases using Python objects. SQLAlchemy allows developers to define database schemas, construct queries, and manage transactions while providing a high-level abstraction over SQL. Its powerful features and extensive documentation make it a preferred choice for database management in Python applications. For more information, visit the <a href='https://docs.sqlalchemy.org/en/14/' target='_blank'>official SQLAlchemy documentation</a>.",
		logo: Assets.SQL_ORM,
		name: 'SQLAlchemy',
		category: 'orm'
	}),
	defineSkill({
		slug: 'communication',
		color: 'blue',
		description: 'Communication is key in development, ensuring that all team members understand project goals, timelines, and tasks. Effective communication skills are essential in the tech industry, especially when collaborating with clients and team members. This includes the ability to articulate complex technical concepts clearly, actively listen to client requirements, and provide constructive feedback. Strong communication fosters collaboration, aligns project goals, and ensures that client expectations are met throughout the development process.',
		logo: Assets.COMMUNICATION,
		name: 'Communication',
		category: 'soft'
	}),
	defineSkill({
		slug: 'problem-solving',
		color: 'green',
		description: 'Problem-solving skills are crucial in the tech industry, as developers often face complex challenges that require analytical thinking and creativity. The ability to break down problems into manageable components, identify root causes, and develop effective solutions is vital for successful project execution. This skill set enables developers to troubleshoot issues, optimize performance, and adapt to changing requirements.',
		logo: Assets.PROBLEM_SOLVING,
		name: 'Problem-Solving',
		category: 'soft'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description: "Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and manage project history. With features like branching, merging, and conflict resolution, Git enables teams to work simultaneously on different features without interfering with each other's work. Its widespread adoption and integration with various tools make it an essential part of modern software development workflows. For more information, visit the official <a href='https://git-scm.com/doc'>Git documentation</a>.",
		logo: Assets.GIT,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'github',
		color: 'black',
		description: "GitHub is a web-based platform for version control and collaboration using Git. It provides a user-friendly interface for managing Git repositories, allowing developers to host and review code, manage projects, and collaborate with others. GitHub also offers features such as issue tracking, pull requests, and CI/CD integrations, making it a popular choice for open-source projects and team collaboration. For more information, visit the official <a href='https://docs.github.com/en'>GitHub documentation</a>.",
		logo: Assets.GITHUB,
		name: 'GitHub',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: "Visual Studio Code (VSCode) is a popular source-code editor developed by Microsoft. It offers a rich set of features, including debugging support, syntax highlighting, IntelliSense, and Git integration. With a vast marketplace of extensions, VSCode can be customized for various programming languages and frameworks, making it a versatile choice for developers. For more information, visit the official <a href='https://code.visualstudio.com/docs'>VSCode documentation</a>.",
		logo: Assets.VSCODE,
		name: 'VSCode',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'postman',
		color: 'orange',
		description: "Postman is a collaboration platform for API development that provides a suite of tools for building, testing, and documenting APIs. With its user-friendly interface, developers can send requests to APIs, inspect responses, and automate testing processes. Postman also offers features for team collaboration, including shared workspaces and version control, making it easier to manage API workflows. For more information, visit the official <a href='https://learning.postman.com/docs/introduction/overview/'>Postman documentation</a>.",
		logo: Assets.POSTMAN,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'slack',
		color: 'purple',
		description: "Slack is a collaboration hub that connects teams and tools in a unified platform. It provides features for real-time messaging, file sharing, and integration with various applications, enabling teams to communicate effectively and stay organized. Slack’s channels and threads facilitate focused discussions, while its robust API allows developers to build custom integrations and automate workflows. For more information, visit the <a href='https://api.slack.com/' target='_blank'>official Slack documentation</a>.",
		logo: Assets.SLACK,
		name: 'Slack',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'pycharm',
		color: 'purple',
		description: "PyCharm is an integrated development environment (IDE) for Python developed by JetBrains. It provides a wide range of features, including code completion, debugging, testing support, and integration with version control systems. PyCharm also offers powerful tools for web development, data science, and scientific computing, making it a favorite among Python developers. For more information, visit the official <a href='https://www.jetbrains.com/pycharm/learn/'>PyCharm documentation</a>.",
		logo: Assets.PYCHARM,
		name: 'PyCharm',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'drf',
		color: 'blue',
		description: "Django Rest Framework (DRF) is a powerful toolkit for building Web APIs in Django. It simplifies the process of creating RESTful web services by providing a flexible and customizable framework for serialization, authentication, and permissions. DRF adheres to the principles of REST and promotes best practices for API design. With its easy-to-use serializers and viewsets, developers can quickly create APIs that are both robust and maintainable. The framework also includes extensive documentation and a vibrant community, which contributes to a wealth of third-party packages and tools. For more information, visit the [official Django Rest Framework website](https://www.django-rest-framework.org/).",
		logo: Assets.DRF,
		name: 'Django Rest Framework',
		category: 'framework'
	}),
	defineSkill({
		slug: 'jwt',
		color: 'purple',
		description: "JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and information exchange in web applications, allowing for stateless authentication and minimizing the need for session storage on the server. The token consists of three parts: a header, a payload, and a signature, which ensures the integrity of the data. Its versatility and ease of use have made JWT a popular choice for modern web applications. For more information, visit the [official JWT website](https://jwt.io/).",
		logo: Assets.JWT,
		name: 'JWT',
		category: 'library'
	}),
	defineSkill({
		slug: 'rest-apis',
		color: 'blue',
		description: "REST (Representational State Transfer) APIs are a set of web service APIs that adhere to REST principles, allowing interaction between clients and servers via stateless HTTP requests. These APIs typically use standard HTTP methods such as GET, POST, PUT, DELETE, and PATCH for resource manipulation. REST APIs are widely used for their simplicity, scalability, and ease of integration, making them a cornerstone in modern web development.",
		logo: 'data:image/png;base64,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', // Direct URL for the REST API logo
		name: 'REST APIs',
		category: 'library' // Adjusted category for REST APIs
	})
	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
