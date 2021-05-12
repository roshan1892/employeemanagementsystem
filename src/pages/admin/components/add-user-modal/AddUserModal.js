import { Grid, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../../../components/modal/CustomModal";
import { USER_ROLE_OPTIONS, REQUIRED_FIELD, ENTER_VALID_EMAIL } from "../../../../utils/constants";
import CustomSelect from "../../../../components/custom-select/CustomSelect";

export default function AddUserModal({ showAddUserModal, handleAddUserModalClose, onSubmit, ...props }) {
  const { register, handleSubmit, setValue, errors } = useForm();


  const handleRoleChange = roleOption => {
    setValue("role", roleOption);
  };

  useEffect(() => {
    register({ name: "role" }, { required: true });
  }, [register]);

  return (
    <>
      <CustomModal
        title="नयाँ प्रयोगकर्ता थप्नुहोस्"
        onModalSubmit={handleSubmit(onSubmit)}
        showModal={showAddUserModal}
        onModalClose={handleAddUserModalClose}
      >
        <form>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                label="User Full Name"
                type="text"
                variant="outlined"
                name="fullName"
                inputRef={register({
                  required: true
                })}
              />
              {errors.fullName && <span className="error-message">{REQUIRED_FIELD}</span>}
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                label="User Email"
                type="email"
                variant="outlined"
                name="userEmail"
                inputRef={register({
                  required: true,
                  pattern: /\S+@\S+\.\S+/
                })}
              />
              {errors.userEmail && errors.userEmail.type === "required" && <span className="error-message">{REQUIRED_FIELD}</span>}
              {errors.userEmail && errors.userEmail.type === "pattern" && <span className="error-message">{ENTER_VALID_EMAIL}</span>}
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                name="role"
                label="प्रयोगकर्ताको भूमिका"
                variant="outlined"
                options={USER_ROLE_OPTIONS}
                onChange={handleRoleChange.bind(this)}
                fullWidth
              />
              {errors.role && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
          </Grid>
        </form>
      </CustomModal>
    </>
  );
};