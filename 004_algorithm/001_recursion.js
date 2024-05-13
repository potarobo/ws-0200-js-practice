/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence(n, sum = 0) {
  if (n != 0) {
    sum = n + sumSequence(n - 1);
  }
  return sum;
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci(num) {
  if (num === 1) {
    return [1];
  }
  if (num === 2) {
    return [1, 1];
  }
  const list = fibonacci(num - 1);
  list.push(list[list.length - 1] + list[list.length - 2]);
  return list;
}

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize(node, sum = 0) {
  if (node.type === 'folder') {
    // フォルダ内の各子ノードに対して再帰呼び出しを行う
    debugger;
    for (const child of node.children) {
      sum = fileSize(child, sum);
    }
  }
  // ノードがファイルである場合
  else if (node.type === 'file') {
    // ファイルサイズを合計に加える
    sum += node.size;
  }

  // 合計ファイルサイズを返す
  return sum;
}

module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
};
