interface ImportMeta {
  readonly env: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly [key: string]: any;
    readonly SNOWPACK_PUBLIC_API_URL: string;
    readonly MODE: string;
    readonly NODE_ENV: string;
    readonly SSR?: boolean;
  };
}
