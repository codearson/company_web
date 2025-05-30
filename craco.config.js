module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsLoaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource &&
            warning.module.resource.includes('lightgallery')
          );
        },
      ],
    },
  },
}; 