### tsconfig.json文件
```
compilerOptions对象中的一些属性
1. rootDir 
2. outDir
3. "target": "ES2016", 设置编译后的JS版本,

在compilerOptions的同级，设置 include
"include": [
    "src/**/*"
  ],
确保只编译src文件夹下面的内容

如果类型检查出现错误，就不会生成编译后的文件
"noEmitOnError": true, /* Disable emitting files if any type checking errors are reported. */
```

### TS = strongly Typed Lang
- TS is static typing: types are checked at compile time.
- JS is dynamic typing: types are checked at run time.

### TS concept
- implicit typing
```TS
// 变量名 myname没有明确的被指明类型，但TS编译器能够准确的推断出myname的类型为string
let myname = "Dave"

```
- explicit typing
### refernces
- https://www.youtube.com/watch?v=gieEQFIfgYc