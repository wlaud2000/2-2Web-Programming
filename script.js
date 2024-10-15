// 타겟 요소 가져오기
const h1 = document.querySelector('.blinking__txt');
const cursor = document.querySelector('.cursor');

// 타이핑할 텍스트와 인덱스 초기화
const text = "어서오세요! Welcome\n백엔드 개발자 김지명입니다!";
let index = 0; // 현재 글자 위치
const typingSpeed = 100; // 타이핑 속도 (밀리초)

// 타이핑 함수
function typing() {
    if (index < text.length) {
        h1.textContent += text[index]; // 한 글자씩 추가
        index++; // 인덱스 증가
    } else {
        clearInterval(typingInterval); // 타이핑 종료
        cursor.classList.add('blink_animate'); // 커서 깜빡임 시작
    }
}

// 페이지 로드 시 타이핑 애니메이션 시작
const typingInterval = setInterval(typing, typingSpeed); // 속도 조절 가능
