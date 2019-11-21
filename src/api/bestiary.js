import bestiaryData from '../data/bestiary';

export const getAllEntries = () => bestiaryData;
export const getEntryByID = (ID) => bestiaryData.find((beast) => Number(beast.ID) === ID);
export const getEntryBySpecies = (species) => bestiaryData.find((beast) => beast.species === species);
