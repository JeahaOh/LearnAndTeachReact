# React, 배워서 남주자.

## 05. 조건부 렌더링.

특정 조건에 따라서 다른 결과를 보여주도록 해보자.

## 04. Props를 통해 컴포넌트에 값 전달하기.

- 컴포넌트를 사용할 때 값을 전달할 때 props(properties)사용함.
- 내용과 내용 사이에 넣어주는 컴포넌트가 props.children임.

## 03. JSX

jsx는 [babel](https://babeljs.io/)이라는 도구를 이용해서 javascript 코드를 html로 만들어 주는 것임.  
babel 테스트에서 다음 코드를 테스트 해 보자.  

```js
(
	<div>
    <b>Hello, </b> <span> Hell The React</span>
	</div> 
)
```

### JSX의 규칙

- HTML
  - 태그는 꼭 닫혀야 한다.
  - 두 개 이상의 태그는 하나의 태그에 감싸져있어야 한다.
    - Fragment(빈 태그 <></>)로 닫아도 된다.
    - 가독성을 위해 ()를 사용하면 편하다.
  - class는 className을 사용한다
- JS
  - jsx 내에서 js를 사용한다면 {}를 사용한다.
- CSS
  - jsx 내에서 css를 사용한다면 객체로 만들어준다.
- Comment
  - 주석은 {/\* \*/}

## 02. first react component

컴포넌트는 UI 조각이고, 재사용도 가능함.

## 01. React Project의 초기 상태에 대한 설명.

index.html의 root와 index.js.  
app.js  

## 00. initial react project.

- CodeSandbox로 React 프로젝트 생성.
- README.MD 파일 생성.
- .gitignore 파일 생성.
- .prettierrc 파일 생성.