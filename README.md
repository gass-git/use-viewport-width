# 📏 use-viewport-width
[![Downloads](https://img.shields.io/npm/dm/use-viewport-width.svg?style=flat-square)](https://www.npmjs.com/package/use-viewport-width)
[![version](https://img.shields.io/npm/v/use-viewport-width.svg?style=flat-square)](https://www.npmjs.com/package/use-viewport-width)

React hook that returns a pixel value for a given percentage of the viewport width, updating automatically on resize for responsive layouts.

## Install with NPM

```
npm i use-viewport-width
```
## Parameter

| Name        | Type     | Description |
|------------|---------|---------|
| `percentage` | `number` | The percentage of the viewport width to calculate. The hook returns this percentage of the current viewport width in **pixels**. For example, `50` will return 50% of the viewport width. |

## Usage

```typescript
import useVW from 'use-viewport-width'

const w = useVW(100); // 100% of the viewport width in pixels
```

## Example

```typescript
import useVW from "use-viewport-width"

function Box() {
  const w = useVW(50); // 50% of viewport width

  return (
    <div style={{ width: `${w}px`, background: "blue", height: "100px" }}>
      responsive box - width: {w}px
    </div>
  )
}
```
