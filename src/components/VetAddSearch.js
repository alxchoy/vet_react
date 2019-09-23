import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import petService from 'services/petService';
import { AppContext } from '../providers/AppContext';

import VetButton from './VetButton';
import VetItemsListSearched from './VetItemsListSearched';

import { colors } from '../assets/styles/baseStyle';

const VetAddSearch = ({
  btnText,
  navigation,
  listSearch,
  valueSearch,
  descriptionSearch,
  petId,
  type,
  onCallbackList,
}) => {
  const [selectedAlimentations, setSelectedAlimentations] = React.useState([]);
  const [selectedVaccines, setSelectedVaccines] = React.useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const { appDispatch } = React.useContext(AppContext);

  const getAlimentationList = React.useCallback(async () => {
    const listAlimentations = await petService.getPetAlimentationList(petId);
    setSelectedAlimentations(listAlimentations);
  }, [petId]);

  const getVaccinesList = React.useCallback(async () => {
    const listVaccines = await petService.getPetVaccineList(petId);
    setSelectedVaccines(listVaccines);
  }, [petId]);

  React.useEffect(() => {
    const fetch = async () => {
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      if (type === 'aliments') {
        await getAlimentationList();
      } else if (type === 'vaccines') {
        await getVaccinesList();
      }
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    };

    fetch();
  }, [appDispatch, getAlimentationList, getVaccinesList, type]);

  const addAlimentationPet = reqService => {
    appDispatch({ type: 'UPDATE_LOADDING', payload: true });
    petService.addPetALimentation(reqService, async () => {
      await getAlimentationList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    });
  };

  const addVaccinePet = reqService => {
    appDispatch({ type: 'UPDATE_LOADDING', payload: true });
    petService.addPetVaccine(reqService, async () => {
      await getVaccinesList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    });
  };

  const addSymptomPet = symptom => {
    const listSymptoms = selectedSymptoms.concat(symptom);
    setSelectedSymptoms(listSymptoms);
    onCallbackList(listSymptoms);
  };

  const deleteAlimentationPet = ({ petAlimentationId }) => {
    appDispatch({ type: 'UPDATE_LOADDING', payload: true });
    petService.deletePetAlimentation(petAlimentationId, async () => {
      await getAlimentationList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    });
  };

  const deleteVaccinePet = ({ petVaccineId }) => {
    appDispatch({ type: 'UPDATE_LOADDING', payload: true });
    petService.deletePetVAccine(petVaccineId, async () => {
      await getVaccinesList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    });
  };

  const deleteSymptomPet = item => {
    const listSymptoms = selectedSymptoms.filter(symptom => symptom.symptomId !== item.symptomId);
    setSelectedSymptoms(listSymptoms);
  };

  const addItem = item => {
    if (type === 'aliments') {
      addAlimentationPet({ alimentationId: item.alimentationId, petId });
    } else if (type === 'vaccines') {
      addVaccinePet({ vaccineId: item.vaccineId, petId });
    } else if (type === 'symptoms') {
      addSymptomPet(item);
    }
  };

  const deleteItem = item => {
    if (type === 'aliments') {
      deleteAlimentationPet(item);
    } else if (type === 'vaccines') {
      deleteVaccinePet(item);
    } else if (type === 'symptoms') {
      deleteSymptomPet(item);
    }
  };

  const listData = () => {
    let list;
    if (type === 'aliments') {
      list = selectedAlimentations;
    } else if (type === 'vaccines') {
      list = selectedVaccines;
    } else if (type === 'symptoms') {
      list = selectedSymptoms;
    }

    return list;
  };

  return (
    <View>
      <VetButton
        color={colors.primary}
        onPress={() => {
          navigation.navigate('Search', {
            data: listSearch,
            value: valueSearch,
            description: descriptionSearch,
            onCallback: item => addItem(item),
          });
        }}
        text={btnText}
        type="blockSecondary"
      />
      <VetItemsListSearched
        data={listData()}
        propertyItem={descriptionSearch}
        valueItem={valueSearch}
        onCallbackDelete={item => deleteItem(item)}
        onCallbackList={() => listData()}
      />
    </View>
  );
};

VetAddSearch.defaultProps = {
  onCallbackList: null,
};

VetAddSearch.propTypes = {
  btnText: PropTypes.string.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  listSearch: PropTypes.arrayOf(Object).isRequired,
  valueSearch: PropTypes.string.isRequired,
  descriptionSearch: PropTypes.string.isRequired,
  petId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  onCallbackList: PropTypes.func,
};

export default VetAddSearch;
