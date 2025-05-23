import { colorPrimary } from '@/config/theme';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type UserSettings = {
  theme: 'light' | 'realDark' | 'auto';
  colorPrimary: string;
  isDarkTheme: boolean;
};

export const userSettingsAtom = atomWithStorage<UserSettings>('userSettings', {
  theme: 'light',
  isDarkTheme: false,
  colorPrimary: colorPrimary
});

export const userSettingsHelperAtom = atom(
  (get) => get(userSettingsAtom),
  (get, set, update: Partial<UserSettings>) => {
    const prev = get(userSettingsAtom);
    const newSettings = {
      ...prev,
      ...(update || {})
    };
    set(userSettingsAtom, {
      ...newSettings,
      colorPrimary: newSettings.colorPrimary || colorPrimary,
      isDarkTheme: newSettings.theme === 'realDark'
    });
  }
);
