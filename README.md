## Install with NPM

```
npm i use-viewport-width
```

<<<<<<< HEAD
## Parameter
=======
## Parameters
<<<<<<< HEAD
=======
>>>>>>> 96126f2 (feat: adds the hook logic)
>>>>>>> 1183791050011e0768e4c8ebaf682b85b6165101

| Name        | Type     | Description |
|------------|---------|---------|
| `percentage` | `number` | The percentage of the viewport width to calculate. The hook returns this percentage of the current viewport width in **pixels**. For example, `50` will return 50% of the viewport width. |

## Usage

```typescript
import useVw from 'use-viewport-width'

const { width } = useVw(100) // 100% of the viewport width in pixels
```





## Example

```typescript
import useVw from "use-viewport-width"

function Box() {
  const { width: w } = useVw(50) // 50% of viewport width

  return (
    <div style={{ width: `${w}px`, background: "lightblue", height: "100px" }}>
      responsive box
    </div>
  )
}
```
