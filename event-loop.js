const f1 = () => console.log('f1')
const f2 = () => console.log('f2')
const f3 = () => console.log('f3')
const f4 = () => console.log('f4')
const f5 = () => console.log('f5')

f1()
f2()
setTimeout(() => {
    f4()
}, 0)
Promise.resolve().then(() => f5())
f3()