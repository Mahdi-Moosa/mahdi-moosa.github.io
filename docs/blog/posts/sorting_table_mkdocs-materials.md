---
date: 2024-07-12 11:21:07
tags:
  - Mkdocs-Materials
  - Blog
  # - SQL
  # - Rand
---
# Sorting tables in Mkdocs Materials

## Intro

[Material for Mkdocs](https://squidfunk.github.io/mkdocs-material/) comes with a plugun that allows sorting table contents (plugin: [tablesort](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)). The good thing is the plugin works quite well. The bad - well, it treats everything as strings by default. If you have numbers, you probably want to sort your column contents as *numbers* (not as *strings*). As per the documentation, tablesort provides for numbersort options that should be implementable with Material (doc link: [tablesort documnentation](http://tristen.ca/tablesort/demo/)). However, I was unable to do this easily.

## Solution

This solution is inspired by [facelessuser](https://github.com/facelessuser)'s implementation discussed [here](https://github.com/squidfunk/mkdocs-material/issues/1837#issuecomment-667135024). Steps are:

1. Add the following to mkdocs.yml file: 
``` yaml
extra_javascript:
  # Table-sort implementation 
  # inspiration: 
  # https://github.com/squidfunk/mkdocs-material/issues/1837#issuecomment-667135024
  - https://www.kryogenix.org/code/browser/sorttable/sorttable.js
  - javascripts/customsort.js
```

2. Create a file named customsort.js in the javascripts folder. Add following contents to the customsort.js file:

``` js title="customsort.js"
(() => {
    const onReady = function(fn) {
      document.addEventListener("DOMContentLoaded", fn)
      document.addEventListener("DOMContentSwitch", fn)
    }
  
    onReady(() => {
      if (typeof sorttable !== 'undefined') {
        const tables = document.querySelectorAll('article table')
  
        for (let i = 0; i < tables.length; i++) {
          sorttable.makeSortable(tables[i])
        }
      }
    })
  })()
```

## Outtro

*Viola!* You should be good to go!

