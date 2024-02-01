// ラベルに書かれている文字列
console.log(
  String.fromCodePoint(
    [!![] + !![] + !![] + !![] + !![] + !![], !![] + !![] + !![] + !![] + !![] + !![] + !![]].join(
      ''
    )
  ), // C
  String.fromCodePoint([+!![], +!![], +!![]].join('')), // o
  String.fromCodePoint([+!![], +!![], ~~[]].join('')), // n
  String.fromCodePoint([+!![], ~~[], !![] + !![] + !![]].join('')), // g
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![]].join('')), // r
  String.fromCodePoint(
    [
      !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![],
      !![] + !![] + !![] + !![] + !![] + !![] + !![],
    ].join('')
  ), // a
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![] + !![] + !![]].join('')), // t
  String.fromCodePoint([+!![], +!![], +!![] + !![] + !![] + !![] + !![] + !![] + !![]].join('')), // u
  String.fromCodePoint([+!![], ~~!![], !![] + !![] + !![] + !![]].join('')), // r
  String.fromCodePoint(
    [
      !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![],
      !![] + !![] + !![] + !![] + !![] + !![] + !![],
    ].join('')
  ), // a
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![] + !![] + !![]].join('')), // t
  String.fromCodePoint([+!![], ~~[], !![] + !![] + !![] + !![] + !![]].join('')), // i
  String.fromCodePoint([+!![], +!![], +!![]].join('')), // o
  String.fromCodePoint([+!![], +!![], ~~[]].join('')), // n
  String.fromCodePoint([+!![], +!![], +!![] + !![] + !![] + !![] + !![]].join('')), // s
  String.fromCodePoint([!![] + !![] + !![], !![] + !![] + !![]].join('')) // !
);
