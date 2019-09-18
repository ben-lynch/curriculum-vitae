const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

// mock window.open/close
global.open = jest.fn()
global.close = jest.fn()
global.history.back = jest.fn()
