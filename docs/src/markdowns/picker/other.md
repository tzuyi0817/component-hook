### Options Attribute

```json
{
  "cancelClass": "",
  "confirmClass": "",
  "titleClass": "",
  "cancelColor": "#999",
  "confirmColor": "#42b983",
  "titleColor": "",
  "cancelText": "Cancel",
  "confirmText": "Confirm",
  "titleText": ""
}
```

### Events

| Event   | Description                                  | Type                           |
| :------ | :------------------------------------------- | :----------------------------- |
| confirm | Triggered when the confirm button is clicked | `Function () => selected item` |
| cancel  | Triggered when the cancel button is clicked  | `Function () => void`          |
