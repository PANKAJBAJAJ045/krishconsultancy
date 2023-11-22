import { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/secure/home/home'
import MainLayout from './layout/main-layout/main-layout'
import Visitor from './components/secure/visitor/visitor'
import { removeSpinners } from './main'
import Vendor from './components/secure/Vendor/Vendor'
import Staff from './components/secure/Staff/Staff'

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
                        <Route path="staff" element={<Staff />} />
                        <Route path="vendor" element={<Vendor />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App
