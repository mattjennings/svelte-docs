import path from 'path';
import syncFolders from 'sync-folders';

const assets = [
    "./src/theme/assets/",
    "./src/static/",
]

export default function (dev=false) {
    const options = {
        type: dev ? 'hardlink' : 'copy'
    }

    return {
        name: 'rollup_plugin_syncer',
        generateBundle(opts, bundle) { 
            const dir = opts.dir || path.dirname(opts.file);
            assets.forEach(asset => {
                syncFolders(path.resolve(asset), dir, options);
            })
        }
    }
}
