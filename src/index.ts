import { join, parse } from 'path';
import { Webview, getLibraryPath, SizeHint } from 'webview-nodejs';

const w = new Webview(
  !process.pkg,
  process.pkg
    ? join(process.execPath, '..', parse(getLibraryPath()).base)
    : getLibraryPath()
);
w.title('Hello');
w.size(1200, 800, SizeHint.Min);
const url = process.pkg
  ? `file://${join(process.execPath, '..', './dist/index.html')}`
  : 'http://localhost:5173/';
w.navigate(url);

// 渲染进程 调用 await sumInNodeJS(1,2)
// w.bind('sumInNodeJS', (webview, arg0, arg1) => {
//   return arg0 + arg1;
// });

w.show();
