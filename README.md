# 최주형 202230336

## 2026-05-27 내용

# 스냅샷
> 기존: 자연스러운 순간이나 동작을 재빠르게 찍는것
> IT: 특정 시간대에 데이터 및 파일 시스템 상태를 그대로 기록해 두는 기술

# 랜더링 과정의 3단계
> 1. 상호작용 -> 컴포넌트 재호출 + 스냅샷 계산
> 2. 컴포넌트가 새로운 jsx스냅샷 반환
> 3. react는 컴포넌트가 반환환 스냅샷과 일치하도록 화면 변경
> 4. 새로운 state로 이벤트 핸들러 생성

1. **렌더링 트리거 (Triggering a render)**
   * 컴포넌트가 처음 화면에 추가될 때(초기 렌더링) 또는 컴포넌트(혹은 상위 컴포넌트)의 상태(state)가 변경되었을 때 React에 렌더링이 요청
2. **컴포넌트 렌더링 (Rendering the component)**
   * React가 컴포넌트(함수)를 호출하여 화면에 표시할 내용을 파악하는 단계입니다.
   * 초기 렌더링 시에는 루트(Root) 컴포넌트를 호출하고, 이후 업데이트 시에는 상태가 변경된 컴포넌트를 호출하여 새로운 가상 DOM(Virtual DOM)을 만들고 변경 사항을 계산
   * 주의: 여기서 '렌더링'은 화면에 그리는 것이 아니라, React가 **컴포넌트 함수를 실행하는 과정**을 의미
3. **DOM에 커밋 (Committing to the DOM)**
   * React가 파악한 변경 사항을 브라우저의 실제 DOM에 적용하는 단계
   * 초기 렌더링 시에는 모든 노드를 DOM에 추가하고, 업데이트 시에는 이전 렌더링과 비교해 **변경된 최소한의 부분만** DOM에 반영
   * 이 단계가 끝나면 브라우저가 변경된 DOM을 바탕으로 화면을 다시 그림

# State Hook의 동작원리 - 여러개의 state를 사용하기

React 컴포넌트에서는 `useState`를 여러 번 호출하여 여러 개의 독립적인 상태(state)를 관리

1. **상태의 독립성**
   * 여러 개의 state를 선언하더라도 각각은 완전히 독립적으로 동작
   * 예를 들어 `index` 상태를 업데이트(setIndex)하더라도 `showMore` 같은 다른 상태에는 전혀 영향을 주지 않음
2. **React가 여러 state를 식별하는 방법 (호출 순서)**
   * React는 내부적으로 컴포넌트의 상태를 식별할 때 변수 이름이 아니라 **Hook이 호출된 순서**에 의존
   * 렌더링될 때마다 첫 번째로 호출된 `useState`는 첫 번째 상태값(예: index)을 반환하고, 두 번째로 호출된 `useState`는 두 번째 상태값(예: showMore)을 반환하는 방식
   * **Hook의 규칙 (Rules of Hooks):** 이러한 순서 기반의 동작 원리 때문에, Hook은 항상 컴포넌트의 **최상위(Top-level)**에서만 호출되어야 함. `if`문 조건 안이나 반복문(`for`) 안에서 `useState`를 호출하면 렌더링마다 Hook의 호출 순서가 달라져 상태가 꼬이는 치명적인 버그가 발생할 수 있음

**다중 state 사용 예시:**
```jsx
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);           // 1번째 Hook 호출
  const [showMore, setShowMore] = useState(false); // 2번째 Hook 호출

  // ... 
}
```

# React가 state를 강조하는 이유

React가 state를 강조하는 이유는 UI(사용자 인터페이스)와 데이터를 효과적으로 동기화하는 핵심 메커니즘이기 때문

1. **UI 자동 업데이트 (Re-rendering)**
   * 일반적인 로컬 변수(`let`, `const`)는 값이 변경되어도 React가 이를 감지하지 못해 화면이 변하지 않음
   * 반면, **State가 변경되면 React는 이를 감지하고 해당 컴포넌트를 자동으로 다시 렌더링**하여 변경된 데이터를 화면에 즉각적으로 반영
