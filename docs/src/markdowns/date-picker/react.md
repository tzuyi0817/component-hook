#### Attributes

| Name              | Required | Type                          | Description                                                               | Default                        |
| ----------------- | -------- | ----------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| values            | false    | `PickerSelectedValues`        | values of chosen option                                                   | —                              |
| show              | true     | `boolean`                     | Control picker show                                                       | —                              |
| columnsType       | false    | `DatePickerColumnType[]`      | Columns type                                                              | `['year', 'month', 'day']`     |
| title             | false    | `string`                      | Toolbar title                                                             | `Select Date`                  |
| minDate           | false    | `Date`                        | Min date                                                                  | Ten years ago on January 1     |
| maxDate           | false    | `Date`                        | Max date                                                                  | Ten years later on December 31 |
| teleport          | false    | `Element \| DocumentFragment` | Specifies a target element where Popup will be mounted                    | `document.body`                |
| confirmButtonText | false    | `string`                      | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |
| cancelButtonText  | false    | `string`                      | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |
| formatYearLabel   | false    | `PickerFormatLabel`           | Year label formatter                                                      | —                              |
| formatMonthLabel  | false    | `PickerFormatLabel`           | Month label formatter                                                     | —                              |
| formatDayLabel    | false    | `PickerFormatLabel`           | Day label formatter                                                       | —                              |

### Events

| Event     | Description                                     | Type                                              |
| :-------- | :---------------------------------------------- | :------------------------------------------------ |
| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |
| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |
| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |
| onOpen    | Triggered when the picker open                  | `Function () => void`                             |
| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |
