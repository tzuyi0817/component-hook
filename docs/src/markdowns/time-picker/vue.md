#### Attributes

| Name              | Required | Type                     | Description                                                               | Default                        |
| ----------------- | -------- | ------------------------ | ------------------------------------------------------------------------- | ------------------------------ |
| v-model           | false    | `PickerSelectedValues`   | values of chosen option                                                   | —                              |
| v-model:show      | true     | `boolean`                | Control picker show                                                       | —                              |
| columnsType       | false    | `TimePickerColumnType[]` | Columns type                                                              | `['hour', 'minute', 'second']` |
| title             | false    | `string`                 | Toolbar title                                                             | `Select Time`                  |
| minTime           | false    | `string`                 | Min time, format reference `00:00:00`                                     | —                              |
| maxTime           | false    | `string`                 | Max time, format reference `00:00:00`                                     | —                              |
| teleport          | false    | `string \| Element`      | Specifies a target element where Popup will be mounted                    | `body`                         |
| confirmButtonText | false    | `string`                 | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |
| cancelButtonText  | false    | `string`                 | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |
| formatHourLabel   | false    | `PickerFormatLabel`      | Hour label formatter                                                      | —                              |
| formatMinuteLabel | false    | `PickerFormatLabel`      | Minute label formatter                                                    | —                              |
| formatSecondLabel | false    | `PickerFormatLabel`      | Second label formatter                                                    | —                              |

#### Events

| Event   | Description                                    | Type                                              |
| :------ | :--------------------------------------------- | :------------------------------------------------ |
| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |
| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |
| open    | Triggered when the picker open                 | `Function () => void`                             |
| closed  | Triggered when the picker close transition end | `Function () => void`                             |
