class ColorApiService {
  public TRANSPARENT = 'transparent';

  public WHITE = '#FFFFFF';
  public BLACK = '#000000';
  public PRIMARY = '#313037';
  public PRIMARY2 = '#5B5A62';
  public SECONDARY = '#A8A8A8';
  public GRAY = '#E7E7E7';
  public RED = '#FC857F';
  public LIGHT = '#F7F7F7';
  public BLUE = '#D7E4FD';
  public ORANGE = '#FEE9E2';

  public getHexOpacity(value: number) {
    try {
      if (value > 1) value /= 100;
      let alpha16 = value.toString(16).split('.')[1].substr(0, 2);
      while (alpha16.length < 2) alpha16 += '0';
      return alpha16;
    } catch (error) {
      return 'FF';
    }
  }

  public hexToRGB(hex: string, alpha?: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export const ColorService = new ColorApiService();
