/**
 * Q23. 프로퍼티 별로 그룹화하기
 *
 * - groupBy 함수를 작성하세요.
 * - 객체 배열과 key를 인자로 받아, 해당 key의 값에 따라 객체들을 묶어서 반환합니다.
 * - 반환 형태는 { [keyValue]: Object[] } 형태입니다.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.

// function groupBy(arr, key) {
//   if (arr.length > 0) {
//     const groupA = arr.filter((user) => arr[0][key] === user[key]);
//     const groupB = arr.filter((user) => groupA[0][key] !== user[key]);

//     console.log(groupA);
//     console.log(groupB);

//     const answer =
//       groupB.length === 0 ? { A: groupA } : { A: groupA, B: groupB };

//     console.log(answer);
//     return answer;
//   } else {
//     return {};
//   }
// }

function groupBy(arr, key) {
  let answer = {};
  for (let i = 0; i < arr.length; i++) {
    let cate = arr[i][key];

    if (answer[cate]) {
      //key를 가지고 있는지부터 판별
      //answer 객체에 arr[i] value가 키로 들어가고 / arr[i]가 밸류로 들어가고
      answer[cate].push(arr[i]);
    } else {
      //key가 없으면
      answer[cate] = [arr[i]];
    }
  }

  return answer;
}

// export를 수정하지 마세요.
export { groupBy };
