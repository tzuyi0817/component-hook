#### Events

| Event              | Description                                    | Type                                                    |
| :----------------- | :--------------------------------------------- | :------------------------------------------------------ |
| onLoaded           | Callback when the canvas rendering is complete | `Function () => void`                                   |
| onReload           | Callback when the canvas reload                | `Function () => void`                                   |
| onPointerDown      | Triggered when pointer down the canvas         | `Function (event: FabricPointerEvent) => void`          |
| onPointerMove      | Triggered when pointer move the canvas         | `Function (event: FabricPointerEvent) => void`          |
| onPointerUp        | Triggered when pointer up the canvas           | `Function (event: FabricPointerEvent) => void`          |
| onSelectionCreated | Triggered when selection the fabric            | `Function (event: FabricSelectionCreatedEvent) => void` |
| onSelectionCleared | Triggered when clear selection the fabric      | `Function (event: FabricSelectionClearedEvent) => void` |
