import { HashRouter, Route, Routes } from 'react-router-dom';
import { OverView, Budget, Settings, Reports } from './pages';
import { Modal, Sidebar } from './components';
import { useSelector } from 'react-redux';

export const App = () => {

    const { isShow } = useSelector( state => state.show )

    return (
        <HashRouter>
            { isShow && <Modal /> } 
            <Sidebar />
            <Routes >

                <Route path='/' element={ <OverView /> } />
                <Route path='/budget' element={ <Budget /> } />
                <Route path='/settings' element={ <Settings /> } />

                <Route path='/reports' element={ <Reports /> } />

            </Routes>
        </HashRouter>
    )
}