export function setupCounter(element: HTMLButtonElement) {
  let count = 0;
  element.addEventListener('click', () => {
    count += 1;
    element.innerText = `Count: ${count}`;
  });
}

