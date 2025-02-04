#### Attributes

| Name              | Required | Type                             | Description                                                               | Default                                                  |
| ----------------- | -------- | -------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| values            | false    | `PickerSelectedValues`           | values of chosen option                                                   | —                                                        |
| show              | true     | `boolean`                        | Control picker show                                                       | —                                                        |
| columns           | true     | `PickerColumn \| PickerColumn[]` | Columns data                                                              | —                                                        |
| title             | false    | `string`                         | Toolbar title                                                             | —                                                        |
| loading           | false    | `boolean`                        | Whether to show loading prompt                                            | `false`                                                  |
| loadingSlot       | false    | `ReactNode`                      | Custom loading content                                                    | —                                                        |
| emptySlot         | false    | `ReactNode`                      | Custom empty content                                                      | —                                                        |
| teleport          | false    | `Element \| DocumentFragment`    | Specifies a target element where Popup will be mounted                    | `document.body`                                          |
| confirmButtonText | false    | `string`                         | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                                                |
| cancelButtonText  | false    | `string`                         | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                                                 |
| columnsFieldNames | false    | `PickerFields`                   | custom columns field                                                      | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| Event     | Description                                     | Type                                              |
| :-------- | :---------------------------------------------- | :------------------------------------------------ |
| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |
| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |
| onChange  | Triggered when the selected change              | `Function (values: PickerSelectedValues) => void` |
| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |
| onOpen    | Triggered when the picker open                  | `Function () => void`                             |
| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |
