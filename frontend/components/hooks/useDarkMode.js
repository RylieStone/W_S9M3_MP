import {useLocalStorage} from './useLocalStorage'
export function useDarkMode(state) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', state)
    return {darkMode, setDarkMode}
}