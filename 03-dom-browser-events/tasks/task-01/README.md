## DESCRIPTION

Resolve taks with requirements below.

## REQUIREMENTS

Create function `createCounter` which accepts two optional numeric arguments and returns function.

`createCounter([startCount], [incrementor]) {...}`

* `[startCount]` optional argument, which indicates the counter start if it wasn't provided then start value is `0`

* `[incrementor]` optional argument, which indicates on which value we should increase out iterator each time default value is `1`

* returned function should have special method `resetCounter` which restores counter to it's initial state and returns `undefined`.


Calling of `createCounter` without any params should return a function lets say `counter`

Calling of function `counter`
* first time returns `0` (value of `startCount` param)
* second time returns `1`
* third time returns `2`
* `counter.resetCounter()` returns `undefined`
* first call after reset returns `0` (value of `startCount` param)
* etc....

Calling of `createCounter` within params `50` and `25` return a function lets say `counter`.

Calling of function `counter`
* first time returns `50` (value of `startCount` param)
* second time returns `75`
* third time returns `100`
* `counter.resetCounter()` returns `undefined`
* first call after reset returns `50` (value of `startCount` param)
* etc....

Calling of `createCounter` with non number argument (e.g. `createCounter('1')`) should throw and exception `Only numeric params are allowed`.

You should use features from ES2015 standard.
The code should work properly in latest versions of Chrome, Firefox and Edge without any transpilation.

## WORKFLOW:

Commit implemented task to git into

branch `03-javascript`

folder `03-javascript/02-browser-events-and-dom/task-01`

Structure of the task should be:

```
<task folder>
\---task1.js
\---task1.html
```


## SOURCES:

```
<task folder>
\---task1.js
\---task1.html
```

## DEADLINE:

Due Date - 09-07-2020 23:59.

Penalty will be applied for each overdue day.
