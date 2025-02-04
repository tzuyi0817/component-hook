#### Attributes

| Name              | Required | Type                          | Description                                                               | Default                        |
| ----------------- | -------- | ----------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| values            | false    | `PickerSelectedValues`        | values of chosen option                                                   | —                              |
| show              | true     | `boolean`                     | Control picker show                                                       | —                              |
| columnsType       | false    | `TimePickerColumnType[]`      | Columns type                                                              | `['hour', 'minute', 'second']` |
| title             | false    | `string`                      | Toolbar title                                                             | `Select Time`                  |
| minTime           | false    | `string`                      | Min time, format reference `00:00:00`                                     | —                              |
| maxTime           | false    | `string`                      | Max time, format reference `00:00:00`                                     | —                              |
| teleport          | false    | `Element \| DocumentFragment` | Specifies a target element where Popup will be mounted                    | `document.body`                |
| confirmButtonText | false    | `string`                      | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |
| cancelButtonText  | false    | `string`                      | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |
| formatHourLabel   | false    | `PickerFormatLabel`           | Hour label formatter                                                      | —                              |
| formatMinuteLabel | false    | `PickerFormatLabel`           | Minute label formatter                                                    | —                              |
| formatSecondLabel | false    | `PickerFormatLabel`           | Second label formatter                                                    | —                              |

### Events

| Event     | Description                                     | Type                                              |
| :-------- | :---------------------------------------------- | :------------------------------------------------ |
| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |
| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |
| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |
| onOpen    | Triggered when the picker open                  | `Function () => void`                             |
| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |
