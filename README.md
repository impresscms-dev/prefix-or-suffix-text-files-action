[![License](https://img.shields.io/github/license/impresscms-dev/prefix-or-suffix-text-files-action.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/release/impresscms-dev/prefix-or-suffix-text-files-action.svg)](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/releases)

# Prefix or Suffix Text files

A GitHub Action that adds text to the beginning (prefix) or end (suffix) of files within a specified directory.

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
        uses: actions/checkout@v4

      - name: Install PHP
        uses: shivammathur/setup-php@v2
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
        uses: impresscms-dev/prefix-or-suffix-text-files-action@v2.0.0
        with:
          path: ./docs/
          text: |
            This is a test!
          suffix: false

      - uses: actions/upload-artifact@v4
        with:
          name: my-artifact
          path: ./docs/
```

## Arguments

This action accepts the following parameters in the workflow file (specified under the `with` keyword):

| Argument    | Required | Default value        | Description                       |
|-------------|----------|----------------------|-----------------------------------|
| path | Yes      |                      | Where to look for files to do operation |
| text | Yes      |                      | Text to use for the operation |
| suffix | No      | false               | If is set to true, this action will suffix files with selected text, otherwise will prefix |

## How to contribute?

Contributions to this project are welcome and appreciated! Here's how you can help:

### Reporting Issues
- If you find a bug or have a suggestion for improvement, please use the [issues tab](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/issues)
- Provide as much detail as possible including steps to reproduce, expected behavior, and actual behavior
- Use the [bug report template](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/issues/new?template=bug_report.md) when reporting bugs

### Submitting Changes
1. **Fork the repository** to your GitHub account by clicking the [Fork button](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/fork)
2. **Clone your fork** to your local machine: `git clone https://github.com/YOUR-USERNAME/prefix-or-suffix-text-files-action.git`
3. **Create a new branch** for your changes: `git checkout -b feature/your-feature-name`
4. **Make your changes** and test them thoroughly
5. **Commit your changes** with clear, descriptive commit messages
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a pull request** by navigating to the [Pull requests tab](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/pulls) and clicking "New pull request"

### Development Guidelines
- Follow the existing code style and patterns
- Add appropriate tests for your changes
- Update documentation as needed
- Make sure all tests pass before submitting your pull request

### Getting Started
If you're new to GitHub or open source contributions, check out these resources:
- [GitHub's Fork & Pull workflow guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

### Questions?
If you have any questions about contributing, feel free to:
- Ask in the [issues section](https://github.com/impresscms-dev/prefix-or-suffix-text-files-action/issues) for specific problems

