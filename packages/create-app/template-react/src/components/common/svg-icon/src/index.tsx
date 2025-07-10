import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement> & {
  name: string;
  prefix?: string;
  color?: string;
};

export function SvgIcon({ name, prefix = 'icon', color = '#333', ...props }: Props) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      {...props}
      aria-hidden="true"
    >
      <use
        href={symbolId}
        fill={color}
      />
    </svg>
  );
}
