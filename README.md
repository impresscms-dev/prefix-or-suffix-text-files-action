[![License](https://img.shields.io/github/license/impresscms-dev/prefix-or-suffix-text-files-action.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/release/impresscms-dev/prefix-or-suffix-text-files-action.svg)](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/releases)

# Prefix or Suffix Text files

GitHub action to prefix or suffix text to files in selected folder.

> Now using JavaScript with ES6 modules!

## Usage

To use this action in your project, create workflow in your project similar to this code (Note: some parts and arguments needs to be altered):
```yaml
name: Generate documentation

on:
  push:

jobs:
  get_php_classes_list:
    runs-on: ubuntu-latest
    steps:
      - name: Checkouting project code...
        uses: actions/checkout@v2

      - name: Install PHP
        uses: shivammathur/setup-php@master
        with:
          php-version: 8.1
          extensions: curl, gd, pdo_mysql, json, mbstring, pcre, session
          ini-values: post_max_size=256M
          coverage: none
          tools: composer:v2

      - name: Install Composer dependencies (with dev)
        run: composer install --no-progress --no-suggest --prefer-dist --optimize-autoloader

      - name: Generating documentation...
        uses: impresscms-dev/generate-phpdocs-with-clean-phpdoc-md-action@v0.1.4
        with:
          class_root_namespace: ImpressCMS\
          included_classes: ImpressCMS\**
          output_path: ./docs/

      - name: Prefixing docs...
        uses: impresscms-dev/prefix-or-suffix-text-files-action@v1.0.0
        with:
          path: ./docs/
          text: |
            This is a test!
          suffix: false

      - uses: actions/upload-artifact@v3
        with:
          name: my-artifact
          path: ./docs/
```

## Arguments

This action supports such arguments (used in `with` keyword):
| Argument    | Required | Default value        | Description                       |
|-------------|----------|----------------------|-----------------------------------|
| path | Yes      |                      | Where to look for files to do operation |
| text | Yes      |                      | Text to use for the operation |
| suffix | No      | false               | If is set to true, this action will suffix files with selected text, otherwise will prefix |

## How to contribute?

If you want to add some functionality or fix bugs, you can fork, change and create pull request. If you not sure how this works, try [interactive GitHub tutorial](https://skills.github.com).

If you found any bug or have some questions, use [issues tab](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/issues) and write there your questions.

