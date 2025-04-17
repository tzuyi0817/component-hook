#### Events

| Event            | Description                                    | Type                                                    |
| :--------------- | :--------------------------------------------- | :------------------------------------------------------ |
| loaded           | Callback when the canvas rendering is complete | `Function () => void`                                   |
| reload           | Callback when the canvas reload                | `Function () => void`                                   |
| pointerDown      | Triggered when pointer down the canvas         | `Function (event: FabricPointerEvent) => void`          |
| pointerMove      | Triggered when pointer move the canvas         | `Function (event: FabricPointerEvent) => void`          |
| pointerUp        | Triggered when pointer up the canvas           | `Function (event: FabricPointerEvent) => void`          |
| selectionCreated | Triggered when selection the fabric            | `Function (event: FabricSelectionCreatedEvent) => void` |
| selectionCleared | Triggered when clear selection the fabric      | `Function (event: FabricSelectionClearedEvent) => void` |
