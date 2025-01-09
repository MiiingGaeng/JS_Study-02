/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  // TODO
  const findAve =
    users.reduce((acc, cur) => {
      return acc + cur.age;
    }, 0) / users.length;
  const findMax = users.reduce((acc, cur) => {
    if (acc <= 0) {
      acc = users[0].age;
      return acc < cur.age ? (acc = cur.age) : acc;
    } else {
      return acc < cur.age ? (acc = cur.age) : acc;
    }
  }, 0);

  console.log(findAve);
  console.log(findMax);

  return users.length === 0
    ? { averageAge: 0, maxAge: 0 }
    : { averageAge: findAve, maxAge: findMax };
}

calculateStatistics([{ age: -5 }, { age: -15 }, { age: -25 }]);

// export를 수정하지 마세요.
export { calculateStatistics };
