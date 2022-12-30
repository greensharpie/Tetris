//Accessing physical file system
const fs = require('fs')

// Reading the file (Synchronous function)
/* const data = fs.readFileSync(file, char encoding); */
const data = fs.readFileSync('./whereDatasAreStored.txt', {
  encoding: 'utf8',
  flag: 'r'
})

const canvas = document.getElementById('board')

const ctx = canvas.getContext('2d')

ctx.canvas.width = COLS * BLOCK_SIZE
ctx.canvas.height = ROWS * BLOCK_SIZE

ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
