import { useMediaQuery } from '@uidotdev/usehooks';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Config } from 'tailwindcss/types/config';

import tailwindConfig from '../tailwind.config'; // Your tailwind config

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens || {
  xs: '480px',
  sm: '640px',
  md: '960px',
  lg: '1024px',
  xl: '1280px',
};

type BreakpointKey = keyof typeof breakpoints;

/**
 *
 * https://stackoverflow.com/questions/59982018/how-do-i-get-tailwinds-active-breakpoint-in-javascript
 */
export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery(`(min-width: ${breakpoints[breakpointKey]})`);
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
}

export function getBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const query = `(min-width: ${breakpoints[breakpointKey]})`;
  return window.matchMedia(query).matches;
}
