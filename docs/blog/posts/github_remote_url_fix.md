---
date: 2024-06-22 19:14:38
tags:
  - Debugging
  # - SQL
  # - Rand
---

# Changing GitHub Remote Link

## The problem
I have been playing with [Mkdocs Materials](https://squidfunk.github.io/mkdocs-material/) since yesterday. The name of the repo that hosted my blog source file(s) was named *mahdi_zone*. So the URL for the homepage kept on coming as mahdi-moosa.github.io/mahdi_zone with mahdi-moosa.github.io giving a 404 error.
<!-- more -->
After digging a while (and chatting with Gemini Advanced), I found out that if the repo is named as `<my-username>.github.io` then the homepage will be `<my-username>.github.io`. So, I changed the repo name from GitHub GUI. Removed remote repo (mahdi_zone) from the VS Code Source Control and tried to add the new repo by "Source Control> Three Dot Click (...)> Remote> Add". But I kept on getting the following error message: 

```fatal: 'https-//github.com/Mahdi-Moosa/mahdi-moosa.github.io.git' is not a valid remote name```

## The fix
Instead of using the GUI, I used terminal, browsed to the local directory and run the following command:

``` git remote add mahdi_zone https://github.com/Mahdi-Moosa/mahdi-moosa.github.io.git```

Viola! It fixed!

*Note: You may need to remove the non-working remote link to GitHub repo first before you can add.*

## Tentative explanation
The official git command is:

```usage: git remote add [<options>] <name> <url>```

I think when we try to add https://github.com/Mahdi-Moosa/mahdi-moosa.github.io.git as the remote repo URL using the GUI, it messes up the naming of the repo (which is handled well in other cases). Here, by setting the name as mahdi_zone in the command "git remote add *mahdi_zone* https://github.com/Mahdi-Moosa/mahdi-moosa.github.io.git"
I avoided the naming issue, which I belive it was trying to name as the invalid name "https-//github.com/Mahdi-Moosa/mahdi-moosa.github.io.git"

