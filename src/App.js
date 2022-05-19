import React from 'react'
import styles from './App.module.scss'
import './styles/main.scss'
import data from './data.js'

function App() {
	return (
		<div>
			<div className={styles.mainBox}>
				<div>
				<p>
					This is a collection of small but effective front-end projects geared
					towards improving and showcasing my front-end skills.
				</p>
					<p>
						Each of these is a project based on a design provided by the{' '}
						<a href="https://www.frontendmentor.io/">Frontend Mentor</a> website. This
						site provides professional designs and style guides from which developers
						can use their favorite toolchains to craft a front-end without hassling
						themselves with the design process.
					</p>
				</div>
			<main>
				<ol>
					{data.map((item, i) => (
						<li>
							<span>{`${(i + 1).toString()}) `}</span>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
				</ol>
			</main>
			</div>
		</div>
	)
}

export default App