2. **데이터의 유지 (Persistence)**
   * 함수형 컴포넌트는 렌더링될 때마다 내부의 코드가 다시 실행됩니다. 이때 일반 변수들은 매번 초기화되지만, **State는 렌더링 사이에서도 그 값을 안전하게 기억하고 유지**
3. **선언적 UI (Declarative UI)**
   * 개발자는 `document.getElementById`처럼 직접 DOM을 찾아 조작(명령형)할 필요 없이, 상태(State)를 어떻게 변경할지만 정의하면 됩니다. React가 상태 변화에 맞춰 화면을 알아서 업데이트
4. **독립적인 컴포넌트 관리**
   * State는 컴포넌트의 특정 인스턴스에 지역적으로 유지됩니다. 동일한 컴포넌트를 화면에 여러 번 렌더링하더라도 **각각 독립적인 상태를 가지며 서로 영향을 주지 않음**


## 2026-05-20 내용

# State Hook에 컴포넌트 상태 저장하기

이미지는 index1의 이미지가 렌더링 되는데 console를 찍어보면 index는 0이 출력됩니다.
클릭을 하면 handleClick함수는 다음과 같이 동작
```jsx
// 1번째 클릭 시 (초기 상태, index = 0)
function handleClick(){
    setIndex((index + 1) % gallery.length); // 상태를 1로 업데이트하도록 예약
    console.log(index); // 0 출력 (현재 렌더링 주기의 index 값은 아직 변하지 않음)
}

// 2번째 클릭 시 (리렌더링 후, index = 1)
function handleClick(){
    setIndex((index + 1) % gallery.length); // 상태를 2로 업데이트하도록 예약
    console.log(index); // 1 출력
}

// 3번째 클릭 시 (리렌더링 후, index = 2)
function handleClick(){
    setIndex((index + 1) % gallery.length); // 상태를 0으로 업데이트하도록 예약 (길이가 3인 경우)
    console.log(index); // 2 출력
}

```

React에서 **State Hook(`useState`)**은 컴포넌트의 현재 상태를 보관할 수 있는 메모리 역할을 제공합니다.

* **주요 특징**:
  * 일반 로컬 변수와 달리, 상태(state) 값이 변경되면 React가 자동으로 해당 컴포넌트를 **다시 렌더링(Re-rendering)**하여 화면을 업데이트합니다.
  * 컴포넌트가 사용자와의 상호작용(버튼 클릭, 텍스트 입력 등) 결과를 기억하고 화면에 즉각적으로 반영해야 할 때 필수적으로 사용됩니다.
* **기본 사용법**:
  ```jsx
  const [state, setState] = useState(initialState);
  ```
  * `state`: 현재 상태 값을 유지하는 변수
  * `setState`: 상태 값을 업데이트하고 컴포넌트 리렌더링을 유발하는 함수
  * `initialState`: 상태의 초기값

**render오류**
렌더링 완료 후 index일반 변수를 다시 할당해도 화면이 업데이트되지 않음 -> `useState` 상태(state) 사용 필수

```jsx
import { useState } from "react";
import { gallery } from "./imgData";

export default function Carousel() {
    const [index, setIndex] = useState(0); // 일반 변수 대신 useState 훅 사용

    function handeClick() {
        setIndex((index + 1) % gallery.length); // setIndex로 상태 변경 시 리렌더링 발생
    }

    let slide = gallery[index];
    return (
        <>
        <button onClick={handeClick}>Next</button>
        <h2>
            <li>{slide.name}</li>
            by {slide.artist}
        </h2>
        <h3>{index + 1} of {gallery.length}</h3>
        <img src={slide.img} alt={slide.alt} />
        <p>{slide.description}</p>
        </>
    )
}
```

> placehold.co에서 더미 이미지 가져오기 가능

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