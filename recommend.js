
    
    const form = document.querySelector(".recommend-form");
    const submitBtn = document.getElementById('submit-btn');
    
    // 폼 검증 함수
    function validateForm() {
        // 입력값 가져오기
        const placeName = form.querySelector('.place').value.trim();
        const date = form.querySelector('.date').value.trim();
        const address = form.querySelector('.address').value.trim();
        const name = form.querySelector('.name').value.trim();
        const email = form.querySelector('.email').value.trim();
        
        // 이메일 형식 정규식
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // 필수 항목 확인
        if (!placeName) {
            alert("야경 명소 이름을 입력해주세요.");
            form.querySelector('.place').focus();
            return false;
        }

        if (!date) {
            alert("날짜를 선택해주세요.");
            form.querySelector('.date').focus();
            return false;
        }

        if (!address) {
            alert("상세주소를 입력해주세요.");
            form.querySelector('.address').focus();
            return false;
        }
        
        if (!name) {
            alert("이름을 입력해주세요.");
            form.querySelector('.name').focus();
            return false;
        }

        if (!email) {
            alert("이메일을 입력해주세요.");
            form.querySelector('.email').focus();
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("올바른 이메일 형식이 아닙니다.\n예: example@email.com");
            form.querySelector('.email').focus();
            return false;
        }

        return true;
    }

    // 제출 버튼 클릭 이벤트
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 없으면 새로 고침 되면서 썼던 양식 날라감 폼 자동 제출 방지 (꼭 필요!)
            
            
            if (validateForm()) {
                alert(' 성공적으로 제출되었습니다!\n감사합니다.');
                
                form.reset();
            }
        });
    } 

