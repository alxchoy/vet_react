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
    flex: 1,
  },
  petBody: {
    margin: 20,
  },
  petFooter: {
    backgroundColor: colors.gray,
    padding: 20,
    marginTop: 10,
  },
  profileContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  list: {
    marginTop: 15,
  },
  listItem: {
    flex: 1,
    borderRadius: 10,
  },
  titleSectionContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  titleSection: {
    fontSize: 18,
    marginBottom: 10,
  },
  reportBtnContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
});
