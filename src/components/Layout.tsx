import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";

import Button from './Button';

export default (): React.ReactElement => {
    return <BrowserRouter>
                <Switch>
                    <Route path="/button"><Button>Test</Button></Route>
                    <Route path="*"><div>NOT FOUND</div></Route>
                </Switch>
            </BrowserRouter>;
}