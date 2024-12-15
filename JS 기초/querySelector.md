## querySelector 사용법

| 메서드                  | 선택 방식       | 반환값                  | 특징                                   |
|-------------------------|----------------|-------------------------|---------------------------------------|
| `querySelector`         | CSS 선택자     | 첫 번째 일치 요소(단일) | CSS 선택자 사용 가능, 유연한 선택 가능 |
| `getElementById`        | 아이디         | 단일 요소               | 특정 ID로 빠르게 요소를 선택          |
| `getElementsByClassName`| 클래스명       | HTMLCollection(유사 배열)| 클래스 이름으로 빠르게 여러 요소 선택 |
| `getElementsByTagName`  | 태그명         | HTMLCollection(유사 배열)| 태그 이름으로 여러 요소 선택         |
| `querySelectorAll`      | CSS 선택자     | NodeList(유사 배열)     | 일치하는 모든 요소 선택 가능          |


### querySelector 는 CSS의 선택자 문법을 그대로 가져온다.
그리고 하나(첫번째)의 요소만을 반환

다 가져오고 싶다면 'querySelectorAll'을 이용하자.