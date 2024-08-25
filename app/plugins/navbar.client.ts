export default defineNuxtPlugin((nuxtApp) => {
    const navBarState = useState('navbar', () => false)

    nuxtApp.hook('page:start', () => {
        navBarState.value = false
    })
})
