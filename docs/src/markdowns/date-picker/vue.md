#### Attributes

| Name              | Required | Type                     | Description                                                               | Default                        |
| ----------------- | -------- | ------------------------ | ------------------------------------------------------------------------- | ------------------------------ |
| v-model           | false    | `PickerSelectedValues`   | values of chosen option                                                   | —                              |
| v-model:show      | true     | `boolean`                | Control picker show                                                       | —                              |
| columnsType       | false    | `DatePickerColumnType[]` | Columns type                                                              | `['year', 'month', 'day']`     |
| title             | false    | `string`                 | Toolbar title                                                             | —                              |
| minDate           | false    | `Date`                   | Min date                                                                  | Ten years ago on January 1     |
| maxDate           | false    | `Date`                   | Max date                                                                  | Ten years later on December 31 |
| teleport          | false    | `string \| Element`      | Specifies a target element where Popup will be mounted                    | `body`                         |
| confirmButtonText | false    | `string`                 | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |
| cancelButtonText  | false    | `string`                 | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |
| formatYearLabel   | false    | `PickerFormatLabel`      | Year label formatter                                                      | —                              |
| formatMonthLabel  | false    | `PickerFormatLabel`      | Month label formatter                                                     | —                              |
| formatDayLabel    | false    | `PickerFormatLabel`      | Day label formatter                                                       | —                              |

#### Events

| Event   | Description                                    | Type                                              |
| :------ | :--------------------------------------------- | :------------------------------------------------ |
| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |
| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |
| open    | Triggered when the picker open                 | `Function () => void`                             |
| closed  | Triggered when the picker close transition end | `Function () => void`                             |
