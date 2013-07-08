# Help Me Obi-Wan

You're my only hope.

# The Story

For the entirety of its existence, Vizify has had a curious bug where
JSON XHR requests will occasionally come through mangled on the Rails
side of things.  There's no discernable pattern to these failures;
they happen regardless of browser, XHR method (jQuery, raw XHR, etc),
URL, and so on.

We've investigated this problem on-and-off over the past several
months, wich several "aha!" moments and premature celebration of fixes
that ultimately proved futile.

We know this much: the data comes in mangled right when it hits Rails.
The purpose of this project is to rule out the possibility that the
browser's `JSON.stringify()` is generating the invalid JSON.

# Installing

Download the repo.  No depedencies.

# Using

```bash
./main.js [PORT]
```

Port defaults to 80.

That's it.  Any text (UTF8) POSTed to `/` will be saved to the current
working directory in a file named with the date/time of the POST.

CORS is suppported for these POSTs.

# License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
