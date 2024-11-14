export function readfile(file: File): Promise<FileReader['result']> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => resolve(fileReader.result));
    fileReader.addEventListener('error', reject);
    fileReader.readAsDataURL(file);
  });
}
