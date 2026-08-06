import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { mount } from "@vue/test-utils";
import HlsPlayer from "./HlsPlayer.vue";
import Hls from "hls.js";
import { onSlideEnter, onSlideLeave } from "@slidev/client";

// Mock hls.js
vi.mock("hls.js");

// Mock @slidev/client
vi.mock("@slidev/client", () => ({
  onSlideEnter: vi.fn(),
  onSlideLeave: vi.fn(),
  useSlideContext: vi.fn(() => ({
    $renderContext: { value: "slide" },
  })),
}));

describe("HlsPlayer.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the video element with correct attributes", () => {
    const wrapper = mount(HlsPlayer, {
      props: {
        src: "test.m3u8",
        previewImageSrc: "preview.jpg",
        loop: true,
        muted: true,
      },
    });

    const video = wrapper.find("video");
    expect(video.exists()).toBe(true);
    expect(video.attributes("src")).toBe(undefined); // Should have a source element instead
    expect(video.attributes("poster")).toBe("preview.jpg");
    expect(video.attributes("controls")).toBe("");
    expect(video.attributes("loop")).toBe("");
    expect((video.element as HTMLVideoElement).muted).toBe(true);

    const source = video.find("source");
    expect(source.exists()).toBe(true);
    expect(source.attributes("src")).toBe("test.m3u8");
    expect(source.attributes("type")).toBe("application/x-mpegURL");
  });

  it("initializes Hls.js on mount", () => {
    const wrapper = mount(HlsPlayer, {
      props: {
        src: "test.m3u8",
      },
    });

    const hlsInstance = (Hls as unknown as Mock).mock.instances[0];

    expect(Hls).toHaveBeenCalledTimes(1);
    expect(hlsInstance.loadSource).toHaveBeenCalledWith("test.m3u8");
    expect(hlsInstance.attachMedia).toHaveBeenCalledWith(
      wrapper.find("video").element
    );
  });

  it("re-initializes Hls.js on src prop change", async () => {
    const wrapper = mount(HlsPlayer, {
      props: {
        src: "test.m3u8",
      },
    });

    await wrapper.setProps({ src: "new.m3u8" });

    const hlsInstance = (Hls as unknown as Mock).mock.instances[1];

    expect(Hls).toHaveBeenCalledTimes(2);
    expect(hlsInstance.loadSource).toHaveBeenCalledWith("new.m3u8");
    expect(hlsInstance.attachMedia).toHaveBeenCalledWith(
      wrapper.find("video").element
    );
  });

  it("plays the video on slide enter when autoplay is true", () => {
    const wrapper = mount(HlsPlayer, {
      props: {
        src: "test.m3u8",
        autoplay: true,
      },
    });

    const video = wrapper.find("video").element;
    const playSpy = vi.spyOn(video, "play").mockImplementation(async () => {});

    // Simulate slide enter
    const slideEnterCallback = (onSlideEnter as unknown as Mock).mock
      .calls[0][0];
    slideEnterCallback();

    expect(playSpy).toHaveBeenCalled();
  });

  it("pauses the video on slide leave", () => {
    const wrapper = mount(HlsPlayer, {
      props: {
        src: "test.m3u8",
      },
    });

    const video = wrapper.find("video").element;
    const pauseSpy = vi.spyOn(video, "pause").mockImplementation(() => {});

    // Simulate slide leave
    const slideLeaveCallback = (onSlideLeave as unknown as Mock).mock
      .calls[0][0];
    slideLeaveCallback();

    expect(pauseSpy).toHaveBeenCalled();
  });
});
