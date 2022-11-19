import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader'; //these 2 first

import * as React from 'react'
import { Counter } from './components/Counter';

setConfig({
  reloadHooks: false,
  reloadHooksOnBodyChange: false
} as any);

function App() {

	document.body.style.overflow = "hidden" //no more scrolly wolly
	document.body.style.height = '100%';

	return (
		<div>
			This is a template react-typescript-electron-app!
			Change my components and watch me reload! or
			<Counter/>
		</div>
	)
}

export default hot(App); //this is require to keep the state of hooks after hot-reloading