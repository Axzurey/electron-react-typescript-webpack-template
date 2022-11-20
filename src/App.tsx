import * as React from 'react'
import { Counter } from './components/Counter';

export default function App() {

	document.body.style.overflow = "hidden" //no more scrolly wolly
	document.body.style.height = '100%';

	return (
		<div>
			<Counter/>
		</div>
	)
}