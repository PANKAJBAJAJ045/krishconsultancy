import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import App from './App.tsx'
import './style/styles.scss'

const appRoot: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(appRoot)
export function removeSpinners() {
    const spinner = document.getElementById('spinner')
    if (spinner !== null) {
        spinner.parentElement?.removeChild(spinner);
    }
    // makes appRoot visible
    appRoot.classList.remove('hidden')
}
root.render(
    <>
        <ToastContainer newestOnTop theme="dark" />
        <App />
    </>
)
