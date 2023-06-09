import {defineConfig} from "vite";
import webExtension from "@samrum/vite-plugin-web-extension";

export default defineConfig({
    // build: {
    //     target: 'modules',
    //     polyfillModulePreload: false,
    //     lib: {
    //         entry: [
    //             './src/content.js',
    //             './src/background.js',
    //         ]
    //     },
    //
    //     rollupOptions: {
    //         input: {
    //             options: 'src/options/index.html',
    //             popup: 'src/popup/index.html',
    //         }
    //     }
    // }

    plugins: [
        webExtension({
            manifest: {
                // oauth2
                name: 'pkg.name',
                description: 'pkg.description',
                version: '0.0.1',
                manifest_version: 3,

                browser_specific_settings: {
                    "gecko": {
                        "id": "addon@example.com",
                        "strict_min_version": "42.0"
                    }
                },

                action: {
                    default_title: 'Авторизуватись'

                    //     default_popup: 'src/popup/index.html'
                },

                oauth2: {
                    client_id: '1343cf2089a7e86cc90c4db60a6a5758',
                    scopes: 'write:users'
                },

                permissions: [
                    'tabs',
                    'identity'
                ],

                background: {
                    scripts: [
                        'src/background/index.js'
                    ]
                    // service_worker: "src/background/serviceWorker.js",
                },

                // web_accessible_resources: [
                //     "src/login.html"
                // ]
            },
            useDynamicUrlWebAccessibleResources: false,
            additionalInputs: {
                html: [
                    'src/login.html'
                ]
            }
        }),
    ],
})