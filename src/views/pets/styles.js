import { StyleSheet } from 'react-native';

import { colors } from '../../assets/styles/baseStyle';

export default StyleSheet.create({
  addPetBtn: {
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 8,
  },
  addPetBtnInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPetBtnText: {
    color: colors.primary,
  },
  addPetBtnIcon: {
    marginRight: 8,
  },
  petContainer: {
    padding: 20,
  },
});
