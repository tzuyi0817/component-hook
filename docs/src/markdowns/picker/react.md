#### Attributes

| Name              | Required | Type                             | Description                    | Default                                                  |
| ----------------- | -------- | -------------------------------- | ------------------------------ | -------------------------------------------------------- |
| values            | false    | `PickerSelectedValues`           | values of chosen option        | —                                                        |
| columns           | true     | `PickerColumn \| PickerColumn[]` | Columns data                   | —                                                        |
| title             | false    | `string`                         | Toolbar title                  | —                                                        |
| loading           | false    | `boolean`                        | Whether to show loading prompt | `false`                                                  |
| loadingSlot       | false    | `ReactNode`                      | Custom loading content         | —                                                        |
| emptySlot         | false    | `ReactNode`                      | Custom empty content           | —                                                        |
| columnsFieldNames | false    | `PickerFields`                   | custom columns field           | `{ text: 'text', value: 'value', children: 'children' }` |

#### Events

| Event    | Description                               | Type                                              |
| :------- | :---------------------------------------- | :------------------------------------------------ |
| onChange | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |
