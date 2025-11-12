#### Attributes

| Name              | Required | Type                             | Description                    | Default                                                  |
| ----------------- | -------- | -------------------------------- | ------------------------------ | -------------------------------------------------------- |
| v-model           | false    | `PickerSelectedValues`           | values of chosen option        | —                                                        |
| columns           | true     | `PickerColumn \| PickerColumn[]` | Columns data                   | —                                                        |
| loading           | false    | `boolean`                        | Whether to show loading prompt | —                                                        |
| columnsFieldNames | false    | `PickerFields`                   | custom columns field           | `{ text: 'text', value: 'value', children: 'children' }` |

#### Events

| Event  | Description                               | Type                                              |
| :----- | :---------------------------------------- | :------------------------------------------------ |
| change | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |

#### Slots

| Name    | Description            | SlotProps |
| :------ | :--------------------- | --------- |
| empty   | Custom empty content   | —         |
| loading | Custom loading content | —         |
