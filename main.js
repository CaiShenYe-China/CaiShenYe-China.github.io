document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加交互功能
    
    // 示例：控制评论表单提交
    const commentForm = document.querySelector('.comment-form form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const commentText = document.getElementById('comment').value;
            
            if (name && commentText) {
                addComment(name, commentText);
                this.reset();
            }
        });
    }
    
    // 添加新评论到列表
    function addComment(name, text) {
        const commentList = document.querySelector('.comment-list');
        const now = new Date();
        const dateStr = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日';
        
        const commentHTML = `
            <div class="comment">
                <div class="comment-meta">
                    <span class="comment-author">${name}</span>
                    <span class="comment-date">${dateStr}</span>
                </div>
                <div class="comment-content">
                    <p>${text}</p>
                </div>
            </div>
        `;
        
        commentList.insertAdjacentHTML('afterbegin', commentHTML);
    }
    
    // 其他交互功能可以在这里添加
});
