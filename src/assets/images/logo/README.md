# Website logo

Drop the official Toyota Chemical Industries logo in this folder and it appears
automatically in the site header, the mobile header, the search overlay and the
footer. No code change is needed.

## Accepted formats

`.svg` · `.png` · `.jpg` · `.jpeg` · `.webp` · `.avif`

## Preferred filename

```
toyota-chemical-logo.svg
```

Any single image file in this folder is picked up, but the name above is
preferred — if more than one file is present, that one wins.

## How it is used

`src/components/common/Logo.jsx` globs this folder at build time and renders the
image with a fixed height and `width: auto` plus `object-fit: contain`, so the
logo is never stretched or squashed. Aspect ratio is always preserved.

- Header: 40px tall
- Footer: 48px tall

If this folder is empty, the component falls back to the typographic mark
(the `TC` monogram and the "TOYOTA CHEMICAL" wordmark) so the build and the
header keep working either way.

## Favicon

`public/favicon.svg` currently holds an on-brand navy/gold monogram. To use the
official logo as the browser tab icon instead, either:

- drop an SVG of the logo over `public/favicon.svg`, or
- save it as `public/favicon.png` and change `index.html` line 5 to
  `<link rel="icon" type="image/png" href="/favicon.png" />`.
