// Compose functions right-to-left: compose(f, g)(x) === f(g(x))
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value)

export default compose
