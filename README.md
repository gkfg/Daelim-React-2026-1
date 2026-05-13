# 최주형 202230336

## 2026-05-13 내용

함수 직접 호출 >>> 이벤트 발생 안해도 이벤트 발생
요소가 없으면 > 한줄로 처리 가능
처리할 요소가 있으면? <video></video>와 같이 처리 가능
document.getElementById(id) ? id값을 검색 > id값이 'abc'일 때 document.getElementById('abc')처럼 따옴표로 감싸서 문자열로 검색하면 해당 id를 가진 요소가 선택됨.
※ React에서는 가상 DOM을 사용하므로 getElementById 같은 직접적인 DOM 접근은 피하고, 대신 **`useRef` Hook**을 사용하여 DOM 요소에 접근하는 것이 권장됨.

버튼에 onClick 핸들러를 가지고 있지만 해당 버튼을 감싼 div도 onClick 핸들러를 가지고 있을 때 어떤 것이 우선 적용일까?
> **버튼의 onClick 이벤트가 먼저 실행** 그 후 이벤트가 부모 요소로 전파되는 **이벤트 버블링(Event Bubbling)**이 발생하여 div의 onClick 이벤트가 이어서 실행
> 부모로의 이벤트 전파를 막고 싶다면 버튼의 핸들러에서 `e.stopPropagation()`을 사용
> 만약 순서를 바꿔 부모(`div`)의 이벤트를 먼저 실행하고 싶다면, 부모 요소에 `onClick` 대신 **`onClickCapture`**를 사용하면 됨 (이벤트 캡처링).

e.stopPropagation()와 e.preventDefault()의 차이점은 무엇인가?
> e.stopPropagation()은 이벤트 핸들러가 실행되지 않도록 멈춤
> e.preventDefault()은 브라우저 기본 동작을 갖고 있는 이벤트가 해당 기본 동작 실행 X

**state와 useState**
* **state (상태)**: 컴포넌트가 기억해야 하는 동적인 데이터. 상호작용의 결과로 화면의 내용을 변경해야 할 때 사용.
  * 일반 변수(let)와 달리, state 값이 변경되면 React가 자동으로 컴포넌트를 **다시 렌더링(Re-rendering)** 하여 변경된 값을 화면에 반영함.
  * 1 -> 2 -> 3 순으로 값이 변할 때, 컴포넌트가 그 중간값(현재 상태)을 기억하도록 하는 역할.
* **useState**: React에서 state를 생성하고 변경할 수 있게 해주는 Hook.
  * 사용법: `const [상태변수, 상태변경함수] = useState(초기값);`

**로컬 변수와 컴포넌트 상태 저장의 차이**
> 일반적인 로컬 변수는 컴포넌트가 다시 렌더링될 때 값이 초기화되지만, `useState`를 통해 저장된 상태(State)는 렌더링이 일어나도 그 값을 안전하게 유지(기억)함.

**`index` 파일 사용의 장점**
> 폴더 내에 `index.js` (또는 `index.jsx`) 파일을 만들고 컴포넌트를 내보내면(export), 다른 파일에서 불러올(import) 때 파일명 없이 폴더명까지만 적어도 되어 경로 작성이 깔끔하고 편리해짐.

**`index.jsx` (또는 `index.js`)를 활용해 여러 이미지 파일 한 번에 불러오기 예시**
```jsx
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
import img5 from './image5.png';

// 이미지들을 하나의 객체로 묶어줍니다.
export const images = { img1, img2, img3, img4, img5 };

// 묶은 객체를 내보냅니다.

```

```jsx
import { images } from './assets/images';

export default function ImageGallery() {
  return (
    <div>
      <img src={img1} alt="이미지 1" />
      <img src={img2} alt="이미지 2" />
      <img src={img3} alt="이미지 3" />
      <img src={img4} alt="이미지 4" />
      <img src={img5} alt="이미지 5" />
    </div>
  );
}
```

## 2026-05-06 내용

이벤트 핸들러를 prop로 전달
여러 동작이 필요한 prop를 만들때
-case1: handler 여러개 만들기 ? 유지보수 어려움, 추후 버그나면 고치기 힘듬
-case2: if문으로 작성
-case3: 컴포넌트 여러개 만듦 ? 컴포넌트가 너무 많아져 관리가 어려움

## 2026-04-29 내용

DOM(Document Object Model) Tree
bundling
tree의 노드는 컴포넌트를 나타냄
Tailwind CSS(클래스단위), Bootstrap(컴포넌트 단위), CSS Module
CSS의 내용은 일반 CSS작성법
class선택자로 스타일 선언

클래스 적용하는법:
Import의 변수명은 관형적으로 style를 사용
JSX에서는 class 대신 className

## 2026-04-15 내용
지난주의 배열을 필터링하기
```jsx
//지난주 배열
const heroes = [
  "스파이더맨: 피터 파커",
  "아이언맨: 토니 스타크",
  "베트맨: 브루스 웨인",
  "슈퍼맨: 클라크 켄트"
];
//이번주 필터링 + HeroesData.jsx 로 분리
//import {heroes} from './HeroesData'로 데이터 가져옴
const heroes =[{
    id:0,
    hero: '스파이더맨',
    name: '피터 파커',
},{
    id:1,
    hero: '아이언맨',
    name: '토니 스타크',
},{
    id:2,
    hero: '베트맨',
    name: '브루스 웨인',
},{
    id:3,
    hero: '슈퍼맨',
    name: '클라크 켄트',
}]
```

key prop은 즉석 생성 X, 배열 안에 포함

컴포넌트 순수하게 유지
```jsx
function Cup({ guest }){
    return <h2>Tea cup for guest #{guest}</h2>;
}
export default function TestSet(){
    let guest = 8;
    return(
        <>
            <Cup guest={++guest}/>
            <Cup guest={++guest}/>
            <Cup guest={++guest}/>
        </>
    )
}
```
트리 구조로 이해하기

```
## 2026-04-08 내용
step1 packingList 컴포넌트 생성, 간단한 list

step2 출력을 확인할 수 있도록 root컴포넌트에서 PackingList호출
step3 Items 컴포넌트 생성, props로 name를 받아 list로 변화
step4 PackingList 컴포넌트에서 items를 호출, prop으로 name전달
step5 Items 컴포넌트에 if문을 사용하여 조건부 렌더링
step6 PackingList 컴포넌트에서 isPacked 속성을 prop으로 전달
```jsx
export default function Items({name, isPacked}){
    if(isPacked){
        return(
        <>
            <li>{name}✅</li>
        </>
        )   
    }
    return(
        <>
            <li>{name}❌</li>
        </>
    )
}
```

step7 item컴포넌트의 if문을 삼항 연산자로
```jsx
export default function Items({name, isPacked}){
    return <li>{name} {isPacked ? "✅" : "❌"}</li>
}

```

step8 jsx중첩을 위해 줄 바꿈과 소괄호를 추가
```jsx
export default function Items({name, isPacked}){
    return(
        <li className="item">
            {isPacked ?(
                <del>
                    {name + '✅'}
                </del>
            ):(
                name + '❌'
            )}
        </li>
    )
}
```

논리 연산자 사용하기
```jsx
export default function Items({name, isPacked}){
    return <li>{name} {isPacked && "✅"}</li>
}
```

변수 사용하기
```jsx
export default function Items({name, isPacked}){
    let itemContent = name;
    if(isPacked){
        itemContent += <div>"✅"</div>;
    }else{
        itemContent += "❌";
    }
    return <li className="item">{itemContent}</li>;
}
```