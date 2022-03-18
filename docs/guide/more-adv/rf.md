---
lang: en-us
title: Dynamic Programming
---

## Recursive Functions

Recursive functions are functions which are called within the same function.
Crazy, right?

Pseudocode:

```text
function fn with variable A & B
  if A smaller or equals to B
    print a
    recall function fn with variable A+1 and B

fn(1, 10);
```

Output:

```text
1
2
3
4
5
6
7
8
9
10
```

### Uses in CP

Well...not a lot, to be honest.
It TLEs when the there are too many recursions,
but usually works for smaller inputs.

Example of a recursive function in CP (calculates the Fibonacci sequence):

```cpp{7-10}
#include <iostream>
#define endl "\n"
#define ll long long

using namespace std;

ll sum(ll n) {
  if (n <= 1) return n;
  return sum(n - 1) + sum(n - 2);
}

int main() {
  ll n;
  cin >> n;
  for (int i = 0; i < n + 1; i++) cout << sum(i) << '\n';
}
```

_The highlighted part is the recursive function._

The above solution was written for [this problem](https://codebreaker.xyz/problem/fibo),
but TLEd on one of the last testcases.
