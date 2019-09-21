import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import petService from 'services/petService';
import { AppContext } from '../providers/AppContext';

import VetButton from './VetButton';
import VetItemsList from './VetItemsList';

import { colors } from '../assets/styles/baseStyle';

const VetAddSearch = ({
  btnText,
  navigation,
  listSearch,
  valueSearch,
  descriptionSearch,
  petId,
  type,
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

  const getSymptomsList = React.useCallback(
    symptom => {
      const listSymptoms = selectedSymptoms.concat(symptom);
      setSelectedSymptoms(listSymptoms);
    },
    [selectedSymptoms]
  );

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
  }, [appDispatch, getAlimentationList, getSymptomsList, getVaccinesList, type]);

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
    getSymptomsList(symptom);
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
      addSymptomPet();
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
      <VetItemsList
        data={listData()}
        propertyItem={descriptionSearch}
        valueItem={valueSearch}
        onCallbackDelete={item => deleteItem(item)}
      />
    </View>
  );
};

VetAddSearch.propTypes = {
  btnText: PropTypes.string.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  listSearch: PropTypes.arrayOf(Object).isRequired,
  valueSearch: PropTypes.string.isRequired,
  descriptionSearch: PropTypes.string.isRequired,
  petId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
};

export default VetAddSearch;
