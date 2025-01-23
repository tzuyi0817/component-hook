#### Attributes

| Name              | Required | Type                             | Description                                                               | Default                                                  |
| ----------------- | -------- | -------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| v-model           | false    | `PickerSelectedValues`           | values of chosen option                                                   | —                                                        |
| v-model:show      | true     | `boolean`                        | Control picker show                                                       | —                                                        |
| columns           | true     | `PickerColumn \| PickerColumn[]` | Columns data                                                              | —                                                        |
| title             | false    | `string`                         | Toolbar title                                                             | —                                                        |
| linkage           | false    | `boolean`                        | Whether to link when scrolling to select                                  | —                                                        |
| loading           | false    | `boolean`                        | Whether to show loading prompt                                            | —                                                        |
| teleport          | false    | `string \| Element`              | Specifies a target element where Popup will be mounted                    | `body`                                                   |
| confirmButtonText | false    | `string`                         | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                                                |
| cancelButtonText  | false    | `string`                         | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                                                 |
| columnsFieldNames | false    | `PickerFields`                   | custom columns field                                                      | `{ text: 'text', value: 'value', children: 'children' }` |

#### Events

| Event   | Description                                    | Type                                              |
| :------ | :--------------------------------------------- | :------------------------------------------------ |
| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |
| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |
| open    | Triggered when the picker open                 | `Function () => void`                             |
| closed  | Triggered when the picker close transition end | `Function () => void`                             |

#### Slots

| Name    | Description            | SlotProps |
| :------ | :--------------------- | --------- |
| empty   | Custom empty content   | —         |
| loading | Custom loading content | —         |
