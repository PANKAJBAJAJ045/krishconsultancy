import { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/secure/home/home'
import MainLayout from './layout/main-layout/main-layout'
import Visitor from './components/secure/visitor/visitor'
import { removeSpinners } from './main'

const App = () => {
    useLayoutEffect(() => {
        removeSpinners()
    }, [])
    return (
        <Suspense fallback={<>...</>}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="visitor" element={<Visitor />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App
