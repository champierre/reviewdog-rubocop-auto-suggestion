const commentBodies = document.querySelectorAll('.comment-body');
for (let i = 0; i < commentBodies.length; i++) {
  const suggestionButton = commentBodies[i].querySelectorAll('.js-apply-suggestion-button')[0];
  const p = commentBodies[i].querySelectorAll('p[dir="auto"]')[0];
  if (suggestionButton && p) {
    const title = `Fix rubocop error: ${p.childNodes[1].textContent}`;
    const body = `${title}\n${p.childNodes[4].textContent}`;
    suggestionButton.addEventListener('click', (el) => {
      const selectMenu = commentBodies[i].querySelectorAll('.SelectMenu')[0];
      selectMenu.querySelectorAll('.js-suggestion-commit-title')[0].value = title;
      selectMenu.querySelectorAll('.js-quick-submit')[0].value = body;
    });
  }
}
