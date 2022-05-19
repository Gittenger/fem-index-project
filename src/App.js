import React from 'react'
import styles from './App.module.scss'
import './styles/main.scss'
import data from './data.js'

function App() {
	return (
		<div className={styles.App}>
			<div>
				<header>
					<p>
						This is a collection of small but effective front-end projects geared
						towards improving and showcasing my front-end skills.
					</p>
				</header>
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
