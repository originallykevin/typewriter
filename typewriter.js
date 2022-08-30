const sentence = 'hello there from lighthouselabs' + '\n';

let count = 0;
for (const char of sentence) {
  setTimeout((letter) => {
    process.stdout.write(char);
  }, count += 50);
}
