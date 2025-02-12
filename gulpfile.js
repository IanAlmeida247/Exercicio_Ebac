const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  
const imagemin = require('gulp-imagemin');           
const uglify = require('gulp-uglify');               
const rename = require('gulp-rename');               
const cleanCSS = require('gulp-clean-css'); 

// Tarefa para compilar SASS para CSS
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')  // Caminho correto para os arquivos SASS
        .pipe(sass().on('error', sass.logError))  // Log de erros no SASS
        .pipe(cleanCSS())  // Compactação do CSS
        .pipe(rename({ suffix: '.min' }))  // Adiciona sufixo '.min' aos arquivos CSS minificados
        .pipe(gulp.dest('dist/css'));  // Diretório de saída dos arquivos CSS minificados
});

// Tarefa para compressão de imagens
gulp.task('images', function() {
    return gulp.src('source/images/**/*')  // Caminho correto para as imagens
        .pipe(imagemin())  // Comprime as imagens
        .pipe(gulp.dest('dist/images'));  // Diretório de saída das imagens comprimidas
});

// Tarefa para compressão de JavaScript
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')  // Caminho correto para os arquivos JavaScript
        .pipe(uglify())  // Comprime os arquivos JS
        .pipe(rename({ suffix: '.min' }))  // Adiciona sufixo '.min' aos arquivos JS minificados
        .pipe(gulp.dest('dist/js'));  // Diretório de saída dos arquivos JS minificados
});

// Tarefa padrão que executa todas as tarefas em série
gulp.task('default', gulp.series('sass', 'images', 'scripts'));

// Tarefa watch para monitorar mudanças nos arquivos
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));  // Monitorar mudanças no SASS
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));  // Monitorar mudanças no JS
    gulp.watch('source/images/**/*', gulp.series('images'));  // Monitorar mudanças nas imagens
});

