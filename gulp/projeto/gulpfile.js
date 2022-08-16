const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const { parallel } = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('node-sass'))
const reload = browserSync.reload

// import gulp from 'gulp'
// import concat from 'gulp-concat'
// import cssmin from 'gulp-cssmin'
// import rename from 'gulp-rename'
// import uglify from 'gulp-uglify'
// import image from 'gulp-image'

function tarefasCSS(callback) {

    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './vendor/owl/css/owl.carousel.css0',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './vendor/jquery-ui/jquery-ui.css',
        ])

        .pipe(concat('libs.css'))         // mescla arqivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // libs.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

    return callback()

}

function tarefasSASS(callback) {

    gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) // transforma o sass para css
        .pipe(gulp.dest('./dist/css'))

    cb()

}

function tarefasJS(callback){

    gulp.src([
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/jquery/dist/jquery.js',
            './vendor/jquery-mask/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js',
            './vendor/owl/js/owl.carousel.js',
            './src/js/custom.js'
        ])
        .pipe(babel({
            comments: false,
            preset: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js'))

    return callback()

}

function tarefasImagem(){
    
    return gulp.src('./src/imagens/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of COncept
function tarefasHTML(callback){

    gulp.src('../src/**/*.html')
        .pipe(htmlmin({ collapseWhiteespase: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)  // repete o processo quando alterar algo em src
    gulp.watch('./dist/**/*').on('change', reload)
})

function end(cb){
    console.log("tarefas concluídas")
    return cb()
}

// series x parallel
const process = series( tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS, end)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefasSASS

exports.default = process