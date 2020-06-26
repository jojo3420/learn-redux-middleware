# learn-redux-middleware
learn redux middleware by 리액트를 다루는 기술 

## 미들웨어란?
리덕스 미들웨어는 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행합니다. 미들웨어는 액션과 리듀서 사이의 중간자라고 볼 수 있습니다.

## 흐름
[액션] => [미들웨어] => [리듀서] => [스토어]

듀서가 액션을 처리하기 전에 미들웨어가 할 수 있는 작업은 여러 가지가 있습니다. 전달받은 액션을 단순히 콘솔에 기록하거나, 전달받은 액션 정보를 기반으로 액션을 아예 취소하거나, 다른 종류의 액션을 추가로 디스패치할 수도 있습니다


## Redux thunk
지연 함수를 리턴 하여 나중에 비동기 처리(계산)를 한다.


## Redux Saga 
javascript generator 함수를 이용하여 구현 되어있다.

#### generator 사용법

code
`
 function* generatorFunction() {
    console.log('start 1');
    yield 1;
    
    console.log(2);
    yield 2;
    
    console.log(3);
    yield 3;
    
    console.log(4);
    yield 4;
    
    console.log('end');
    return 5;
 }
 

 const generator = generatorFunction();
 generator.next();
 // { value: 1, done: false } 
 generator.next();
 // { value: 2, done: false }
 generator.next();
 // { value: 3, done: false }
 generator.next();
 // { value: 4, done: false }
 generator.next();
 // { value: 5, done: true }
 generator.next();
 // { value: null, done: true }
 `

redux-saga 내부 작동 원리 
`
function* watchGenerator () {
    console.log('모니터링 중...');
    let prevAction = null;
    while(true) {
        const action = yield; // next() 함수 배개변수로 받은 값 
        console.log('이전 액션:', prevAction);
        prevAction = action;
        if (action.type === 'HELLO') {
            console.log('안녕하세요');
        }
    }
}

const watch = watchGenerator();
watch.next(); 
// 모니터링중...

watch.next({type: 'TEST'});
// 이전 액션: null
// { value: undefined, done: false }

watch.next({type: 'HELLO'});
// 이전 액션: {type: 'TEST'};
// 안녕하세요
// { value: undefined, done: false }
`
redux-saga는 위 코드와 비슷한 원리로 작동합니다. 
제너레이터 함수의 작동 방식만 기본적으로 파악하고 있으면, 
redux-saga에서 제공하는 여러 유용한 유틸 함수를 사용하여 액션을 쉽게 처리할 수 있습니다.
https://redux-saga.js.org/




