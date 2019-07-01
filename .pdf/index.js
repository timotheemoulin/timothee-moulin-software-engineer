// https://github.com/alanshaw/markdown-pdf

var duplexer = require("duplexer"),
    execSync = require('child_process').execSync,
    fs = require('fs'),
    markdownpdf = require("markdown-pdf"),
    split = require("split"),
    through = require("through");

var mdDocs = [
        "../CV.md",
    ],
    bookPath = "build/Timothée Moulin - Software engineer",
    options = {
        cwd: '../',
        cssPath: 'css/style.css',
        paperBorder: '1cm',
        preProcessMd: function () {
            // Split the input stream by lines
            var splitter = split()
            var replacer = through(function (data) {
                this.queue(data
                        .replace(/__________/g, '<div class="pagebreak"></div>\n\n') // Replace occurences of "__________" with a page break
                    + "\n")
            });
            splitter.pipe(replacer);
            return duplexer(splitter, replacer);
        },
        preProcessHtml: function () {
            return through(function (data) {
                fs.writeFile(bookPath + ".html", data);
                this.queue('<div class="markdown-body">\n\n' + data + '\n\n</div>');
            });
        },
        remarkable: {
            html: true,
            breaks: true,
            plugins: [require('remarkable-classy')],
            syntax: ['footnote', 'sup', 'sub'],
            typographer: true
        },
        runningsPath: 'runnings.js'
    };

markdownpdf(options).concat.from(mdDocs).to(bookPath + ".pdf", function () {
    console.log("Created", bookPath + ".pdf");
});
