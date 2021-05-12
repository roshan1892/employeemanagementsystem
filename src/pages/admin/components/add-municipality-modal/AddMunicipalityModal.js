import { Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import CustomModal from "../../../../components/modal/CustomModal";
import { PALIKA_TYPES, PROVINCE_DISTRICT_PALIKA_LIST, REQUIRED_FIELD } from "../../../../utils/constants/index";
import styles from "./style";

export default function AddMunicipalityModal({ showAddMunicipalityModal, municipalityDefaultValues, handleAddMunicipalityModalClose, handleModalSubmit, ...props }) {
  const classes = styles();
  const [districtOptions, setDistrictOptions] = useState();
  const [municipalityOptions, setMunicipalityOptions] = useState();
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedMunicipality, setSelectedMunicipality] = useState();
  const [selectedPalikaType, setSelectedPalikaType] = useState();
  const [municipalityDefaultData, setMunicipalityDefaultData] = useState({});
  const [customErrors, setCustomErrors] = useState({
    province: false,
    district: false,
    municipalityName: false,
    palikaType: false
  });
  const [customValidationPassed, setCustomValidationPassed] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (selectedProvince && selectedDistrict && selectedMunicipality && selectedPalikaType) {
      setCustomValidationPassed(true);
    }
  }, [selectedProvince, selectedDistrict, selectedMunicipality, selectedPalikaType])


  useEffect(() => {
    if (!showAddMunicipalityModal) {
      handleModalClose();
    }
  }, [showAddMunicipalityModal]);

  useEffect(() => {
    JSON.stringify(municipalityDefaultValues) !== "{}" &&
      setMunicipalityDefaultData(municipalityDefaultValues);
  }, [municipalityDefaultValues])

  const handleProvinceChange = provinceOption => {
    register({ name: "province" });
    setValue("province", provinceOption.value);
    setValue("district", null);
    setValue("municipalityName", null);
    setValue("palikaType", null);
    setSelectedDistrict(null);
    setSelectedMunicipality(null);
    setSelectedPalikaType(null);
    setSelectedProvince(provinceOption.value)
    setDistrictOptions(provinceOption.districts);
    provinceOption.value !== "" &&
      setCustomErrors(prev => ({
        ...prev,
        province: false,
      }));
  }

  const handleDistrictChange = districtOption => {
    register({ name: "district" });
    setValue("district", districtOption.value);
    setValue("municipalityName", null);
    setValue("palikaType", null);
    setSelectedMunicipality(null);
    setSelectedPalikaType(null);
    setSelectedDistrict(districtOption.value);
    setMunicipalityOptions(districtOption.palikas);
    districtOption.value !== "" &&
      setCustomErrors(prev => ({
        ...prev,
        district: false,
      }));
  }

  const handlePalikaChange = palikaOption => {
    register({ name: "municipalityName" });
    setValue("municipalityName", palikaOption.value);
    setValue("palikaType", null);
    setSelectedPalikaType(null);
    setSelectedMunicipality(palikaOption.value);
    palikaOption.value !== "" &&
      setCustomErrors(prev => ({
        ...prev,
        municipalityName: false,
      }));
  }

  const handlePalikaTypeChange = palikaTypeOption => {
    register({ name: "palikaType" });
    setValue("palikaType", palikaTypeOption.value);
    setSelectedPalikaType(palikaTypeOption.value);
    palikaTypeOption.value !== "" &&
      setCustomErrors(prev => ({
        ...prev,
        palikaType: false,
      }));
  };

  const handleModalClose = () => {
    reset();
    setCustomErrors({
      province: false,
      district: false,
      municipalityName: false,
      palikaType: false
    });
    setCustomValidationPassed(false);
    setSelectedProvince(null);
    setSelectedDistrict(null);
    setSelectedMunicipality(null);
    setSelectedPalikaType(null);
    handleAddMunicipalityModalClose();
  }

  const onSubmit = data => {

    data.id = municipalityDefaultData.id;

    (!data.province || data.province === "") &&
      setCustomErrors(prev => ({
        ...prev,
        province: true,
      }));

    (!data.district || data.district === "") &&
      setCustomErrors(prev => ({
        ...prev,
        district: true,
      }));

    (!data.municipalityName || data.municipalityName === "") &&
      setCustomErrors(prev => ({
        ...prev,
        municipalityName: true,
      }));

    (!data.palikaType || data.palikaType === "") &&
      setCustomErrors(prev => ({
        ...prev,
        palikaType: true,
      }));


    customValidationPassed &&
      handleModalSubmit(data);
  };

  return (
    <CustomModal
      title="योजना व्यवस्थापन प्रणालीमा नयाँ पालिका थप्नुहोस।"
      onModalSubmit={handleSubmit(onSubmit)}
      showModal={showAddMunicipalityModal}
      onModalClose={handleModalClose}
    >
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Select
              className="select-md"
              classNamePrefix="react-select"
              name="province"
              placeholder="कृपया, प्रदेशको नाम चयन गर्नुहोस्।"
              options={PROVINCE_DISTRICT_PALIKA_LIST}
              onChange={handleProvinceChange}
            />
            {customErrors.province && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Select
              className="select-md"
              classNamePrefix="react-select"
              name="district"
              placeholder="कृपया जिल्लाको नाम चयन गर्नुहोस्।"
              options={districtOptions}
              onChange={handleDistrictChange}
            />
            {customErrors.district && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Select
              className="select-md"
              classNamePrefix="react-select"
              name="municipalityName"
              placeholder="कृपया, पालिकाको नाम चयन गर्नुहोस्।"
              options={municipalityOptions}
              onChange={handlePalikaChange}
            />
            {customErrors.municipalityName && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid className={classes.palikaTypeSelectContainer} item xs={12} sm={6} md={4}>
            <Select
              className="select-md"
              classNamePrefix="react-select"
              name="palikaType"
              placeholder="कृपया, पालिकाको प्रकार चयन गर्नुहोस्।"
              options={PALIKA_TYPES}
              onChange={handlePalikaTypeChange}
            />
            {customErrors.palikaType && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="गाउँ/नगरपालिकाको ठेगाना"
              type="text"
              margin="normal"
              variant="outlined"
              name="address"
              inputRef={register}
              defaultValue={municipalityDefaultData.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="गाउँ/नगरपालिकाको ई-मेल"
              type="email"
              margin="normal"
              variant="outlined"
              name="email"
              inputRef={register}
              defaultValue={municipalityDefaultData.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="गाउँ/नगरपालिकाको फोन नम्बर"
              type="text"
              margin="normal"
              variant="outlined"
              name="phoneNumber"
              inputRef={register}
              defaultValue={municipalityDefaultData.phoneNumber}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="गाउँ/नगरपालिकाको फ्याक्स नम्बर"
              type="text"
              margin="normal"
              variant="outlined"
              name="faxNumber"
              inputRef={register}
              defaultValue={municipalityDefaultData.faxNumber}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="गाउँ/नगरपालिकाको वेबसाइट"
              type="text"
              margin="normal"
              variant="outlined"
              name="website"
              inputRef={register}
              defaultValue={municipalityDefaultData.website}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </CustomModal>
  );
}
