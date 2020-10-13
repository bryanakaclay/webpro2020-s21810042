/* ------- Import/Export Module ------- */

import {hello, world, name, number} from './hello.js'
import default_function from './solo.js'
//kurung kurawal tidak dibutuhkan jika ada default pada module

hello ('John Doe')
world()
console.log(name)
console.log(number)
default_function()