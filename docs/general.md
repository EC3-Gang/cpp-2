---
lang: en-US
title: General Tips
---

## General Tips

::: danger WHAT NOT TO DO AT ALL COSTS
Before I start, I thought that you should know that there
are a few things that you should avoid at all costs when
doing Competitve Programming.

1. Using Github Copilot or any other AI autocomplete assistants. You will be screamed at by certain contributors if you do.

2. Do NOT share your code during a contest with other contestants during the duration of the contest, this could lead to disqualification for LIFE.

3. Beware of using things like "endl" or "ends" during C++ contests as some CP websites do not allow that.

4. Instead of using "or", substitute it with "||" as "or" might not work and it will minimise troublesome situations

5. You are allowed to refer to algorithm codes that you already wrote beforehand but definitely NOT from other people/websites

   :::

### Fast Input/Output

#### Option 1: Use FastIO

This is if you use `cin`/`cout`.
Include the following two lines at the top of your code, when `int main()`
is first defined:

```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

However, do note that if you include `ios::sync_with_stdio(false)`,
then mixing C (`scanf`/`printf`) and C++ (`cin`, `cout`) style I/O
may produce unexpected results.

The upside is that both `cin`/`cout` become faster.
Including `cin.tie(nullptr)` will reduce the runtime
if you are using only `cin` and `cout`.

#### Option 2: Use `scanf`/`printf`

Using `scanf` and `printf` from the C STL will decrease your runtime.

```cpp
#include <stdio.h>
using namespace std;

int main() {
  int a;
  printf("Enter an integer: ");
  scanf("%d", &a);
  printf("Number: %d", a);
}
```

### Others

#### Don't use `std::endl`

Debug output should be written to `std::cerr`;
it's unit buffered, so every character gets flushed.
There is rarely a need for `std::endl`, and getting in the habit of using it
will lead to mysteriously slow code as it flushes the buffer.

If you're used to typing `endl`, you can always use `#define endl "\n"`.
Read this [SO post](https://stackoverflow.com/a/35583210) for more info.
