// ラベルに書かれている文字列
console.log(
  String.fromCodePoint(
    [!![] + !![] + !![] + !![] + !![] + !![], !![] + !![] + !![] + !![] + !![] + !![] + !![]].join(
      ''
    )
  ),
  String.fromCodePoint([+!![], +!![], +!![]].join('')),
  String.fromCodePoint([+!![], +!![], ~~[]].join('')),
  String.fromCodePoint([+!![], ~~[], !![] + !![] + !![]].join('')),
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint(
    [
      !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![],
      !![] + !![] + !![] + !![] + !![] + !![] + !![],
    ].join('')
  ),
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint([+!![], +!![], +!![] + !![] + !![] + !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint([+!![], ~~!![], !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint(
    [
      !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![],
      !![] + !![] + !![] + !![] + !![] + !![] + !![],
    ].join('')
  ),
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint([+!![], ~~[], !![] + !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint([+!![], +!![], +!![]].join('')),
  String.fromCodePoint([+!![], +!![], ~~[]].join('')),
  String.fromCodePoint([+!![], +!![], !![] + !![] + !![] + !![] + !![]].join('')),
  String.fromCodePoint([!![] + !![] + !![], !![] + !![] + !![]].join(''))
);
