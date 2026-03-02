# Statcounter

Minimal Statcounter include component.

### Install

```bash
npm install react-statcounter
```

### Usage

```tsx
import { StatcounterSimple } from "react-statcounter";

export function App() {
  return (
    <>
      <StatcounterSimple
        siteUrl="https://stats-360.com"
        scriptSrc="https://www.statcounter.com/counter/counter.js"
        initJs={`
          window.sc_project=13208266;
          window.sc_invisible=1;
          window.sc_security="6015f6a8";
        `}
      />
    </>
  );
}
```
