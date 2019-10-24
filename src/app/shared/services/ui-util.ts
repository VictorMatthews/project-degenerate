export class UiUtil {

  // See: https://github.com/angular/flex-layout/wiki/Responsive-API
  // for abbreviations and sizes.

  static readonly SMALL_WIDTH = 599;

  static isHandheld(): boolean {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    return (
      // Portrait
      (screenWidth <= UiUtil.SMALL_WIDTH && screenHeight <= 959) ||
      // Landscape
      (screenHeight <= UiUtil.SMALL_WIDTH && screenWidth <= 959));
  }

  static isTablet(): boolean {
    return !UiUtil.isHandheld() && !UiUtil.isDesktop();
  }

  static isDesktop(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 1024;
  }

  static isScreenLtSm(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth <= UiUtil.SMALL_WIDTH;
  }

  static isScreenLtMd(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth <= 959;
  }

  static isScreenLtPhoneLandscapeWidth(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth <= 639;
  }

  static isScreenPhoneLandscapeWidth(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth >= 640 && screenWidth < 959;
  }

  static isScreenLtLg(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth <= 1279;
  }

  static isScreenLtXl(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth < 1919;
  }

  static isScreenGtXs(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth >= 600;
  }

  static isScreenGtSm(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > UiUtil.SMALL_WIDTH;
  }

  static isScreenGtMd(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth >= 1280;
  }

  static isScreenGtNotEqualMd(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 1280;
  }

  static isScreenGtLg(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth >= 1920;
  }
}
