import { StyleSheet } from 'react-native';

export const colors = {
  primary: 'rgba(90, 168, 158, 1.0)',
  alert: 'rgba(202, 57, 48, 1.0)',
  gray: 'rgba(219, 219, 219, 1.0)',
  white: '#fff',
};

export const fonts = {};

export const helperStyles = StyleSheet.create({
  mh_2: { marginHorizontal: 20 },
  mb_2: { marginBottom: 20 },
  mt_2: { marginTop: 20 },
  mt_1: { marginTop: 10 },
  align_self_end: { alignSelf: 'flex-end' },
  align_self_start: { alignSelf: 'flex-start' },
  auth_btn: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 200,
    paddingHorizontal: 20,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 2,
  },
});
