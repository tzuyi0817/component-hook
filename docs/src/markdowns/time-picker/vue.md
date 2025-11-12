#### Attributes

| Name              | Required | Type                     | Description                           | Default                        |
| ----------------- | -------- | ------------------------ | ------------------------------------- | ------------------------------ |
| v-model           | false    | `PickerSelectedValues`   | values of chosen option               | —                              |
| columnsType       | false    | `TimePickerColumnType[]` | Columns type                          | `['hour', 'minute', 'second']` |
| minTime           | false    | `string`                 | Min time, format reference `00:00:00` | —                              |
| maxTime           | false    | `string`                 | Max time, format reference `00:00:00` | —                              |
| formatHourLabel   | false    | `PickerFormatLabel`      | Hour label formatter                  | —                              |
| formatMinuteLabel | false    | `PickerFormatLabel`      | Minute label formatter                | —                              |
| formatSecondLabel | false    | `PickerFormatLabel`      | Second label formatter                | —                              |

#### Events

| Event  | Description                               | Type                                              |
| :----- | :---------------------------------------- | :------------------------------------------------ |
| change | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |

#### Exposes

| Name           | Description                        | Type                  |
| :------------- | :--------------------------------- | :-------------------- |
| setCurrentTime | Reset the time to the current time | `Function () => void` |
