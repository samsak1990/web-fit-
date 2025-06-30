import React from 'react';
import type { BarProps } from 'recharts';
// import styles from './CustomBarShape.module.css';

const BACKGROUND_COLOR = 'rgba(214, 211, 250, 0.25)';
const FOREGROUND_COLOR = '#d6d3fa';
const HIGHLIGHT_COLOR = '#d6ff00';

const CustomBarShape: React.FC<BarProps & { activeIndex: number | null }> = (
  props
) => {
  const { x, y, width, height, background, index, activeIndex, payload } =
    props as any;
  const value = payload?.value ?? 0;
  const bgY =
    background && typeof background === 'object' && 'y' in background
      ? Number(background.y)
      : Number(y);
  const bgHeight =
    background && typeof background === 'object' && 'height' in background
      ? Number(background.height)
      : 0;
  const radius = 8;

  const _x = Number(x ?? 0);
  const _y = Number(y ?? 0);
  const _width = Number(width ?? 0);
  const _height = Number(height ?? 0);

  const bgFill =
    activeIndex === index ? 'rgba(214,255,0,0.15)' : BACKGROUND_COLOR;
  const fgFill = activeIndex === index ? HIGHLIGHT_COLOR : FOREGROUND_COLOR;

  // Path для background (всегда на всю высоту, скругление только сверху)
  const bgTopLeft = _x;
  const bgTopRight = _x + _width;
  const bgBottom = bgY + bgHeight;
  const bgPath = `M${bgTopLeft},${bgBottom}
    L${bgTopLeft},${bgY + radius}
    Q${bgTopLeft},${bgY} ${bgTopLeft + radius},${bgY}
    L${bgTopRight - radius},${bgY}
    Q${bgTopRight},${bgY} ${bgTopRight},${bgY + radius}
    L${bgTopRight},${bgBottom}
    Z`;

  // Если value=0, foreground — прямоугольник у основания
  if (value === 0) {
    const y0 = bgY + bgHeight - 3;
    return (
      <g>
        <path d={bgPath} fill={bgFill} />
        <rect x={_x} y={y0} width={_width} height={3} rx={0} fill={fgFill} />
      </g>
    );
  }

  // Если высота foreground меньше или равна радиусу — рисуем прямоугольник без скругления
  if (_height <= radius) {
    return (
      <g>
        <path d={bgPath} fill={bgFill} />
        <rect
          x={_x}
          y={_y}
          width={_width}
          height={_height}
          rx={0}
          fill={fgFill}
        />
      </g>
    );
  }

  // Path для foreground (только верхние скругления)
  const topLeft = _x;
  const topRight = _x + _width;
  const bottom = _y + _height;
  const path = `M${topLeft},${bottom}
    L${topLeft},${_y + radius}
    Q${topLeft},${_y} ${topLeft + radius},${_y}
    L${topRight - radius},${_y}
    Q${topRight},${_y} ${topRight},${_y + radius}
    L${topRight},${bottom}
    Z`;

  return (
    <g>
      <path d={bgPath} fill={bgFill} />
      <path d={path} fill={fgFill} />
    </g>
  );
};

export default CustomBarShape;
