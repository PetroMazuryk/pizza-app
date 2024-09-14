declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  VITE_API_TEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
