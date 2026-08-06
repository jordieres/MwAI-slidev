# HLS video player for Slidev

This addon provides a component to play HLS videos in your [Slidev](https://sli.dev) presentations.

## Install

To use this addon, install it with your package manager:

```bash
pnpm install slidev-addon-hls-player
```

Then, add the addon to your `addons` configuration in your frontmatter:

```yaml
---
addons:
  - slidev-addon-hls-player
---
```

## Usage

You can use the `HlsPlayer` component in your slides:

```vue
<HlsPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
```

### Autoplay

To make the video autoplay when the slide is active, use the `autoplay` prop. The video will pause when the slide is not active.

```vue
<HlsPlayer
  src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  :autoplay="true"
/>
```

### Preview Image

You can provide a preview image that will be displayed before the video starts playing.

```vue
<HlsPlayer
  src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  previewImageSrc="https://via.placeholder.com/1920x1080"
/>
```

## Component Props

| Prop              | Type      | Default | Description                                         |
| ----------------- | --------- | ------- | --------------------------------------------------- |
| `src`             | `string`  | `''`    | The URL of the HLS stream (`.m3u8`).                |
| `previewImageSrc` | `string`  | `''`    | The URL of a preview image to show before playback. |
| `autoplay`        | `boolean` | `false` | Whether to start playing the video automatically.   |
| `loop`            | `boolean` | `false` | Whether to loop the video.                          |
| `muted`           | `boolean` | `false` | Whether to mute the video.                          |

## License

This addon is licensed MIT.
