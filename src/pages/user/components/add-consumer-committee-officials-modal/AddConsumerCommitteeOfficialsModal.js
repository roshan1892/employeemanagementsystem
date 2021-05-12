import { TextField, Grid, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomSelect from "../../../../components/custom-select/CustomSelect";
import CustomModal from "../../../../components/modal/CustomModal";
import { POSITION_OPTIONS, REQUIRED_FIELD, SOMETHING_WENT_WRONG, CONSUMER_COMMITTEE_ID, ID, CONSUMER_COMMITTEE_OFFICIAL_ID } from "../../../../utils/constants/index";
import YOJANA, { API_URL } from "../../../../api/api";
import { AppUtils } from "../../../../utils/appUtils";
import AddAlertMessage from "../../../../components/alert/Alert";
import { SessionStorage } from "../../../../utils/storage/sessionStorage";

export default function AddConsumerCommitteeOfficialsModal({ showAddConsumerCommitteeOfficialsModal, handleAddConsumerCommitteeOfficialsModalClose, openConsumerCommitteeOfficialsUpdate, ...props }) {
  const { register, handleSubmit, errors, setValue } = useForm();
  const consumerCommitteeOfficial = props.consumerCommitteeOfficialData;

  useEffect(() => {
    register({ name: "post" }, { required: true });
  }, [register]);

  const handlePostChange = post => {
    setValue("post", post);
  };

  const onSubmitConsumerCommitteeOfficial = data => {
    var postData = {
      id: SessionStorage.getItem(CONSUMER_COMMITTEE_ID),
      planningId: AppUtils.getUrlParam(ID),
      consumerCommitteeOfficialList: [data]
    };

    if (SessionStorage.getItem(CONSUMER_COMMITTEE_OFFICIAL_ID)) {
      postData.consumerCommitteeOfficialList[0].id = SessionStorage.getItem(CONSUMER_COMMITTEE_OFFICIAL_ID);
    }
    YOJANA.post(API_URL.consumerCommittee, postData)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === "success") {
          handleAddConsumerCommitteeOfficialsModalClose();
          openConsumerCommitteeOfficialsUpdate();
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  return (
    <CustomModal
      title="नयाँ पदाधिकारीको विवरण थप्नुहोस्"
      onModalSubmit={handleSubmit(onSubmitConsumerCommitteeOfficial)}
      showModal={showAddConsumerCommitteeOfficialsModal}
      onModalClose={handleAddConsumerCommitteeOfficialsModalClose}
    >
      <Grid container alignItems="flex-start" spacing={1}>
        <Grid item xs={12} sm={3}>
          <CustomSelect
            label="पद"
            variant="outlined"
            name="post"
            options={POSITION_OPTIONS}
            onChange={handlePostChange.bind(this)}
            value={consumerCommitteeOfficial.post}
            fullWidth
          />
          {errors.post && (
            <span className="error-message">{REQUIRED_FIELD}</span>
          )}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="नामथर"
            type="text"
            variant="outlined"
            name="fullName"
            defaultValue={consumerCommitteeOfficial.fullName}
            inputRef={register({
              required: true
            })}
            fullWidth
          />
          {errors.fullName && (
            <span className="error-message">{REQUIRED_FIELD}</span>
          )}
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="बुवा/पतिको नाम"
            type="text"
            variant="outlined"
            name="fatherOrHusbandName"
            defaultValue={consumerCommitteeOfficial.fatherOrHusbandName}
            inputRef={register}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="बाजेको नाम"
            type="text"
            variant="outlined"
            name="grandFatherName"
            defaultValue={consumerCommitteeOfficial.grandFatherName}
            inputRef={register}
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid container alignItems="flex-start" spacing={1}>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="ठेगाना"
              type="text"
              variant="outlined"
              name="address"
              defaultValue={consumerCommitteeOfficial.address}
              inputRef={register}
            />
            {errors.address && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="सम्पर्क नं."
              type="text"
              variant="outlined"
              name="contactNumber"
              defaultValue={consumerCommitteeOfficial.contactNumber}
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="ना.प्र.नं."
              type="text"
              variant="outlined"
              name="citizenshipNumber"
              defaultValue={consumerCommitteeOfficial.citizenshipNumber}
              inputRef={register({
                required: true
              })}
              fullWidth
            />
            {errors.citizenshipNumber && (
              <span className="error-message">{REQUIRED_FIELD}</span>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="कैफियत"
              type="text"
              variant="outlined"
              name="remarks"
              defaultValue={consumerCommitteeOfficial.remarks}
              inputRef={register}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </CustomModal>
  );
}
