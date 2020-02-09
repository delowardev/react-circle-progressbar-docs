const uuid = (prefix = '', suffix = '') => {
    return prefix + Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8) + suffix
}
export default uuid