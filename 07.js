/**
 * Q: array method 응용 (method 체이닝)
 *
 * - get20sEmail 함수의 파라미터로 person object 배열이 주어집니다.
 *
 * - 배열의 각 요소는 다음과 같은 object입니다.
 * {
 *  name: string,
 *  age: number
 *  email: string
 * }
 *
 * - 배열의 각 요소 중 20대인 사람만 고른 뒤 filter 나이 순으로 정렬 sort 한 후, email만 뽑아서 map 배열로 반환하세요.
 * - method 체이닝을 사용하세요.
 * - 원본 배열을 변경하지 말고 새로운 배열을 반환하세요.
 *
 * @param {{
 *  name: string,
 *  age: number,
 *  email: string
 * }[]} arr
 * @returns {string[]} 20대인 사람의 email 배열
 *
 */

// TODO: get20sEmail 함수를 작성하세요.
function get20sEmail(arr) {
  const findTwenty = function (a) {
    if (a > 19 && a < 30) return a;
  };
  const sortAge = (a, b) => {
    if (a.age > b.age) {
      return 1;
    } else if (a.age < b.age) {
      return -1;
    } else {
      return 0;
    }
  };

  return arr
    .filter((user) => findTwenty(user.age))
    .sort(sortAge)
    .map((user) => user.email);
}

//sort에서 콜백함수 문법 복습하기! : 인자가 같으면 생략!

// export를 수정하지 마세요.
export { get20sEmail };
