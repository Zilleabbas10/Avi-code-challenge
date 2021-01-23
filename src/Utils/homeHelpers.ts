import { isEmptyOrNil } from "./helpers";

export const getFilteredPractices = ({selectedPracticesIds, practices}) => {
    return selectedPracticesIds.map((x) => practices.find((y) => y.id === x));
  };

export const getFormattedDataForMap = ({selectedPracticesIds, practices}) => {
    const finalPractices = !isEmptyOrNil(selectedPracticesIds)
      ? getFilteredPractices({selectedPracticesIds, practices})
      : practices;
    return finalPractices.map(
      (practice) => practice.map,
    );
}