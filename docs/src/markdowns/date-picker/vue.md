#### Attributes

| Name             | Required | Type                     | Description             | Default                        |
| ---------------- | -------- | ------------------------ | ----------------------- | ------------------------------ |
| v-model          | false    | `PickerSelectedValues`   | values of chosen option | —                              |
| columnsType      | false    | `DatePickerColumnType[]` | Columns type            | `['year', 'month', 'day']`     |
| minDate          | false    | `Date`                   | Min date                | Ten years ago on January 1     |
| maxDate          | false    | `Date`                   | Max date                | Ten years later on December 31 |
| formatYearLabel  | false    | `PickerFormatLabel`      | Year label formatter    | —                              |
| formatMonthLabel | false    | `PickerFormatLabel`      | Month label formatter   | —                              |
| formatDayLabel   | false    | `PickerFormatLabel`      | Day label formatter     | —                              |

#### Events

| Event  | Description                               | Type                                              |
| :----- | :---------------------------------------- | :------------------------------------------------ |
| change | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |
