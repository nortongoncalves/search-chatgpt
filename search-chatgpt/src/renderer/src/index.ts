import { Upload } from "../../domain/Upload";

function handlePressTextArea(event: Event) {
  if (!(event instanceof KeyboardEvent)) return;
  if (event.ctrlKey === false || event.key !== 'Enter') return;
  const { value } = event.target as unknown as {value: string};
  const upload = new Upload(value);
  window.electron.ipcRenderer.send('Submit', upload.getData());
}

export function main() {
  const textarea = document.querySelector('textarea.search');
  if (!textarea) return;
  textarea.addEventListener('keydown', handlePressTextArea);
}

window.addEventListener('DOMContentLoaded', () => main());
