// 扩展 process.pkg
interface PkgProcess {
  pkg?: any;
}

declare global {
  namespace NodeJS {
    interface Process extends PkgProcess {}
  }
}

export {};
