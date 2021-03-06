# Protocol definition for iEDA visualization data transmission

## JSON with reference

There are two main JSON objects involved in the synthesis of render-able data.

+ `reference` : Object

    The `reference` object contains a list of `namespaces`,
    each `namespace` includes a list of `ref` objects.

    The `ref` objects can be indexed by either `number` or `string`.
    In the first case, `ref` object can be represented by an array,
    in the second case, `ref` object can be written as a trivial JSON object.

+ `instance` : Array

    Each element of this array will be rendered to the canvas.
    The `current` scope of its children is the `instance` array itself.

## The magic `$` symbol

In both instance elements and namespace elements, key starting with a dollar symbol (`$`) will be treated as a reference.

+ A single `$` references its enclosing scope, which is always the element's parent scope.

+ `$` followed by a string will refer to the scope name after that string (e.g. `$hello` will refer to namespace 'hello')

+ The values of the magic key will be used as injection keys. Depending on the indexing type of reference, it can be either `number`, `number[]`, `string` or `string[]`

## key-mapped handlers

The third optional argument specifies a map of key-mapped callbacks used for merge values with the exact same key.

Each callback takes two arguments, the first being the existing value in this instance,
the second being the current value to be added into the bundle.

New value will be the return value of the callback.

Please look into demo/handlers.js for example usage.

## Examples

1. Single numbered reference

    ```js
    // reference
    ref = {
        layer: [
            { layerName: 'layer 0' }
        ]
    }
    // instances
    instances = [
        { $layer: 0 }
    ]
    // result
    result = [
        { layerName: 'layer 0' }
    ]
    ```

1. Single number reference to current scope

    1. `instance[1] -> instance[0]`

        ```js
        // instances
        instances = [
            { position: [100, 200] },
            { $: 0 }
        ]
        // result
        result = [
            { position: [100, 200] },
            { position: [100, 200] }
        ]
        ```

    1. `reference['layer'][1] -> reference['layer'][0]`

        ```js
        // reference
        reference = {
            layer: [
                { layerName: 'layer 0' },
                { $: 0 } // instance[0] referred this line
            ]
        }
        // instances
        instances = [
            { $layer: 1 }
        ]
        // result
        result = [
            { layerName: 'layer 0' }
        ]
        ```

## Play with implementation

Feel free to examine and modify the content of `demo/*.js`.

```sh
node demo
```

> NodeJS version recommended to be at least `v16.0.x`