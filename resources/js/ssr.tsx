import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route as routes } from '../../vendor/tightenco/ziggy';
import { RouteName } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
declare global {
    var routes: (name: string, params?: any, absolute?: boolean) => string;
}

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            global.routes = (name, params, absolute) =>
                routes(name, params, absolute, {
                    // @ts-expect-error
                    ...page.props.ziggy,
                    // @ts-expect-error
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);