# 최주형 202230336

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