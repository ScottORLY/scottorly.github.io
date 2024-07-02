
export default {
  css: {
    modules: {
      generateScopedName: (name) => name
    }
  },
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: (id, p) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('clock')) {
            return 'clock';
          }
        }
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'f',
    jsxInject: `import {h, f} from 'jsx-pragma'`
  }
}