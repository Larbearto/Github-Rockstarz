import { Link } from 'react-router-dom'
import { GoLogoGithub } from 'react-icons/go'
import { TbHandRock } from 'react-icons/tb'
import PropTypes from 'prop-types'

function Navbar({ title }) {
	return (
		<nav className='navbar mb-12 shadow-lg bg-gradient-to-r from-red-900 via- to-black text-neutral-content '>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<GoLogoGithub className='inline pr-2 text-4xl' />
					<Link to='/' className='text-2xl font-extrabold align-middle'>
						{title}
					</Link>
					<TbHandRock className='inline pl-2 text-3xl' />
				</div>

				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link to='/home' className='btn btn-ghost btn-lg rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-lg rounded-btn'>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

Navbar.defaultProps = {
	title: 'Rockstarz',
}

Navbar.prototypes = {
	title: PropTypes.string,
}

export default Navbar
