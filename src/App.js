import './App.css';
import profilePic from './michael-profile-pic.jpeg';

import ProjectSection from './components/ProjectSection';

const projects = [
	{
		id: '1',
		projectImg:
			'https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg',
		title: 'Project 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores ea aspernatur vero, nam non, deleniti odit architecto itaque dignissimos earum. Quam inventore hic nisi in natus quae praesentium sint?',
	},
	{
		id: '2',
		projectImg:
			'https://bakingamoment.com/wp-content/uploads/2023/07/IMG_2051-ice-cream-cake.jpg',
		title: 'Project 2',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid facilis delectus iste! Labore ipsa magnam sint dolorem dolorum, quam laudantium ad facere aliquam. Amet voluptatem fugiat sed ipsum impedit error.',
	},
	{
		id: '3',
		projectImg:
			'https://beyondfrosting.com/wp-content/uploads/2019/03/Chewy-Chocolate-Chip-Cookies-139-2.jpg',
		title: 'Project 3',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam eaque consectetur quod cupiditate esse deleniti repellendus quo provident! Quisquam quod quibusdam porro obcaecati nostrum sapiente similique eius saepe molestias.',
	},
];

function App() {
	return (
		<div className='App'>
			<aside className='sidebar'>
				<h1>Michael Kleemoff</h1>
				<div className='profile-pic'>
					<img src={profilePic} alt='profile of me' className='profile-image' />
				</div>
				<ul>
					<li>
						<a href='#background'>Welcome</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#footer'>Contact Me</a>
					</li>
				</ul>
			</aside>

			<section id='background'>
				<h2>Background</h2>
				<p>
					I am a full-stack web development software engineer, currently
					enrolled in the Pursuit Fellowship program, an intensive 12 - month
					software engineering fellowship with a 9% acceptance rate
					headquartered in Long Island City, NY. I am pursuing a career in
					software engineering because since childhood, I have had a passion for
					technology, computers and programming. I see myself making important
					contributions for the betterment of society through software in areas
					such as education and healthy eating. My strengths are being able to
					work with a team to successfully complete projects, stay focussed to
					see the projects to their completion, attention to details and
					discipline. I am a supportive person and find myself frequently
					helping people that need my help. I also discovered recently after
					taking the Myers-Briggs personality test that my personality type is a
					logician, analyst and thinker type, which I agree with. Therefore,
					this new career choice in computer programming is a perfect match.
				</p>{' '}
				<p>
					In my previous career, I was a commercial baker. I enjoyed the hard
					work, challenge and baking great products. My preference is bread
					baking. I discovered that I have large amounts of stamina, focus and
					the ability to work hard and long to achieve goals and deadlines. Now
					I would like to apply some of these self-discoveries toward a new
					career in software engineering and full stack web development.
				</p>{' '}
				<p>
					When I am not coding or studying programming, I like to paint in
					acrylic. My style is mostly post impressionistic. I really like Van
					Gogh.
				</p>
				<div className='contact-me'>
					<a href='#footer'>Contact Me</a>
				</div>
			</section>

			{<ProjectSection projects={projects} />}

			<section id='skills'>
				<h2>Skills</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil libero
					animi nobis doloremque ea, quo sit provident temporibus voluptatibus
					earum unde? Cum iure ratione totam itaque facere dicta aliquid esse
					sunt distinctio tempora. Voluptate molestias quia, consectetur a
					similique ratione, mollitia molestiae nam atque perferendis quisquam
					iusto explicabo temporibus necessitatibus nemo! Obcaecati possimus
					nostrum blanditiis dolore sit nesciunt maiores nemo? Sit, eum at nemo
					vitae odit modi quod molestias expedita deleniti praesentium,
					assumenda est dolore cum tempora tenetur asperiores sapiente ab,
					facere minus ex provident? Perferendis voluptate quo fugit vitae sunt.
					Eum repellat veniam sit iste sapiente incidunt, aperiam ratione odio,
					vitae ullam harum ipsam? Reiciendis eligendi non distinctio
					consectetur alias officiis recusandae quisquam aperiam? Ut, tempore
					excepturi quis beatae, delectus, consequatur dicta fugiat ex ab sunt
					nemo consequuntur exercitationem maxime reprehenderit et accusamus
					odit. Aperiam, iure culpa! Unde cum pariatur nam dolores eveniet illum
					animi nobis repellat exercitationem voluptate obcaecati culpa
					voluptates quidem a vitae, recusandae iusto? Quibusdam et dignissimos
					numquam saepe, rem vel possimus blanditiis praesentium, quod excepturi
					sit ut temporibus asperiores mollitia libero accusamus suscipit minus
					pariatur impedit quasi, maiores officiis. Amet, est! Ipsum, eos.
					Eveniet amet excepturi, repellat provident illum optio aperiam
					possimus placeat nam nisi odio voluptatum et porro perspiciatis quos
					accusantium? Fugiat corrupti quidem expedita incidunt nobis odio atque
					temporibus est tempora cupiditate repudiandae molestias quas
					voluptatum quam, veritatis consequatur voluptate id soluta, ea
					necessitatibus, doloribus a. Aliquid doloremque illo sint, recusandae
					distinctio nobis blanditiis nesciunt qui fugiat voluptates tenetur
					nisi. Maiores blanditiis dolorem consequuntur? Ut totam ad nemo autem
					maxime iste libero? Incidunt blanditiis explicabo sunt harum velit
					ducimus culpa, nulla officia iste dolore cupiditate numquam ratione
					molestias quasi veritatis laborum exercitationem provident corrupti
					sed. Harum cupiditate minima laboriosam velit, non veritatis qui
					consequuntur fugiat impedit ex quibusdam itaque inventore est et
					voluptatem! Excepturi veritatis esse delectus, eum, quae aut amet
					alias, suscipit harum placeat sint architecto asperiores minima.
					Quidem cum magnam hic sint et delectus architecto nam, explicabo
					debitis facilis sunt animi mollitia eos blanditiis natus enim beatae
					laborum totam id consectetur dolorem similique qui quaerat.
					Necessitatibus laboriosam excepturi tempora vel! Inventore ipsum
					nesciunt quia sed id. Modi eaque incidunt pariatur odit voluptatibus!
					Amet et earum commodi animi officiis blanditiis in enim voluptate quod
					laborum! Et dolor aspernatur, in dignissimos perspiciatis numquam
					autem sapiente dolorem tempora fuga unde sint atque accusantium
					officiis quod corporis aperiam laboriosam pariatur earum corrupti?
					Nisi, facere minus.
				</p>
			</section>

			<footer id='footer'>
				<h2>Contact Me</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil libero
					animi nobis doloremque ea, quo sit provident temporibus voluptatibus
					earum unde? Cum iure ratione totam itaque facere dicta aliquid esse
					sunt distinctio tempora. Voluptate molestias quia, consectetur a
					similique ratione, mollitia molestiae nam atque perferendis quisquam
					iusto explicabo temporibus necessitatibus nemo! Obcaecati possimus
					nostrum blanditiis dolore sit nesciunt maiores nemo? Sit, eum at nemo
					vitae odit modi quod molestias expedita deleniti praesentium,
					assumenda est dolore cum tempora tenetur asperiores sapiente ab,
					facere minus ex provident? Perferendis voluptate quo fugit vitae sunt.
					Eum repellat veniam sit iste sapiente incidunt, aperiam ratione odio,
					vitae ullam harum ipsam? Reiciendis eligendi non distinctio
					consectetur alias officiis recusandae quisquam aperiam? Ut, tempore
					excepturi quis beatae, delectus, consequatur dicta fugiat ex ab sunt
					nemo consequuntur exercitationem maxime reprehenderit et accusamus
					odit. Aperiam, iure culpa! Unde cum pariatur nam dolores eveniet illum
					animi nobis repellat exercitationem voluptate obcaecati culpa
					voluptates quidem a vitae, recusandae iusto? Quibusdam et dignissimos
					numquam saepe, rem vel possimus blanditiis praesentium, quod excepturi
					sit ut temporibus asperiores mollitia libero accusamus suscipit minus
					pariatur impedit quasi, maiores officiis. Amet, est! Ipsum, eos.
					Eveniet amet excepturi, repellat provident illum optio aperiam
					possimus placeat nam nisi odio voluptatum et porro perspiciatis quos
					accusantium? Fugiat corrupti quidem expedita incidunt nobis odio atque
					temporibus est tempora cupiditate repudiandae molestias quas
					voluptatum quam, veritatis consequatur voluptate id soluta, ea
					necessitatibus, doloribus a. Aliquid doloremque illo sint, recusandae
					distinctio nobis blanditiis nesciunt qui fugiat voluptates tenetur
					nisi. Maiores blanditiis dolorem consequuntur? Ut totam ad nemo autem
					maxime iste libero? Incidunt blanditiis explicabo sunt harum velit
					ducimus culpa, nulla officia iste dolore cupiditate numquam ratione
					molestias quasi veritatis laborum exercitationem provident corrupti
					sed. Harum cupiditate minima laboriosam velit, non veritatis qui
					consequuntur fugiat impedit ex quibusdam itaque inventore est et
					voluptatem! Excepturi veritatis esse delectus, eum, quae aut amet
					alias, suscipit harum placeat sint architecto asperiores minima.
					Quidem cum magnam hic sint et delectus architecto nam, explicabo
					debitis facilis sunt animi mollitia eos blanditiis natus enim beatae
					laborum totam id consectetur dolorem similique qui quaerat.
					Necessitatibus laboriosam excepturi tempora vel! Inventore ipsum
					nesciunt quia sed id. Modi eaque incidunt pariatur odit voluptatibus!
					Amet et earum commodi animi officiis blanditiis in enim voluptate quod
					laborum! Et dolor aspernatur, in dignissimos perspiciatis numquam
					autem sapiente dolorem tempora fuga unde sint atque accusantium
					officiis quod corporis aperiam laboriosam pariatur earum corrupti?
					Nisi, facere minus.
				</p>
			</footer>
		</div>
	);
}

export default App;
