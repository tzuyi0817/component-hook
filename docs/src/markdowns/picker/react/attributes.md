### Attributes

| Name         | Required | Type                  | Description                                                                                | Default               |
| ------------ | -------- | --------------------- | ------------------------------------------------------------------------------------------ | --------------------- |
| isShowPicker | true     | `boolean`             | Control picker show                                                                        | —                     |
| anchor       | true     | `number` / `number[]` | Picker current select index (single column for `number`、 multiple columns for `number[]`) | —                     |
| data         | false    | `array`               | Picker list [1, 2, 3] or [[1, 2, 3], [1, 2, 3]]                                            | —                     |
| type         | false    | `string`              | Built-in picker type, no need to pass in data (date, time)                                 | —                     |
| showKey      | false    | `string` / `string[]` | Wheel options name (object key)                                                            | —                     |
| swipeTime    | false    | `number`              | Wheel swipe Time                                                                           | 500                   |
| options      | false    | `object`              | Custom text, color and class                                                               | See below for details |
