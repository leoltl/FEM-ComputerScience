import nav from './nav';
import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import makeImage from './image'
import imageUrl from './icon.jpg'

import './footer.css';
import './button.css';

const button = makeButton('hey')

button.style = makeColorStyle('cyan')

document.body.appendChild(button)
const image = makeImage(imageUrl);
document.body.appendChild(image)
document.body.appendChild(footer)

console.log(nav(), top, bottom, makeButton('hey'), makeColorStyle("salmon"));
