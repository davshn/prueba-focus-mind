import { Route, Routes } from 'react-router-dom';

import Design from '../views/Design';
import Form from '../views/Form';
import Menu from '../views/Menu';

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/design" element={<Design />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    )
}