import { PALIKA_TYPES, PROVINCE_DISTRICT_PALIKA_LIST, YOJANA_DEVELOPMENT_AREA_CATEGORIES } from "../utils/constants/index";

export const AppMisc = {
  getProvinceName(provinceValue) {
    return provinceValue ? PROVINCE_DISTRICT_PALIKA_LIST.find(obj => obj.value === provinceValue).label : "";
  },
  getDistrictName(districtValue) {
    for (let i = 0; i < PROVINCE_DISTRICT_PALIKA_LIST.length; i++) {
      for (let j = 0; j < PROVINCE_DISTRICT_PALIKA_LIST[i].districts.length; j++) {
        if (PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].value === districtValue) {
          return PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].label;
        }
      }
    }
  },
  // TODO: sandeep - refactor the function to minimize loops.
  getMunicipalityName(municipalityValue) {
    for (let i = 0; i < PROVINCE_DISTRICT_PALIKA_LIST.length; i++) {
      for (let j = 0; j < PROVINCE_DISTRICT_PALIKA_LIST[i].districts.length; j++) {
        for (let k = 0; k < PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas.length; k++) {
          if (PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas[k].value === municipalityValue) {
            return PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas[k].label;
          }
        }
      }
    }
  },
  getPalikaTypeName(palikaTypeValue) {
    return palikaTypeValue ? PALIKA_TYPES.find(obj => obj.value === palikaTypeValue).label : "";
  },
  getMunicipalityInfo(municipalityValue) {
    for (let i = 0; i < PROVINCE_DISTRICT_PALIKA_LIST.length; i++) {
      for (let j = 0; j < PROVINCE_DISTRICT_PALIKA_LIST[i].districts.length; j++) {
        for (let k = 0; k < PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas.length; k++) {
          if (PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas[k].value === municipalityValue) {
            return {
              municipalityName: PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].palikas[k].label,
              District: PROVINCE_DISTRICT_PALIKA_LIST[i].districts[j].label,
              Province: PROVINCE_DISTRICT_PALIKA_LIST[i].label,
            }
          }
        }
      }
    }
  },
  getYojanaDevelopmentAreaCategoryName(categoryValue) {
    return categoryValue ? YOJANA_DEVELOPMENT_AREA_CATEGORIES.find(obj => obj.value === categoryValue).label : "";
  }
};
