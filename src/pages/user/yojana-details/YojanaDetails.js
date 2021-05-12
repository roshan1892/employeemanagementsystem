import { Box, Container, Grid, IconButton, Link, List, ListItem, ListItemSecondaryAction, Paper, Tooltip, Typography } from "@material-ui/core";
import { AddCircle as AddCircleIcon, Close as CloseIcon, Create as CreateIcon, Delete as DeleteIcon, Print as PrintIcon, Publish as PublishIcon } from '@material-ui/icons';
import React, { useEffect, useState } from "react";
import YOJANA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import EmptyContainer from "../../../components/empty-container/EmptyContainer";
import Spinner from "../../../components/loader/Loader";
import CustomModal from "../../../components/modal/CustomModal";
import { AppUtils } from "../../../utils/appUtils";
import { AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG, CONSUMER_COMMITTEE_ID, ID, SOMETHING_WENT_WRONG, SUCCESS, CONSUMER_COMMITTEE_OFFICIAL_ID } from "../../../utils/constants/index";
import { SessionStorage } from "../../../utils/storage/sessionStorage";
import AddAayojanaLaagatDetails from "../components/add-aayojana-laagat-details/AddAayojanaLaagatDetails";
import AddConsumerCommitteeDetails from "../components/add-consumer-committee-details/AddConsumerCommitteeDetails";
import AddConsumerCommitteeOfficialsModal from "../components/add-consumer-committee-officials-modal/AddConsumerCommitteeOfficialsModal";
import AddMaintenanceAndTerms from "../components/add-maintenance-and-terms/AddMaintenanceAndTerms";
import AddNewYojana from "../components/add-new-yojana/AddNewYojana";
import AayojanaLaagatDetails from "./helpers/aayojana-laagat-details/AayojanaLaagatDetails";
import ConsumerCommitteeDetails from "./helpers/consumer-committee-details/ConsumerCommitteeDetails";
import InstallmentDetails from "./helpers/installment-details/InstallmentDetails";
import MaintenanceAndTerms from "./helpers/maintenance-and-terms/MaintenanceAndTerms";
import SamjhautaGarnePakshyaAndAayojana from "./helpers/samjhauta-garne-pakshya-and-aayojana/SamjhautaGarnePakshyaAndAayojana";
import styles from "./style";

