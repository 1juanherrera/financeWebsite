import { HashRouter, Route, Routes } from 'react-router-dom';
import { OverView, Budget, Settings, Reports, Saved } from './pages';
import { Sidebar } from './components';

export const App = () => {
    return (
        <HashRouter>
            <Sidebar />
            <Routes >

                <Route path='/' element={ <OverView /> } />
                <Route path='/budget' element={ <Budget /> } />
                <Route path='/settings' element={ <Settings /> } />
                <Route path='/objectives' element={ <Saved /> } />
                <Route path='/reports' element={ <Reports /> } />

            </Routes>
        </HashRouter>
    )
}