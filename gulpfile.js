// SPDX-License-Identifier: 0BSD

const process = require("process");
const fs = require("fs-extra");
const gulp = require("gulp");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

let serve = false;

//******************************************************************************
// Task: clean

gulp.task("clean", async () => {
  await fs.remove("./dist");
});

//******************************************************************************
// Task: css

const postcss = require("gulp-postcss");
const postcssImport = require("postcss-import");
const postcssCustomMedia = require("postcss-custom-media");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

gulp.task("css", () => {
  return gulp
    .src("./site/main.css")
    .pipe(
      postcss([
        postcssImport(),
        postcssCustomMedia(),
        postcssPresetEnv(),
        cssnano(),
      ]),
    )
    .pipe(gulp.dest("./dist/site"))
    .pipe(browserSync.stream());
});

//******************************************************************************
// Task: template

const nunjucks = require("gulp-nunjucks");

gulp.task("template", () => {
  const data = {
    meta: fs.readJSONSync("data/meta.json"),
    members: fs.readJSONSync("data/members.json"),
  };

  if (serve) {
    // Use localhost when serving locally.
    data.meta.url = "http://localhost:3000";
  } else if (process.env.BRANCH !== "master" && process.env.DEPLOY_URL) {
    // Use the unique deploy URL when doing a development CI build.
    data.meta.url = process.env.DEPLOY_URL;
  }

  return gulp
    .src("./site/*.njk")
    .pipe(nunjucks.compile(data))
    .pipe(rename({ extname: "" }))
    .pipe(gulp.dest("./dist/site"))
    .pipe(browserSync.stream());
});

//******************************************************************************
// Task: assets

gulp.task("assets", () => {
  return gulp
    .src("./site/font/*.ttf")
    .pipe(gulp.dest("./dist/site"))
    .pipe(browserSync.stream());
});

//******************************************************************************
// Task: serve

gulp.task("serve", async () => {
  await fs.remove("./dist");

  serve = true;

  gulp.watch("./site/main.css", { ignoreInitial: false }, gulp.series("css"));

  gulp.watch("./site/*.njk", { ignoreInitial: false }, gulp.series("template"));

  gulp.watch(
    "./site/font/**/*",
    { ignoreInitial: false },
    gulp.series("assets"),
  );

  browserSync.init({
    server: {
      baseDir: ["./dist/site"],
      serveStaticOptions: {
        extensions: ["html"],
      },
    },
  });
});

//******************************************************************************
// Task: default (build)

gulp.task(
  "default",
  gulp.series(["clean", gulp.parallel(["css", "template", "assets"])]),
);
