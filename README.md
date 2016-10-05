# mintynab

Export a transaction CSV in Mint and use this tool to clean it for import into YNAB.

## Installation
```sh
$ npm i -g mint-ynab
```

## Usage
```sh
# stdout the sanitized CSV
$ mintynab path/to/your.csv

# save the sanitized CSV to disk
$ mintynab path/to/your.csv > path/to/new.csv
```
