## Exposes

| Event        | Description                             | Type                                                             |
| :----------- | :-------------------------------------- | :--------------------------------------------------------------- |
| addImage     | Manually add the images onto the canvas | `Function (src: string, options?: TOptions<ImageProps>) => void` |
| addText      | Manually add the text onto the canvas   | `Function (text: string, options?: TOptions<TextProps>) => void` |
| clearActive  | Manually deactivate status              | `Function () => void`                                            |
| deleteCanvas | Delete the current canvas               | `Function () => void`                                            |
| canvasRef    | The current canvas dom ref              | `object Ref<HTMLCanvasElement>`                                  |
