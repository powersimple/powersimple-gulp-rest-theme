var localhost = 'http://powersimple.192.168.1.11.xip.io:8899/' // SET local dev url here

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps'),
    identityMap = require('@gulp-sourcemaps/identity-map'),

    browserSync = require('browser-sync').create(),
    del = require('del')

// Styles
gulp.task('styles', function() {
    return sass('app/sass/styles.scss', {
        style: 'compact'
    }).on('error', function(err) {
        console.log(err.toString())

        this.emit('end')
    })

    .pipe(autoprefixer({
            browsers: ['last 2 versions'],

            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        //  .pipe(identityMap()) // .js and .css files will get a generated sourcemap

    .pipe(sourcemaps.write({
        includeContent: false
    }))

    .pipe(gulp.dest('./'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./'))
        .pipe(notify({
            message: 'SCSS converted to SCSS '
        }))
        .pipe(browserSync.stream())
})




// Profiler Styles
gulp.task('profiler-styles', function() {
    return sass('profiler/admin.scss', {
        style: 'compact'
    }).on('error', function(err) {
        console.log(err.toString())

        this.emit('end')
    })

    .pipe(autoprefixer({
            browsers: ['last 2 versions'],

            cascade: false
        }))
        .pipe(concat('profiler/admin.css'))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        //  .pipe(identityMap()) // .js and .css files will get a generated sourcemap

    .pipe(sourcemaps.write({
        includeContent: false
    }))

    .pipe(gulp.dest('./'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./'))
        .pipe(notify({
            message: 'SCSS converted to SCSS '
        }))
        .pipe(browserSync.stream())
})










// Scripts
gulp.task('scripts_custom', function() {
    return gulp.src('app/js/custom/**/*.js')
        .on('error', console.log)
        //.pipe(jshint({asi: true}).on('error', console.log))
        //.pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
        .pipe(notify({
            message: 'Custom JS Compiled and delinted'
        }))
        .pipe(browserSync.stream())
})

gulp.task('scripts_vendor', function() {
    return gulp.src('app/js/vendor/**/*.js')
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./'))
        .pipe(notify({
            message: 'Vendor JS compiled and minified'
        }))
        .pipe(browserSync.stream())
})

// Images
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('app/images'))
        .pipe(notify({
            message: 'Images task complete'
        }))
})

// Clean
gulp.task('clean', function() {
    return del(['./style.css'])
})

// Watch
gulp.task('watch', function() {
    browserSync.init({
        proxy: localhost,
        open: true,
        injectChanges: true

    })

    // Watch .scss files
    gulp.watch('app/sass/**/*.scss', ['styles'])

    // Watch .js files
    gulp.watch('app/js/custom/**/*.js', ['scripts_custom'])
    gulp.watch('app/js/vendor/**/*.js', ['scripts_vendor'])

    gulp.watch('**/*.php').on('change', function() {
        browserSync.reload()
    })
    gulp.watch('**/*.html').on('change', function() {
        browserSync.reload()
    })
    gulp.watch('**/*.svg').on('change', function() {
            browserSync.reload()
        })
        // Watch image files
        // gulp.watch('src/images/**/*', ['images'])

    // 

    // Watch any files in dist/, reload on change
    gulp.watch(['./']).on('change', browserSync.reload)


    /**
     PROFILER 
     */
    gulp.watch('profiler/admin.scss', ['profiler-styles'])


})

// Default task
gulp.task('default', ['watch'])