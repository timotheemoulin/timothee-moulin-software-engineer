# V// ENG - Development Guidelines :: Build PDF

## Documentation

PDF is built using [markdown-pdf](https://github.com/alanshaw/markdown-pdf).
Markdown is rendered as HTML using [remarkable](https://github.com/jonschlinkert/remarkable) with [remarkable-classy](https://github.com/andrey-p/remarkable-classy) extension.

## Build the PDF

Run: `node index.js`

## Download the last version of the PDF

* Get it from Gitlab CI:
  * [Latest stable version](https://gitlab.virtua.ch/eng/guidelines/builds/artifacts/tags/download?job=build:pdf)
  * [Latest preview of `master` branch](https://gitlab.virtua.ch/eng/guidelines/builds/artifacts/master/download?job=build:pdf-preview)
  * [Latest preview of `develop` branch](https://gitlab.virtua.ch/eng/guidelines/builds/artifacts/develop/download?job=build:pdf-preview)