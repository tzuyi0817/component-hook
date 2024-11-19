### Events

| Event          | Description                                          | Type                                             |
| :------------- | :--------------------------------------------------- | :----------------------------------------------- |
| onClose        | close picker show `(need to update state)`           | `Function () => void`                            |
| onChangeAnchor | update picker anchor `(need to update anchor state)` | `Function (anchor: number` / `number[]) => void` |
| onConfirm      | Triggered when the confirm button is clicked         | `Function (value: selected item) => void`        |
| onCancel       | Triggered when the cancel button is clicked          | `Function () => void`                            |
