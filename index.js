module.exports = {
    blocks: {
        codesandbox: function (block) {
            const config = this.config.values.pluginsConfig['codesandbox-placeholder']
            const args = block.kwargs

            const getArg = (name, defaultValue = null) => {
                if (args[name] !== undefined) {
                    return args[name]
                }
                if (config[name] !== undefined) {
                    return config[name]
                }
                return defaultValue
            }

            const getParam = (name, defaultValue = null) => {
                const value = getArg(name, defaultValue)
                return value ? `${name}=${value}` : null
            }

            const srcUrl = `https://codesandbox.io/embed/${args.id}`
            const srcParams = [
                getParam('autoresize'),
                getParam('codemirror'),
                getParam('editorsize'),
                getParam('eslint'),
                getParam('expanddevtools'),
                getParam('fontsize'),
                getParam('forcerefresh'),
                getParam('hidenavigation'),
                getParam('highlights'),
                getParam('initialpath'),
                getParam('module'),
                getParam('moduleview'),
                getParam('previewwindow'),
                getParam('runonclick'),
                getParam('verticallayout'),
                getParam('view'),
                getParam('theme'),
            ]

            if (args.link) {
                const attributes = [
                    `href="${srcUrl}?${srcParams.filter($ => $ !== null).join('&')}"`,
                    `title="${getArg('title', 'Open CodeSandbox')}"`,
                    `target="${getArg('target', '_blank')}"`,
                ]
                return `<a ${attributes.join(' ')}>${args.link}</a>`
            }
            
            if (args.button) {
                const attributes = [
                    `href="${srcUrl}?${srcParams.filter($ => $ !== null).join('&')}"`,
                    `title="${args.button}"`,
                    `target="${getArg('target', '_blank')}"`,
                ]
                return `<a ${attributes.join(' ')}><img alt="Edit pure-components-exercise" src="https://codesandbox.io/static/img/play-codesandbox.svg"></a>`
            }

            const attributes = [
                `src="${srcUrl}?${srcParams.filter($ => $ !== null).join('&')}"`,
                `title="${getArg('title', 'CodeSandbox.io')}"`,
                `style="width: ${getArg('width', '100%')}; height:${getArg('height', '500px')}; ${getArg('style', 'border:0; border-radius: 4px; overflow:hidden;')}"`,
                'allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"',
                'sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"',
            ]

            return `<iframe ${attributes.join(' ')}></iframe>`
        },
    },
}
