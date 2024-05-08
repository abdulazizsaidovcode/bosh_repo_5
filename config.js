const config = {
  tailwindjs: "./tailwind.config.js",
  port: 9050,
  purgecss: {
    content: ["src/**/*.{html,js,php}"],
    safelist: {
      standard: [/^pre/, /^code/],
      greedy: [/token.*/],
    },
  },
  imagemin: {
    png: [0.7, 0.7], // range between min (0) and max (1) as quality - 70% with current values for png images,
    jpeg: 70, // % of compression for jpg, jpeg images
  },
};

// tailwind plugins
const plugins = {
  typography: true,
  forms: true,
  containerQueries: true,
};

// base folder paths
const basePaths = ["src", "dist", "build"];

// folder assets paths
const folders = ["css","scss", "js", "img", "fonts", "third-party"];

const paths = {
  root: "./",
};

basePaths.forEach((base) => {
  paths[base] = {
    base: `./${base}`,
  };
  folders.forEach((folderName) => {
    const toCamelCase = folderName.replace(/\b-([a-z])/g, (_, c) =>
      c.toUpperCase()
    );
    paths[base][toCamelCase] = `./${base}/${folderName}`;
  });
});

module.exports = {
  config,
  plugins,
  paths,
};
function prodStyles() {
  const tailwindcss = require("tailwindcss");
  const autoprefixer = require("autoprefixer");
  const cssnano = require("cssnano");
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      postcss([
        tailwindcss(options.config.tailwindjs),
        autoprefixer(),
        cssnano(),
      ])
    )
    .pipe(dest(options.paths.build.css));
}

exports.prod = series(
  parallel(
    prodStyles,
  ),
);