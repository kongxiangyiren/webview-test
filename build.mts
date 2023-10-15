import { execSync } from 'child_process';
import { cpSync } from 'fs';
import { parse } from 'path';
import { getLibraryPath } from 'webview-nodejs';
// webview 需要获取webview.dll 需要单独拿出来
cpSync(getLibraryPath(), `./dist/${parse(getLibraryPath()).base}`);
// 打包vue file 不支持打入exe
execSync('cd ./vue-project && npm i && npm run build', { stdio: 'inherit' });
cpSync('./vue-project/dist', './dist/dist', { recursive: true });
