import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter ,Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import { RouterContainer } from './Router.styles';
import './Router.scss';

/**
 * @render react
 * @name Router
 * @description React router wrapper
 * @example
 * <Router routes={[
 * {
 *   url: '/route/name/:optionalParam?',
 *   component: AsyncComponent,
 *   exact: true,
 * },
 * {
 *   url: '/route/name/:param',
 *   component: AsyncComponent,
 *   exact: true,
 * },
 * ]}/>
 */
const Router = ({ routes, children }) => (
    <BrowserRouter>
        <RouterContainer>
            {children}
            <AnimatedSwitch 
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                    transform: `translateX(${styles.offset}%)`,
                })}
                className="switch-wrapper">
                    {routes.map(({ exact, url, component }, index) => (
                        <Route key={index} exact={exact} path={url ? url : ''} component={component}/>
                    ))}
            </AnimatedSwitch>
        </RouterContainer>
    </BrowserRouter>
);

Router.propTypes = {
    /**
     * @property {string} routes routes config
     */
    routes: PropTypes.array
  }

export default Router;