export default function YojanaDetails() {
  const classes = styles();
  const [aayojanaData, setAayojanaData] = useState(null);
  const [aayojanaLaagatData, setAayojanaLaagatData] = useState({});
  const [consumerCommitteeData, setConsumerCommitteeData] = useState(null);
  const [maintenanceAndTermsData, setMaintenanceAndTermsData] = useState(null);
  const [aayojanaDataLoading, setAayojanaDataLoading] = useState(true);
  const [consumerCommitteeDataLoading, setConsumerCommitteeDataLoading] = useState(true);
  const [aayojanaLaagatDataLoading, setAayojanaLaagatDataLoading] = useState(true);
  const [maintenanceAndTermsLoading, setMaintenanceAndTermsLoading] = useState(true);
  const [editSamjhautaGarnePakshyaAndAayojana, setEditSamjhautaGarnePakshyaAndAayojana] = useState(false);
  const [editAayojanaLaagatDetails, setEditAayojanaLaagatDetails] = useState(false);
  const [editConsumerCommitteeDetails, setEditConsumerCommitteeDetails] = useState(false);
  const [consumerCommitteeOfficialData, setConsumerCommitteeOfficialData] = useState({});
  const [editMaintenanceAndTerms, setEditMaintenanceAndTerms] = useState(false);
  const [openConsumerCommitteeOfficialsModal, setOpenConsumerCommitteeOfficialsModal] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState();
  const [showDeleteDocumentConfirmationModal, setShowDeleteDocumentConfirmationModal] = useState(false);
  const [files, setFiles] = useState([]);

  function handleFileChange(e) {
    setFiles(e.target.files);
  }

  const handleConsumerCommitteeOfficialsModalClose = () => {
    SessionStorage.removeItem(CONSUMER_COMMITTEE_OFFICIAL_ID);
    setConsumerCommitteeOfficialData({});
    setOpenConsumerCommitteeOfficialsModal(false);
  }

  var yojanaId = AppUtils.getUrlParam("id");
  const getAayojanaData = () => {
    YOJANA.get(API_URL.aayojana + "/" + yojanaId).then(response => {
      setAayojanaData(response.data);
    })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  const getAayojanaLaagatData = () => {
    YOJANA.get(API_URL.yojanaLaagatDetail + "/" + yojanaId).then(response => {
      setAayojanaLaagatData(response.data);
    })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  const getConsumerCommitteeData = () => {
    YOJANA.get(API_URL.consumerCommittee + "/" + yojanaId)
      .then(response => {
        setConsumerCommitteeData(response.data)
        SessionStorage.setItem(CONSUMER_COMMITTEE_ID, response.data.id);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  };

  const getMaintenanceAndTerms = () => {
    YOJANA.get(API_URL.aayojanaMaintenance + "/" + yojanaId)
      .then(response => {
        setMaintenanceAndTermsData(response.data)
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  const removeFile = document => {
    setShowDeleteDocumentConfirmationModal(false);
    YOJANA.delete(API_URL.aayojana + "/delete/" + AppUtils.getUrlParam(ID) + "?fileName=" + document.fileName + "&filePath=" + document.filePath)
      .then(response => {
        AddAlertMessage({
          type: response.data.type,
          message: response.data.message
        });
        if (response.data.type === SUCCESS) {
          getAayojanaData();
        }
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      });
  }

  const uploadFiles = postdata => {
    YOJANA.post(API_URL.aayojana + "/uploadFile", postdata)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          AddAlertMessage({
            type: response.data[i].type,
            message: response.data[i].fileName + " " + response.data[i].message
          });
        }
        getAayojanaData();
        setFiles([]);
      })
      .catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        setFiles([]);
      });
  };

  useEffect(() => {
    getAayojanaData();
    getConsumerCommitteeData();
    getAayojanaLaagatData();
    getMaintenanceAndTerms();
  }, []);

  useEffect(() => {
    aayojanaData &&
      setAayojanaDataLoading(false);
  }, [aayojanaData]);

  useEffect(() => {
    consumerCommitteeData &&
      setConsumerCommitteeDataLoading(false);
  }, [consumerCommitteeData]);

  useEffect(() => {
    aayojanaLaagatData &&
      setAayojanaLaagatDataLoading(false);
  }, [aayojanaLaagatData]);

  useEffect(() => {
    maintenanceAndTermsData &&
      setMaintenanceAndTermsLoading(false);
  }, [maintenanceAndTermsData]);

  useEffect(() => {
    if (files.length) {
      var postdata = new FormData();
      postdata.append("aayojanaId", yojanaId)
      for (let i = 0; i < files.length; i++) {
        postdata.append("file", files[i]);
      }
      uploadFiles(postdata);
    }
  }, [files]);

  const handleSamjhautaGarnePakshyaAndAayojanaEdit = () => {
    setEditSamjhautaGarnePakshyaAndAayojana(!editSamjhautaGarnePakshyaAndAayojana)
  }

  const handleSamjhautaGarnePakshyaAndAayojanaEditCancel = () => {
    setEditSamjhautaGarnePakshyaAndAayojana(false);
  }

  const handleAayojanaLaagatDetailsEdit = () => {
    setEditAayojanaLaagatDetails(!editAayojanaLaagatDetails)
  }

  const handleAayojanaLaagatDetailsEditCancel = () => {
    setEditAayojanaLaagatDetails(false);
  }

  const handleConsumerCommitteeDetailsEdit = () => {
    setEditConsumerCommitteeDetails(!editAayojanaLaagatDetails)
  }

  const handleConsumerCommitteeDetailsEditCancel = () => {
    setEditConsumerCommitteeDetails(false);
  }

  const handleMaintenanceAndTermsEdit = () => {
    setEditMaintenanceAndTerms(!editAayojanaLaagatDetails)
  }

  const handleMaintenanceAndTermsEditCancel = () => {
    setEditMaintenanceAndTerms(false);
  }

  const handleAayojanaDataUpdate = (data) => {
    setAayojanaData(data);
    setEditSamjhautaGarnePakshyaAndAayojana(false);
  }

  const handleAayojanaLaagatDetailsUpdate = (data) => {
    setAayojanaLaagatData(data);
    setEditAayojanaLaagatDetails(false);
  }

  const handleConsumerCommitteeDetailsUpdate = () => {
    setEditConsumerCommitteeDetails(false);
    getConsumerCommitteeData();
  }

  const handleMaintenanceAndTermsUpdate = (data) => {
    setMaintenanceAndTermsData(data);
    setEditMaintenanceAndTerms(false);
  }

  const handleDocumentDelete = (document) => {
    setShowDeleteDocumentConfirmationModal(true);
    setDocumentToDelete(document);
  }

  const handleConsumerCommitteeOfficialEdit = (consumerCommitteeOfficialId) => {
    YOJANA.get(API_URL.consumerCommitteeOfficial + "?consumerCommitteeId=" + consumerCommitteeData.id + "&&consumerCommitteeOfficialId=" + consumerCommitteeOfficialId)
      .then(response => {
        if (response.data.id) {
          setOpenConsumerCommitteeOfficialsModal(true);
          setConsumerCommitteeOfficialData(response.data);
          SessionStorage.setItem(CONSUMER_COMMITTEE_OFFICIAL_ID, response.data.id)
        } else {
          AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        }
      }).catch(error => {
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
      })
  }

  const getDocumentsList = (documents) => {
    var documentsList = [];
    for (let i = 0; i < documents.length; i++) {
      documentsList.push(
        <List className={classes.documentRow} key={i}>
          <ListItem className={classes.item}>
            <Link
              href={documents[i].filePath}
              className={classes.documentLink}
            >
              {documents[i].fileName}
            </Link>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => { handleDocumentDelete(documents[i]) }}
                className={classes.deleteDocumentIcon}
                color="secondary"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )
    }
    return (
      <>
        <Box className={classes.documentsList}>
          {documentsList}
        </Box>
      </>
    )
  };

  return (
    <>
      <Container maxWidth="xl" className={classes.root} disableGutters>
        <Box>
          <Paper className={classes.paper}>
            <Box className={classes.paperHeader}>
              <Typography variant="h6">१. सम्झौता गर्ने पक्ष र आयोजना</Typography>
              <Box className={classes.paperActionButtons}>
                {editSamjhautaGarnePakshyaAndAayojana ?
                  (
                    <IconButton aria-label="cancel" onClick={handleSamjhautaGarnePakshyaAndAayojanaEditCancel}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton aria-label="edit" onClick={handleSamjhautaGarnePakshyaAndAayojanaEdit}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton aria-label="print">
                        <PrintIcon />
                      </IconButton>
                    </>
                  )
                }
              </Box>
            </Box>
            {
              aayojanaDataLoading ?
                (
                  <EmptyContainer>
                    <Spinner />
                  </EmptyContainer>
                ) : (
                  editSamjhautaGarnePakshyaAndAayojana ?
                    (
                      <AddNewYojana
                        onAayojanaDataUpdate={(data) => handleAayojanaDataUpdate(data)}
                        aayojanaData={aayojanaData}
                      />
                    ) : (
                      <SamjhautaGarnePakshyaAndAayojana aayojanaData={aayojanaData} />
                    )
                )
            }
          </Paper>
          <Paper className={classes.paper}>
            <Box className={classes.paperHeader}>
              <Typography variant="h6">२. आयोजनाको लागत सम्वन्धि विवरण</Typography>
              <Box className={classes.paperActionButtons}>
                {editAayojanaLaagatDetails ?
                  (
                    <IconButton aria-label="cancel" onClick={handleAayojanaLaagatDetailsEditCancel}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton aria-label="edit" onClick={handleAayojanaLaagatDetailsEdit}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton aria-label="print">
                        <PrintIcon />
                      </IconButton>
                    </>
                  )
                }
              </Box>
            </Box>
            {
              aayojanaLaagatDataLoading ?
                (
                  <EmptyContainer>
                    <Spinner />
                  </EmptyContainer>
                ) : (
                  editAayojanaLaagatDetails ?
                    (
                      <AddAayojanaLaagatDetails
                        onAayojanaLaagatDataUpdate={(data) => handleAayojanaLaagatDetailsUpdate(data)}
                        aayojanaLaagatData={aayojanaLaagatData}
                      />
                    ) : (
                      <AayojanaLaagatDetails aayojanaLaagatData={aayojanaLaagatData} />
                    )
                )
            }
          </Paper>
          <Paper className={classes.paper}>
            <Box className={classes.paperHeader}>
              <Typography variant="h6">३. उपभोक्ता समिति/समुदायमा आधारित संस्था/गैरसरकारी संस्थाको विवरण</Typography>
              <Box className={classes.paperActionButtons}>
                {editConsumerCommitteeDetails ?
                  (
                    <IconButton aria-label="cancel" onClick={handleConsumerCommitteeDetailsEditCancel}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <>
                      <Tooltip title="नयाँ पदाधिकारी थप्नुहोस्।" placement="top" arrow interactive>
                        <IconButton aria-label="add committee official" onClick={() => { setOpenConsumerCommitteeOfficialsModal(true) }}>
                          <AddCircleIcon />
                        </IconButton>
                      </Tooltip>
                      <IconButton aria-label="edit" onClick={handleConsumerCommitteeDetailsEdit}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton aria-label="print">
                        <PrintIcon />
                      </IconButton>
                    </>
                  )
                }
              </Box>
            </Box>
            {
              consumerCommitteeDataLoading ?
                (
                  <EmptyContainer>
                    <Spinner />
                  </EmptyContainer>
                ) : (
                  editConsumerCommitteeDetails ?
                    (
                      <AddConsumerCommitteeDetails
                        onConsumerCommitteeDetailsUpdate={handleConsumerCommitteeDetailsUpdate}
                        consumerCommitteeData={consumerCommitteeData}
                      />
                    ) : (
                      <ConsumerCommitteeDetails
                        onConsumerCommitteeDetailsUpdate={handleConsumerCommitteeDetailsUpdate}
                        consumerCommitteeData={consumerCommitteeData}
                        onEditRow={handleConsumerCommitteeOfficialEdit}
                      />
                    )
                )
            }
          </Paper>
          <Paper className={classes.paper}>
            <InstallmentDetails />
          </Paper>
          <Paper className={classes.paper}>
            <Box className={classes.paperHeader}>
              <Typography variant="h6">६. आयोजना मर्मत संम्भार सम्बन्धी व्यवस्था</Typography>
              <Box className={classes.paperActionButtons}>
                {editMaintenanceAndTerms ?
                  (
                    <IconButton aria-label="cancel" onClick={handleMaintenanceAndTermsEditCancel}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton aria-label="edit" onClick={handleMaintenanceAndTermsEdit}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton aria-label="print">
                        <PrintIcon />
                      </IconButton>
                    </>
                  )
                }
              </Box>
            </Box>
            {
              maintenanceAndTermsLoading ?
                (
                  <EmptyContainer>
                    <Spinner />
                  </EmptyContainer>
                ) : (
                  editMaintenanceAndTerms ?
                    (
                      <AddMaintenanceAndTerms
                        onMaintenanceAndTermsUpdate={(data) => handleMaintenanceAndTermsUpdate(data)}
                        maintenanceAndTermsData={maintenanceAndTermsData}
                      />
                    ) : (
                      <MaintenanceAndTerms maintenanceAndTermsData={maintenanceAndTermsData} />
                    )
                )
            }
          </Paper>
          <Paper className={classes.paper}>
            <Box className={classes.paperHeader}>
              <Typography variant="h6">७. आयोजनासँग सम्बन्धित अन्य कागजातहरु</Typography>
              <Box className={classes.paperActionButtons}>
                <input id="uploadYojanaFiles" className={classes.hiddenInput} type="file" accept=".pdf,.doc,.ppt,.pptx,.txt,.docx,.xlsx,.xls,.jpg,.jpeg,.png,.gif,.bmp,.ico" onChange={(event) => { handleFileChange(event) }} multiple />
                <label htmlFor="uploadYojanaFiles">
                  <Tooltip title="आयोजनासँग सम्बन्धित अन्य कागजातहरु अपलोड गर्नुहोस्।" arrow placement="top">
                    <IconButton aria-label="upload files" component="span">
                      <PublishIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </label>
              </Box>
            </Box>
            <Box p={2}>
              {
                aayojanaData &&
                  aayojanaData.documents ? (
                    aayojanaData.documents.length ? (
                      <Grid item xs={12}>
                        {getDocumentsList(aayojanaData.documents)}
                      </Grid>
                    ) : (
                        <EmptyContainer>
                          <Typography className={classes.documentsNotUploadedMsg}>माफ गर्नुहोस्, तपाईंले आयोजनासँग सम्बन्धित कुनै पनि कागजातहरू अपलोड गर्नुभएको छैन। कृपया आवश्यक कागजातहरू अपलोड गर्नुहोस्।</Typography>
                        </EmptyContainer>
                      )
                  ) : (
                    <EmptyContainer>
                      <Typography className={classes.documentsNotUploadedMsg}>माफ गर्नुहोस्, तपाईंले आयोजनासँग सम्बन्धित कुनै पनि कागजातहरू अपलोड गर्नुभएको छैन। कृपया आवश्यक कागजातहरू अपलोड गर्नुहोस्।</Typography>
                    </EmptyContainer>
                  )
              }
            </Box>
          </Paper>
          <CustomModal
            title="फाइल हटाउनुहोस्।"
            onModalSubmit={() => { removeFile(documentToDelete) }}
            showModal={showDeleteDocumentConfirmationModal}
            onModalClose={() => setShowDeleteDocumentConfirmationModal(false)}
            submitButtonText="हटाउनुहोस्"
          >
            <Typography>के तपाइँ निश्चित हुनुहुन्छ कि तपाइँ चयनित फाइल हटाउन चाहनुहुन्छ?</Typography>
            <Typography color="error" variant="caption" component="em">* {AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG}</Typography>
          </CustomModal>
        </Box>
        <AddConsumerCommitteeOfficialsModal showAddConsumerCommitteeOfficialsModal={openConsumerCommitteeOfficialsModal} handleAddConsumerCommitteeOfficialsModalClose={handleConsumerCommitteeOfficialsModalClose} openConsumerCommitteeOfficialsUpdate={getConsumerCommitteeData} consumerCommitteeOfficialData={consumerCommitteeOfficialData} />
      </Container>
    </>
  );
}
