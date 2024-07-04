function draggable(motherId, dragTargetId) {
    const motherElement = document.querySelector('#' + motherId);
    const dragTargetElement = document.querySelector('#' + dragTargetId);
    if (!motherElement || !dragTargetElement) {
        return new Error('element is not defined');
    }

    let dragged;
    dragTargetElement.draggable = true;

    document.querySelectorAll('#' + motherId + '> *').forEach((child) => {
        child.classList.add('dropzone');
    });

    /* 드래그 가능한 대상에서 발생하는 이벤트 */
    dragTargetElement.addEventListener('drag', (event) => {
        console.log('dragging');
    });

    motherElement.addEventListener('dragstart', (event) => {
        // 드래그한 요소에 대한 참조 저장
        dragged = event.target;
        // 반투명하게 만들기
        event.target.classList.add('dragging');
    });

    motherElement.addEventListener('dragend', (event) => {
        // 투명도 초기화
        event.target.classList.remove('dragging');
    });

    /* 드롭 대상에서 발생하는 이벤트 */
    motherElement.addEventListener('dragover', (event) => {
        // 드롭을 허용하기 위해 기본 동작 취소
        event.preventDefault();
    },
        false,
    );

    motherElement.addEventListener('dragenter', (event) => {
        // 드래그 가능한 요소가 대상 위로 오면 강조
        if (event.target.classList.contains('dropzone')) {
            event.target.classList.add('dragover');
        }
    });

    motherElement.addEventListener('dragleave', (event) => {
        // 드래그 가능한 요소가 대상 밖으로 나가면 강조 제거
        if (event.target.classList.contains('dropzone')) {
            event.target.classList.remove('dragover');
        }
    });

    motherElement.addEventListener('drop', (event) => {
        // 일부 요소의 링크 열기와 같은 기본 동작 취소
        event.preventDefault();
        // 드래그한 요소를 선택한 드롭 대상으로 이동
        if (event.target.classList.contains('dropzone')) {
            event.target.classList.remove('dragover');
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    });
}


function sortable(motherId, dragTargetId) {
    if (!motherId || !dragTargetId) {
        return new Error('asd');
    }
}


window.addEventListener('DOMContentLoaded', function () {
    draggable('drag', 'draggable');
    sortable('sort', 'draggable');
});