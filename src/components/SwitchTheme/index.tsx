import { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { SwitchThemeStyles } from './styles';

import { shade } from 'polished';

type Props = {
  toggleTheme(): void;
}

export function SwitchTheme(props: Props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <SwitchThemeStyles>
      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.primary}
        onColor={colors.secondary}
        offHandleColor={shade(0.4, colors.secondary)}
        onHandleColor={shade(0.4, colors.secondary)}
      />
    </SwitchThemeStyles>
  );
}