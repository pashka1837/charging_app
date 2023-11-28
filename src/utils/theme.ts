
import {extendTheme} from '@mui/joy/styles';
import type {PaletteRange} from '@mui/joy/styles';

declare module '@mui/joy/styles' {
	type ColorPalettePropOverrides = {
		secondary: true;
	};

	type Palette = {
		secondary: PaletteRange;
	};
}

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				text: {
					primary: '#000112',
				},
				focusVisible: '#FFD700',
				success: {
					solidBg: '#12E385',
				},
				danger: {
					solidBg: '#F2542D',
				},
				warning: {
					solidBg: '#2DA9C4',
				},
				background: {
					body: 'var(--joy-palette-secondary-50)',
					popup: 'var(--joy-palette-secondary-200)',
					surface: '#FFFFFF',
				},
			},
		},
	},
});

export default theme;
