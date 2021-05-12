export const AUTH_TOKEN = "authToken";
export const REMEMBER_ME = "hmis-remember-me";
export const USER_ROLE = "role";
export const USER_ROLE_ADMIN = "ROLE_ADMIN";
export const USER_ROLE_USER = "ROLE_USER";
export const LEFT_SIDEBAR_WIDTH = 240;
export const APP_BAR_HEIGHT = 64;
export const ID = "id";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const PALIKA_ID = "PALIKA_ID";
export const SUCCESS = "success";
export const CONSUMER_COMMITTEE_ID = "consumerCommitteeId";
export const CONSUMER_COMMITTEE_OFFICIAL_ID = "CONSUMER_COMMITTEE_OFFICIAL_ID";


// Common Messages
export const SERVICE_NA = "Some of our services are currently not available. Please try again later.";
export const SOMETHING_WENT_WRONG = "Oops! Something went wrong. Please try again.";
export const REQUIRED_FIELD = "This is a required field.";
export const ENTER_VALID_EMAIL = "कृपया मान्य ईमेल ठेगाना प्रविष्ट गर्नुहोस्।";
export const NO_RECORDS_FOUND = "माफ गर्नुहोस्, कुनै रेकर्ड फेला परेन।";
export const PASSWORD_DO_NOT_MATCHES = "नयाँ पासवर्ड र कन्फर्म पासवर्ड मेल खाएन।";
export const WARD_STARIYA = "WARD_STARIYA";
export const SESSION_EXPIRED = "तपाईंको सेसन समाप्त भएको छ, कृपया लग-इन गर्नुहोस।";
export const IS_SESSION_EXPIRED = "isSessionExpired";
export const DEFAULT_RECORDS_LIMIT = 25;
export const AFTER_DELETE_YOU_CAN_NOT_UNDONE_MSG = "एक पटक हटाइसकेपछि, यो स्थायी रूपमै प्रणालीबाट हटाइनेछ र तपाईं यस कार्यलाई पूर्ववत गर्न सक्नुहुन्न। ";

export const PROVINCE_DISTRICT_PALIKA_LIST = [
  {
    value: "PROVINCE_1", label: "प्रदेश नं १", districts: [
      {
        value: "taplejung", label: "ताप्लेजुंग", palikas: [
          { value: "TAPLEJUNG_FUNGLING_MUN", label: "फुङलिङ नगरपालिका" },
          { value: "TAPLEJUNG_AATHRAI_TRIBENI_MUN", label: "आठराई त्रिवेणी गाउँपालिका" },
          { value: "TAPLEJUNG_SIDINGWA_MUN", label: "सिदिङ्वा गाउँपालिका" },
          { value: "TAPLEJUNG_FAKTANGLUNG_MUN", label: "फक्ताङलुङ गाउँपालिका" },
          { value: "TAPLEJUNG__MUKWAKHOLA_MUN", label: "मिक्वाखोला गाउँपालिका" },
          { value: "TAPLEJUNG_MERINGDEN_MUN", label: "मेरिङदेन गाउँपालिका" },
          { value: "TAPLEJUNG_MAUWAKHOLA_MUN", label: "मैवाखोला गाउँपालिका" },
          { value: "TAPLEJUNG_PATHIBHARA_YANGWARAK_MUN", label: "पाथीभरा याङवरक गाउँपालिका" },
          { value: "TAPLEJUNG_SIRIJANGHA_MUN", label: "सिरीजङ्घा गाउँपालिका" }
        ]
      },
      {
        value: "pachthar", label: "पाँचथर", palikas: [
          { value: "PACHTHAR_FIDIM_MUN", label: "फिदिम नगरपालिका" },
          { value: "PACHTHAR_FALELUNG_MUN", label: "फालेलुङ गाउँपालिका" },
          { value: "PACHTHAR_FALGUNANDA_MUN", label: "फाल्गुनन्द गाउँपालिका" },
          { value: "PACHTHAR_HILIHANG_MUN", label: "हिलिहाङ गाउँपालिका" },
          { value: "PACHTHAR_KAMMAYAK_MUN", label: "कुम्मायक गाउँपालिका" },
          { value: "PACHTHAR_MIKLAJUNG_MUN", label: "मिक्लाजुङ गाउँपालिका" },
          { value: "PACHTHAR_TUMBEWA_MUN", label: "तुम्बेवा गाउँपालिका" },
          { value: "PACHTHAR_YANGWARAK_MUN", label: "याङवरक गाउँपालिका" }
        ]
      },
      {
        value: "illam", label: "इलाम", palikas: [
          { value: "ILLAM_ILLAM_MUN", label: "ईलाम नगरपालिका" },
          { value: "ILLAM_DEUMAI_MUN", label: "देउमाई नगरपालिका" },
          { value: "ILLAM_MAI_MUN", label: "माई नगरपालिका" },
          { value: "ILLAM_SURYODAYA_MUN", label: "सूर्योदय नगरपालिका" },
          { value: "ILLAM_FAKFOKTHUM_MUN", label: "फाकफोकथुम गाउँपालिका" },
          { value: "ILLAM_CHULACHALI_MUN", label: "चुलाचुली गाउँपालिका" },
          { value: "ILLAM_MAIJOGMAI_MUN", label: "माईजोगमाई गाउँपालिका" },
          { value: "ILLAM_MANGSEBUNG_MUN", label: "माङसेबुङ गाउँपालिका" },
          { value: "ILLAM_RONG_MUN", label: "रोङ गाउँपालिका" },
          { value: "ILLAM_SANDAKPUR_MUN", label: "सन्दकपुर गाउँपालिका" }
        ]
      },
      {
        value: "jhapa", label: "झापा", palikas: [
          { value: "JHAPA_MECHINAGAR_MUN", label: "मेचीनगर नगरपालिका" },
          { value: "JHAPA_DAMAK_MUN", label: "दमक नगरपालिका" },
          { value: "JHAPA_KANKAI_MUN", label: "कन्काई नगरपालिका" },
          { value: "JHAPA_BHADRAPUR_MUN", label: "भद्रपुर नगरपालिका" },
          { value: "JHAPA_ARJUNDHARA_MUN", label: "अर्जुनधारा नगरपालिका" },
          { value: "JHAPA_SHIWASHATAAKSHI_MUN", label: "शिवशताक्षी नगरपालिका" },
          { value: "JHAPA_GAURADAHA_MUN", label: "गौरादह नगरपालिका" },
          { value: "JHAPA_BIRTAMOD_MUN", label: "विर्तामोड नगरपालिका" },
          { value: "JHAPA_KAMAL_MUN", label: "कमल गाउँपालिका" },
          { value: "JHAPA_GAURIGANJA_MUN", label: "गौरीगंज गाउँपालिका" },
          { value: "JHAPA_BAHRADASHI_MUN", label: "बाह्रदशी गाउँपालिका" },
          { value: "JHAPA_JHAPA_MUN", label: "झापा गाउँपालिका" },
          { value: "JHAPA_BUDDHASHANTI_MUN", label: "बुद्धशान्ति गाउँपालिका" },
          { value: "JHAPA_HALDIWARI_MUN", label: "हल्दिवारी गाउँपालिका" },
          { value: "JHAPA_KACHANKAWAL_MUN", label: "कचनकवल गाउँपालिका" }
        ]
      },
      {
        value: "morang", label: "मोरङ", palikas: [
          { value: "MORANG_WIRATANAGAR_MUN", label: "विराटनगर महानगरपालिका" },
          { value: "MORANG_BELWARI_MUN", label: "बेलवारी नगरपालिका" },
          { value: "MORANG_LETANG_MUN", label: "लेटाङ नगरपालिका" },
          { value: "MORANG_PATHARI_SANISHRARE_MUN", label: "पथरी शनिश्चरे नगरपालिका" },
          { value: "MORANG_RANGELI_MUN", label: "रंगेली नगरपालिका" },
          { value: "MORANG_RATUWAMAI_MUN", label: "रतुवामाई नगरपालिका" },
          { value: "MORANG_SUNBARSI_MUN", label: "सुनवर्षि नगरपालिका" },
          { value: "MORANG_URLAWARI_MUN", label: "उर्लावारी नगरपालिका" },
          { value: "MORANG_SUNDARAHARAICHA_MUN", label: "सुन्दरहरैचा नगरपालिका" },
          { value: "MORANG_BUDIGANGA_MUN", label: "बुढीगंगा गाउँपालिका" },
          { value: "MORANG_DHANPAALATHAAN_MUN", label: "धनपालथान गाउँपालिका" },
          { value: "MORANG_GRAMTHAN_MUN", label: "ग्रामथान गाउँपालिका" },
          { value: "MORANG_JAHADA_MUN", label: "जहदा गाउँपालिका" },
          { value: "MORANG_KANEPOKHARI_MUN", label: "कानेपोखरी गाउँपालिका" },
          { value: "MORANG_KATAHARI_MUN", label: "कटहरी गाउँपालिका" },
          { value: "MORANG_KERAWARI_MUN", label: "केरावारी गाउँपालिका" },
          { value: "MORANG_MIKLAJUNG_MUN", label: "मिक्लाजुङ गाउँपालिका" }
        ]
      },
      {
        value: "sunsari", label: "सुनसरी", palikas: [
          { value: "SUNSARI_ITAHARI_MUN", label: "ईटहरी उपमहानगरपालिका" },
          { value: "SUNSARI_DHARAN_MUN", label: "धरान उपमहानगरपालिका" },
          { value: "SUNSARI_INRUWA_MUN", label: "ईनरुवा नगरपालिका" },
          { value: "SUNSARI_DUHAWI_MUN", label: "दुहवी नगरपालिका" },
          { value: "SUNSARI_RAMDHUNI_MUN", label: "रामधुनी नगरपालिका" },
          { value: "SUNSARI_BARAHAKSHETRA", label: "बराहक्षेत्र नगरपालिका" },
          { value: "SUNSARI_DEWANGANJ_MUN", label: "देवानगञ्ज गाउँपालिका" },
          { value: "SUNSARI_KOSHI_MUN", label: "कोशी गाउँपालिका" },
          { value: "SUNSARI_GADHI_MUN", label: "गढी गाउँपालिका" },
          { value: "SUNSARI_BARJU_MUN", label: "बर्जु गाउँपालिका" },
          { value: "SUNSARI_BHOKRAHA_NARSIHA_MUN", label: "भोक्राहा नरसिंह गाउँपालिका" },
          { value: "SUNSARI_HARINAGAR_MUN", label: "हरिनगर गाउँपालिका" }
        ]
      },
      {
        value: "dhankuta", label: "धनकुटा", palikas: [
          { value: "DHANKUTA_PAKHRIBAS_MUN", label: "पाख्रिबास नगरपालिका" },
          { value: "DHANKUTA_DHANKUTA_MUN", label: "धनकुटा नगरपालिका" },
          { value: "DHANKUTA_MAHALAXMI_MUN", label: "महालक्ष्मी नगरपालिका" },
          { value: "DHANKUTA_SAGURIGADHI_MUN", label: "साँगुरीगढी गाउँपालिका" },
          { value: "DHANKUTA_SAHIDBHUMI_MUN", label: "सहिदभूमि गाउँपालिका" },
          { value: "DHANKUTA_CHHATHAR_JORPATI_MUN", label: "छथर जोरपाटी गाउँपालिका" },
          { value: "DHANKUTA_CHAUBISE_MUN", label: "चौविसे गाउँपालिका" }
        ]
      },
      {
        value: "tehrathum", label: "तेर्हथुम", palikas: [
          { value: "TEHRATHUM_MYANGLUNG_MUN", label: "म्याङलुङ नगरपालिका" },
          { value: "TEHRATHUM_LALUGURAS_MUN", label: "लालीगुराँस नगरपालिका" },
          { value: "TEHRATHUM_AATHRAI_MUN", label: "आठराई गाउँपालिका" },
          { value: "TEHRATHUM_CHHATHAR_MUN", label: "छथर गाउँपालिका" },
          { value: "TEHRATHUM_FEDAP_MUN", label: "फेदाप गाउँपालिका" },
          { value: "TEHRATHUM_MENCHHAYAYEM_MUN", label: "मेन्छयायेम गाउँपालिका" }
        ]
      },
      {
        value: "sankhuwasabha", label: "संखुवासभा", palikas: [
          { value: "SANKHUWASABHA_CHAINPUR_MUN", label: "चैनपुर नगरपालिका" },
          { value: "SANKHUWASABHA_DHARMADEWI_MUN", label: "धर्मदेवी नगरपालिका" },
          { value: "SANKHUWASABHA_KHADWARI_MUN", label: "खाँदवारी नगरपालिका" },
          { value: "SANKHUWASABHA_MADI_MUN", label: "मादी नगरपालिका" },
          { value: "SANKHUWASABHA_PACHKHAPAN_MUN", label: "पाँचखपन नगरपालिका" },
          { value: "SANKHUWASABHA_BHOTKHOLA_MUN", label: "भोटखोला गाउँपालिका" },
          { value: "SANKHUWASABHA_CHICHILA_MUN", label: "चिचिला गाउँपालिका" },
          { value: "SANKHUWASABHA_MAKALU_MUN", label: "मकालु गाउँपालिका" },
          { value: "SANKHUWASABHA_SABHAPOKHARI_MUN", label: "सभापोखरी गाउँपालिका" },
          { value: "SANKHUWASABHA_SILICHONG_MUN", label: "सिलीचोङ गाउँपालिका" }
        ]
      },
      {
        value: "bhojpur", label: "भोजपुर", palikas: [
          { value: "BHOJPUR_BHOJPUR_MUN", label: "भोजपुर नगरपालिका" },
          { value: "BHOJPUR_SHADANANDA_MUN", label: "षडानन्द नगरपालिका" },
          { value: "BHOJPUR_TEMKEMAIYUNG_MUN", label: "टेम्केमैयुङ गाउँपालिका" },
          { value: "BHOJPUR_RAMPRASAD_RAI_MUN", label: "रामप्रसाद राई गाउँपालिका" },
          { value: "BHOJPUR_ARUN_MUN", label: "अरुण गाउँपालिका" },
          { value: "BHOJPUR_PAUWAADUNGMA_MUN", label: "पौवादुङमा गाउँपालिका" },
          { value: "BHOJPUR_SALPAASILICHHO_MUN", label: "साल्पासिलिछो गाउँपालिका" },
          { value: "BHOJPUR_AAMCHOK", label: "आमचोक गाउँपालिका" },
          { value: "BHOJPUR_HATUWAGADI", label: "हतुवागढी गाउँपालिका" }
        ]
      },
      {
        value: "solukhumbu", label: "सोलुखुम्बु", palikas: [
          { value: "SOLUKHUMBU_SOLUDUDHKUNDA_MUN", label: "सोलुदुधकुण्ड नगरपालिका" },
          { value: "SOLUKHUMBU_MAPYA_DUDHKOSI_MUN", label: "माप्य दुधकोशी गाउँपालिका" },
          { value: "SOLUKHUMBU_KHUMWU_PASANGLHAMU_MUN", label: "खुम्वु पासाङल्हमु गाउँपालिका" },
          { value: "SOLUKHUMBU_THULUNG_DUDHKOSI_MUN", label: "थुलुङ दुधकोशी गाउँपालिका" },
          { value: "SOLUKHUMBU_NECHASALYAN_MUN", label: "नेचासल्यान गाउँपालिका" },
          { value: "SOLUKHUMBU_MAHAKULUNG_MUN", label: "माहाकुलुङ गाउँपालिका" },
          { value: "SOLUKHUMBU_LIKHU_PIKE_MUN", label: "लिखु पिके गाउँपालिका" },
          { value: "SOLUKHUMBU_SOTANG_MUN", label: "सोताङ गाउँपालिका" }
        ]
      },
      {
        value: "okhaldhunga", label: "ओखलढुङ्गा", palikas: [
          { value: "OKHALDHUNGA_SIDDHICHARAN_MUN", label: "सिद्दिचरण नगरपालिका" },
          { value: "OKHALDHUNGA_KHIJIDEMBA_MUN", label: "खिजिदेम्बा गाउँपालिका" },
          { value: "OKHALDHUNGA_CHAMPADEWI_MUN", label: "चम्पादेवी गाउँपालिका" },
          { value: "OKHALDHUNGA_CHISHANGKHUGADI_MUN", label: "चिशंखुगढी गाउँपालिका" },
          { value: "OKHALDHUNGA_MANEBHANGYANG_MUN", label: "मानेभञ्याङ गाउँपालिका" },
          { value: "OKHALDHUNGA_MOLUNG_MUN", label: "मोलुङ गाउँपालिका" },
          { value: "OKHALDHUNGA_LIKHU_MUN", label: "लिखु गाउँपालिका" },
          { value: "OKHALDHUNGA_SUNKOSHI_MUN", label: "सुनकोशी गाउँपालिका" },
        ]
      },
      {
        value: "khotang", label: "खोटाङ", palikas: [
          { value: "KHOTANG_HALESI_TUWACHUNG_MUN", label: "हलेसी तुवाचुङ नगरपालिका" },
          { value: "KHOTANG_DIKTEL_RUPAKOT_MAJHUWAGADI_MUN", label: "दिक्तेल रुपाकोट मझुवागढी नगरपालिका" },
          { value: "KHOTANG_YESELUKHARK_MUN", label: "ऐसेलुखर्क गाउँपालिका" },
          { value: "KHOTANG_RAWA_BESI_MUN", label: "रावा बेसी गाउँपालिका" },
          { value: "KHOTANG_JANTHEDHUNGA_MUN", label: "जन्तेढुंगा गाउँपालिका" },
          { value: "KHOTANG_KHOTEHANG_MUN", label: "खोटेहाङ गाउँपालिका" },
          { value: "KHOTANG_KEPILASGADI_MUN", label: "केपिलासगढी गाउँपालिका" },
          { value: "KHOTANG_DIPRUNG_CHUICHUMMA_MUN", label: "दिप्रुङ चुइचुम्मा गाउँपालिका" },
          { value: "KHOTANG_SAKELA_MUN", label: "साकेला गाउँपालिका" },
          { value: "KHOTANG_WARAHAPOKHARI_MUN", label: "वराहपोखरी गाउँपालिका	" }
        ]
      },
      {
        value: "udayapur", label: "उदयपुर", palikas: [
          { value: "UDAYAPUR_KATARI_MUN", label: "कटारी नगरपालिका" },
          { value: "UDAYAPUR_CHAUDANDIGADI_MUN", lable: "चौदण्डीगढी नगरपालिका" },
          { value: "UDAYAPUR_TRIYUGA_MUN", lable: "त्रियुगा नगरपालिका" },
          { value: "UDAYAPUR_WELAKA_MUN", lable: "वेलका नगरपालिका" },
          { value: "UDAYAPUR_UDAYAPURGADI_MUN", lable: "उदयपुरगढी गाउँपालिका" },
          { value: "UDAYAPUR_TAPLI_MUN", lable: "ताप्ली गाउँपालिका" },
          { value: "UDAYAPUR_RAUTAMAI_MUN", lable: "रौतामाई गाउँपालिका" },
          { value: "UDAYAPUR_LIMCHUNGBUNG_MUN", lable: "	लिम्चुङ्बुङ गाउँपालिका" }
        ]
      }
    ]
  }, {
    value: "PROVINCE_2", label: "प्रदेश नं २", districts: [
      //8 districts
      {
        value: "saptari", label: "सप्तरी", palikas: [
          { value: "SAPTARI_RAJWIRAJ_MUN", label: "राजविराज नगरपालिका" },
          { value: "SAPTARI_KANCHANRUP_MUN", label: "कञ्चनरुप नगरपालिका" },
          { value: "SAPTARI_DAKNESHOWRI_MUN", label: "डाक्नेश्वरी नगरपालिका" },
          { value: "SAPTARI_BODEBARASAIN_MUN", label: "बोदेबरसाईन नगरपालिका" },
          { value: "SAPTARI_KHADAK_MUN", label: "खडक नगरपालिका" },
          { value: "SAPTARI_SHAMBHUNATH_MUN", label: "शम्भुनाथ नगरपालिका" },
          { value: "SAPTARI_SURUNGA_MUN", label: "सुरुङ्‍गा नगरपालिका" },
          { value: "SAPTARI_HANUMANNAGAR_KANGKALINI_MUN", label: "हनुमाननगर कङ्‌कालिनी नगरपालिका" },
          { value: "SAPTARI_SAPTAKOSI_MUN", label: "सप्तकोशी नगरपालिका" },
          { value: "SAPTARI_AGNISAIR_KRISHNASARAWAN_MUN", label: "अग्निसाइर कृष्णासरवन गाउँपालिका" },
          { value: "SAPTARI_CHHINNAMASTA_MUN", label: "छिन्नमस्ता गाउँपालिका	" },
          { value: "SAPTARI_MAHADEWA_MUN", label: "महादेवा गाउँपालिका	" },
          { value: "SAPTARI_TIRAHUT_MUN", label: "तिरहुत गाउँपालिका" },
          { value: "SAPTARI_TILATHI_KOILADI_MUN", label: "तिलाठी कोईलाडी गाउँपालिका" },
          { value: "SAPTARI_RUPANI_MUN", label: "रुपनी गाउँपालिका" },
          { value: "SAPTARI_RAJGAD_MUN", label: "राजगढ गाउँपालिका" },
          { value: "SAPTARI_BISHNUPUR_MUN", label: "बिष्णुपुर गाउँपालिका" },
          { value: "SAPTARI_BALAN_BIHUL_MUN", label: "बलान-बिहुल गाउँपालिका" }
        ]
      },
      {
        value: "siraha", label: "सिरहा", palikas: [
          { value: "SIRAHA_LAHAN_MUN", label: "लहान नगरपालिका" },
          { value: "SIRAHA_DHANGADIMAI_MUN", label: "धनगढीमाई नगरपालिका" },
          { value: "SIRAHA_SIRAHA_MUN", label: "सिरहा नगरपालिका" },
          { value: "SIRAHA_GOLBAJAR_MUN", label: "गोलबजार नगरपालिका" },
          { value: "SIRAHA_MIRCHAIYA_MUN", label: "मिर्चैयाँ नगरपालिका" },
          { value: "SIRAHA_KALYANPUR_MUN", label: "कल्याणपुर नगरपालिका" },
          { value: "SIRAHA_KARJANHA_MUN", label: "कर्जन्हा नगरपालिका" },
          { value: "SIRAHA_SUKHIPUR_MUN", label: "सुखीपुर नगरपालिका" },
          { value: "SIRAHA_BHAGAWANPUR_MUN", label: "भगवानपुर गाउँपालिका" },
          { value: "SIRAHA_AAURAHI_MUN", label: "औरही गाउँपालिका" },
          { value: "SIRAHA_WISHNUPUR_MUN", label: "विष्णुपुर गाउँपालिका" },
          { value: "SIRAHA_BARIYARPATTI_MUN", label: "बरियारपट्टी गाउँपालिका" },
          { value: "SIRAHA_LAXMIPUR_PATARI_MUN", label: "लक्ष्मीपुर पतारी गाउँपालिका" },
          { value: "SIRAHA_NARAHA_MUN", label: "नरहा गाउँपालिका" },
          { value: "SIRAHA_SANKHUWANANKARAKATTI_MUN", label: "सखुवानान्कारकट्टी गाउँपालिका" },
          { value: "SIRAHA_ARNAMA_MUN", label: "अर्नमा गाउँपालिका" },
          { value: "SIRAHA_NAWARAJPUR_MUN", label: "नवराजपुर गाउँपालिका" }
        ]
      },
      {
        value: "dhanusa", label: "धनुषा", palikas: [
          { value: "DHANUSA_JANAKPURDHAM_MUN", label: "जनकपुरधाम उपमहानगरपालिका" },
          { value: "DHANUSA_KSHIRESHWORNATH_MUN", label: "क्षिरेश्वरनाथ नगरपालिका" },
          { value: "DHANUSA_GANESHMAN_CHARNATH_MUN", label: "गणेशमान चारनाथ नगरपालिका" },
          { value: "DHANUSA_DHANUSHADHAM_MUN", label: "धनुषाधाम नगरपालिका" },
          { value: "DHANUSA_NAGRAIN_MUN", label: "नगराइन नगरपालिका" },
          { value: "DHANUSA_WIDEHA_MUN", label: "विदेह नगरपालिका" },
          { value: "DHANUSA_MITHILA_MUN", label: "मिथिला नगरपालिका" },
          { value: "DHANUSA_SHAHIDNAGAR_MUN", label: "शहीदनगर नगरपालिका" },
          { value: "DHANUSA_SABAILA_MUN", label: "सबैला नगरपालिका" },
          { value: "DHANUSA_KAMALA_MUN", label: "कमला नगरपालिका" },
          { value: "DHANUSA_MITHILA_BIHARI_MUN", label: "मिथिला बिहारी नगरपालिका" },
          { value: "DHANUSA_HANSAPUR_MUN", label: "हंसपुर नगरपालिका" },
          { value: "DHANUSA_JANAKNANDINI_MUN", label: "जनकनन्दिनी गाउँपालिका" },
          { value: "DHANUSA_BATESHOWER_MUN", label: "बटेश्वर गाउँपालिका" },
          { value: "DHANUSA_MUKHIYAPATTI_MUSAHARMIYA_MUN", label: "मुखियापट्टी मुसहरमिया गाउँपालिका" },
          { value: "DHANUSA_LAXMINIYA_MUN", label: "लक्ष्मीनिया गाउँपालिका" },
          { value: "DHANUSA_AAURAHI_MUN", label: "औरही गाउँपालिका" },
          { value: "DHANUSA_DHANAUJI_MUN", label: "धनौजी गाउँपालिका" }
        ]
      },
      {
        value: "mahottari", label: "महोत्तरी", palikas: [
          { value: "MAHOTTARI_JALESHOWER_MUN", label: "जलेश्वर नगरपालिका" },
          { value: "MAHOTTARI_BARDIBAS_MUN", label: "बर्दिबास नगरपालिका" },
          { value: "MAHOTTARI_GAUSALA_MUN", label: "गौशाला नगरपालिका" },
          { value: "MAHOTTARI_LOHALPATTI_MUN", label: "लोहरपट्टी नगरपालिका" },
          { value: "MAHOTTARI_RAMGOPALPUR_MUN", label: "रामगोपालपुर नगरपालिका" },
          { value: "MAHOTTARI_MANARA_SHISAWA_MUN", label: "मनरा शिसवा नगरपालिका" },
          { value: "MAHOTTARI_MATIHANI_MUN", label: "मटिहानी नगरपालिका" },
          { value: "MAHOTTARI_BHANGAHA_MUN", label: "भँगाहा नगरपालिका" },
          { value: "MAHOTTARI_BALAWA_MUN", label: "बलवा नगरपालिका" },
          { value: "MAHOTTARI_AAURAHI_MUN", label: "औरही नगरपालिका" },
          { value: "MAHOTTARI_EKDARA_MUN", label: "एकडारा गाउँपालिका" },
          { value: "MAHOTTARI_SONAMA_MUN", label: "सोनमा गाउँपालिका" },
          { value: "MAHOTTARI_SAMSI_MUN", label: "साम्सी गाउँपालिका" },
          { value: "MAHOTTARI_MAHOTTARI_MUN", label: "महोत्तरी गाउँपालिका" },
          { value: "MAHOTTARI_PIPARA_MUN", label: "पिपरा गाउँपालिका" }
        ]
      },
      {
        value: "sarlahi", label: "सर्लाही", palikas: [
          { value: "SARLAHI_ISHWORPUR_MUN", label: "ईश्वरपुर नगरपालिका" },
          { value: "SARLAHI_MANGALGAWA_MUN", label: "मलंगवा नगरपालिका" },
          { value: "SARLAHI_LALBANDI_MUN", label: "लालबन्दी नगरपालिका" },
          { value: "SARLAHI_HARIPUR_MUN", label: "हरिपुर नगरपालिका" },
          { value: "SARLAHI_HARIPURWA_MUN", label: "हरिपुर्वा नगरपालिका" },
          { value: "SARLAHI_HARIWAN_MUN", label: "हरिवन नगरपालिका" },
          { value: "SARLAHI_BARAHATHAWA_MUN", label: "बरहथवा नगरपालिका" },
          { value: "SARLAHI_BALARA_MUN", label: "बलरा नगरपालिका" },
          { value: "SARLAHI_GODAITA_MUN", label: "गोडैटा नगरपालिका" },
          { value: "SARLAHI_BAGAMATI_MUN", label: "बागमती नगरपालिका" },
          { value: "SARLAHI_KAWILASI_MUN", label: "कविलासी नगरपालिका" },
          { value: "SARLAHI_CHAKRAGHATTA_MUN", label: "चक्रघट्टा गाउँपालिका" },
          { value: "SARLAHI_CHANDRANAGAR_MUN", label: "चन्द्रनगर गाउँपालिका" },
          { value: "SARLAHI_DHANKAUL_MUN", label: "धनकौल गाउँपालिका" },
          { value: "SARLAHI_BRHAPURI_MUN", label: "ब्रह्मपुरी गाउँपालिका" },
          { value: "SARLAHI_RAMNAGAR_MUN", label: "रामनगर गाउँपालिका" },
          { value: "SARLAHI_BISHNU_MUN", label: "विष्णु गाउँपालिका" },
          { value: "SARLAHI_KAUDENA_MUN", label: "कौडेना गाउँपालिका" },
          { value: "SARLAHI_PARSA_MUN", label: "पर्सा गाउँपालिका" },
          { value: "SARLAHI_BASABARIYA_MUN", label: "बसबरीया गाउँपालिका" }
        ]
      },
      {
        value: "rautahat", label: "रौतहट", palikas: [
          { value: "RAUTAHAT_CHANDRAPUR_MUN", label: "चन्द्रपुर नगरपालिका" },
          { value: "RAUTAHAT_GARUDA_MUN", label: "गरुडा नगरपालिका" },
          { value: "RAUTAHAT_GAUR_MUN", label: "गौर नगरपालिका" },
          { value: "RAUTAHAT_BAUDHIMAI_MUN", label: "बौधीमाई नगरपालिका" },
          { value: "RAUTAHAT_BRINDAWAN_MUN", label: "बृन्दावन नगरपालिका" },
          { value: "RAUTAHAT_DEWAHI_GONAHI_MUN", label: "देवाही गोनाही नगरपालिका" },
          { value: "RAUTAHAT_GADIMAI_MUN", label: "गढीमाई नगरपालिका" },
          { value: "RAUTAHAT_GUJARA_MUN", label: "गुजरा नगरपालिका" },
          { value: "RAUTAHAT_KATAHARIYA", label: "कटहरिया नगरपालिका" },
          { value: "RAUTAHAT_MADHAWA_NARAYAN_MUN", label: "माधव नारायण नगरपालिका" },
          { value: "RAUTAHAT_MAULAPUR_MUN", label: "मौलापुर नगरपालिका" },
          { value: "RAUTAHAT_FATUWABIJAYAPUR_MUN", label: "फतुवाबिजयपुर नगरपालिका" },
          { value: "RAUTAHAT_ISHANATH_MUN", label: "ईशनाथ नगरपालिका" },
          { value: "RAUTAHAT_PAROHA_MUN", label: "परोहा नगरपालिका" },
          { value: "RAUTAHAT_RAJPUR_MUN", label: "राजपुर नगरपालिका" },
          { value: "RAUTAHAT_RAJDEWI_MUN", label: "राजदेवी नगरपालिका" },
          { value: "RAUTAHAT_DURGA_BHAGAWATI_MUN", label: "दुर्गा भगवती गाउँपालिका" },
          { value: "RAUTAHAT_YAMUNAMAI_MUN", label: "यमुनामाई गाउँपालिका" }

        ]
      },
      {
        value: "bara", label: "बारा", palikas: [
          { value: "BARA_KALAIYA_MUN", label: "कलैया उपमहानगरपालिका" },
          { value: "BARA_JITPUR_SIMARA_MUN", label: "जीतपुर सिमरा उपमहानगरपालिका" },
          { value: "BARA_KOLHAWI_MUN", label: "कोल्हवी नगरपालिका" },
          { value: "BARA_NIJGOD_MUN", label: "निजगढ नगरपालिका" },
          { value: "BARA_MAHAGADIMAI_MUN", label: "महागढीमाई नगरपालिका" },
          { value: "BARA_SIMRAUNGOD_MUN", label: "सिम्रौनगढ नगरपालिका" },
          { value: "BARA_PACHARAUTA_MUN", label: "पचरौता नगरपालिका" },
          { value: "BARA_AADARSHA_KOTAWAL_MUN", label: "आदर्श कोटवाल गाउँपालिका" },
          { value: "BARA_KARAIYAMAI_MUN", label: "करैयामाई गाउँपालिका" },
          { value: "BARA_DEWATAL_MUN", label: "देवताल गाउँपालिका" },
          { value: "BARA_PARAWANIPUR_MUN", label: "परवानीपुर गाउँपालिका" },
          { value: "BARA_PRASAUNI_MUN", label: "प्रसौनी गाउँपालिका" },
          { value: "BARA_FETA_MUN", label: "फेटा गाउँपालिका" },
          { value: "BARA_BARAGADI_MUN", label: "बारागढी गाउँपालिका" },
          { value: "BARA_SUWARNA_MUN", label: "सुवर्ण गाउँपालिका" },
          { value: "BARA_WISHRAMPUR_MUN", label: "विश्रामपुर गाउँपालिका" }
        ]
      },
      {
        value: "parsa", label: "पर्सा", palikas: [
          { value: "PARSA_BIRJUNG_MUN", label: "बिरगंज महानगरपालिका" },
          { value: "PARSA_POKHARIYA_MUN", label: "पोखरिया नगरपालिका" },
          { value: "PARSA_BAHUDARMAI_MUN", label: "बहुदरमाई नगरपालिका" },
          { value: "PARSA_PARSAGADI_MUN", label: "पर्सागढी नगरपालिका" },
          { value: "PARSA_THORI_MUN", label: "ठोरी गाउँपालिका" },
          { value: "PARSA_JAGARNATHPUR_MUN", label: "जगरनाथपुर गाउँपालिका" },
          { value: "PARSA_DHOBINI_MUN", label: "धोबीनी गाउँपालिका" },
          { value: "PARSA_CHHIPAHARMAI_MUN", label: "छिपहरमाई गाउँपालिका" },
          { value: "PARSA_PAKAHA_MAINAPUR_MUN", label: "पकाहा मैनपुर गाउँपालिका" },
          { value: "PARSA_BINDABASINI_MUN", label: "बिन्दबासिनी गाउँपालिका" },
          { value: "PARSA_SAKHUWA_PRASAUNI_MUN", label: "सखुवा प्रसौनी गाउँपालिका" },
          { value: "PARSA_PATERWA_SUGAULI_MUN", label: "पटेर्वा सुगौली गाउँपालिका" },
          { value: "PARSA_KALIKAMAI_MUN", label: "कालिकामाई गाउँपालिका" },
          { value: "PARSA_JIRA_BHAWANI_MUN", label: "जिरा भवानी गाउँपालिका" }
        ]
      }
    ]
  }, {
    value: "PROVINCE_3", label: "बागमती प्रदेश", districts: [
      {
        value: "sindhuli", label: "सिन्धुली", palikas: [
          { value: "SINDHULI_KAMALAMAI_MUN", label: "कमलामाई नगरपालिका" },
          { value: "SINDHULI_DUDHAULI_MUN", label: "दुधौली नगरपालिका" },
          { value: "SINDHULI_GOLANJAR_MUN", label: "गोलन्जर गाउँपालिका" },
          { value: "SINDHULI_GHYANGLEKH_MUN", label: "घ्याङलेख गाउँपालिका" },
          { value: "SINDHULI_TINPATAN_MUN", label: "तीनपाटन गाउँपालिका" },
          { value: "SINDHULI_FIKKAL_MUN", label: "फिक्कल गाउँपालिका" },
          { value: "SINDHULI_MARIN_MUN", label: "मरिण गाउँपालिका" },
          { value: "SINDHULI_SUNKOSHI_MUN", label: "सुनकोशी गाउँपालिका" },
          { value: "SINDHULI_HARIHARPURGADI_MUN", label: "हरिहरपुरगढी गाउँपालिका" }
        ]
      },
      {
        value: "ramechhap", label: "रामेछाप", palikas: [
          { value: "RAMECHHAP_MANTHALI_MUN", label: "मन्थली नगरपालिका" },
          { value: "RAMECHHAP_RAMECHHAP_MUN", label: "रामेछाप नगरपालिका" },
          { value: "RAMECHHAP_UMAKUNDA_MUN", label: "उमाकुण्ड गाउँपालिका" },
          { value: "RAMECHHAP_KHADADEWI_MUN", label: "खाँडादेवी गाउँपालिका" },
          { value: "RAMECHHAP_GOKULDHUNGA_MUN", label: "गोकुलगङ्गा गाउँपालिका" },
          { value: "RAMECHHAP_DORAMBA_MUN", label: "दोरम्बा गाउँपालिका" },
          { value: "RAMECHHAP_LIKHU_TAMAKOSHI_MUN", label: "लिखु तामाकोशी गाउँपालिका" },
          { value: "RAMECHHAP_SUNAPATI_MUN", label: "सुनापती गाउँपालिका" }
        ]
      },
      {
        value: "dolakha", label: "दोलखा", palikas: [
          { value: "DOLAKHA_JIRI_MUN", label: "जिरी नगरपालिका" },
          { value: "DOLAKHA_BHIMESHOWER_MUN", label: "भिमेश्वर नगरपालिका" },
          { value: "DOLAKHA_KALINCHOK_MUN", label: "कालिन्चोक गाउँपालिका" },
          { value: "DOLAKHA_GAURISHANKAR_MUN", label: "गौरीशङ्कर गाउँपालिका" },
          { value: "DOLAKHA_TAMAKOSHI_MUN", label: "तामाकोशी गाउँपालिका" },
          { value: "DOLAKHA_MELUNG_MUN", label: "मेलुङ्ग गाउँपालिका" },
          { value: "DOLAKHA_WIGU_MUN", label: "विगु गाउँपालिका" },
          { value: "DOLAKHA_WAITESHOWER_MUN", label: "वैतेश्वर गाउँपालिका" },
          { value: "DOLAKHA_SHAILING_MUN", label: "शैलुङ्ग गाउँपालिका" }
        ]
      },
      {
        value: "sindhupalchok", label: "सिन्धुपाल्चोक", palikas: [
          { value: "SINDHUPALCHOK_CHAUTARA_SANGACHOKGADI_MUN", label: "चौतारा साँगाचोकगढी नगरपालिका" },
          { value: "SINDHUPALCHOK_BAHRAWISE_MUN", label: "बाह्रविसे नगरपालिका" },
          { value: "SINDHUPALCHOK_MELAMCHI_MUN", label: "मेलम्ची नगरपालिका" },
          { value: "SINDHUPALCHOK_INDRAWATI_MUN", label: "ईन्द्रावती गाउँपालिका" },
          { value: "SINDHUPALCHOK_JUGAL_MUN", label: "जुगल गाउँपालिका" },
          { value: "SINDHUPALCHOK_PACHPOKHARI_THANGPAL_MUN", label: "पाँचपोखरी थाङपाल गाउँपालिका" },
          { value: "SINDHUPALCHOK_BALEFI_MUN", label: "बलेफी गाउँपालिका" },
          { value: "SINDHUPALCHOK_BHOTEKOSHI_MUN", label: "भोटेकोशी गाउँपालिका" },
          { value: "SINDHUPALCHOK_LISANGKHU_PAKHAR_MUN", label: "लिसङ्खु पाखर गाउँपालिका" },
          { value: "SINDHUPALCHOK_SUNKOSHI_MUN", label: "सुनकोशी गाउँपालिका" },
          { value: "SINDHUPALCHOK_HELAMBU_MUN", label: "हेलम्बु गाउँपालिका" },
          { value: "SINDHUPALCHOK_TRIPURASUNDARI_MUN", label: "त्रिपुरासुन्दरी गाउँपालिका" }
        ]
      },
      {
        value: "kabhre", label: "काभ्रे", palikas: [
          { value: "KABHRE_DHULIKHEL_MUN", label: "धुलिखेल नगरपालिका" },
          { value: "KABHRE_BANEPA_MUN", label: "बनेपा नगरपालिका" },
          { value: "KABHRE_PANAUTI_MUN", label: "पनौती नगरपालिका" },
          { value: "KABHRE_PACHKHAL_MUN", label: "पाँचखाल नगरपालिका" },
          { value: "KABHRE_NAMOBUDDHA_MUN", label: "नमोबुद्ध नगरपालिका" },
          { value: "KABHRE_MANDANDEUPUR_MUN", label: "मण्डनदेउपुर नगरपालिका" },
          { value: "KABHRE_KHANIKHOLA_MUN", label: "खानीखोला गाउँपालिका" },
          { value: "KABHRE_CHURIDEURALI_MUN", label: "चौंरीदेउराली गाउँपालिका" },
          { value: "KABHRE_TEMAL_MUN", label: "तेमाल गाउँपालिका" },
          { value: "KABHRE_BETHANCHOK_MUN", label: "बेथानचोक गाउँपालिका" },
          { value: "KABHRE_BHUMLU_MUN", label: "भुम्लु गाउँपालिका" },
          { value: "KABHRE_MAHABHARAT_MUN", label: "महाभारत गाँउपालिका" },
          { value: "KABHRE_ROSHI_MUN", label: "रोशी गाउँपालिका" }
        ]
      },
      {
        value: "lalitpur", label: "ललितपुर", palikas: [
          { value: "LALITPUR_LALITPUR_MUN", label: "ललितपुर महानगरपालिका" },
          { value: "LALITPUR_GODAWARI_MUN", label: "गोदावरी नगरपालिका" },
          { value: "LALITPUR_MAHALAXMI_MUN", label: "महालक्ष्मी नगरपालिका" },
          { value: "LALITPUR_KONJYOSOM_MUN", label: "कोन्ज्योसोम गाउँपालिका" },
          { value: "LALITPUR_BAGAMATI_MUN", label: "बागमती गाउँपालिका" },
          { value: "LALITPUR_MAHANGKAL_MUN", label: "महाङ्काल गाउँपालिका" }
        ]
      },
      {
        value: "bhaktapur", label: "भक्तपुर", palikas: [
          { value: "BHAKTAPUR_CHAGUNARAYAN_MUN", label: "चाँगुनारायण नगरपालिका" },
          { value: "BHAKTAPUR_BHAKTAPUR_MUN", label: "भक्तपुर नगरपालिका" },
          { value: "BHAKTAPUR_MADHYAPUR_THIMI_MUN", label: "मध्यपुर थिमी नगरपालिका" },
          { value: "BHAKTAPUR_SURYABINAYAK_MUN", label: "सूर्यविनायक नगरपालिका" }
        ]
      },
      {
        value: "kathmandu", label: "काठमाडौं", palikas: [
          { value: "KATHMANDU_KATHMANDU_MUN", label: "काठमाण्डौं महानगरपालिका" },
          { value: "KATHMANDU_KAGESHOWRI_MANOHARA_MUN", label: "कागेश्वरी मनोहरा नगरपालिका" },
          { value: "KATHMANDU_KRITIPUR_MUN", label: "कीर्तिपुर नगरपालिका" },
          { value: "KATHMANDU_GOKARNESHOWER_MUN", label: "गोकर्णेश्वर नगरपालिका" },
          { value: "KATHMANDU_CHANDRAGIRI_MUN", label: "चन्द्रागिरी नगरपालिका" },
          { value: "KATHMANDU_TOKHA_MUN", label: "टोखा नगरपालिका" },
          { value: "KATHMANDU_TAEKESHOWER_MUN", label: "तारकेश्वर नगरपालिका" },
          { value: "KATHMANDU_DAKSHINKALI_MUN", label: "दक्षिणकाली नगरपालिका" },
          { value: "KATHMANDU_NAGARJUNA_MUN", label: "नागार्जुन नगरपालिका" },
          { value: "KATHMANDU_BUDANILAKANTHA_MUN", label: "बुढानिलकण्ठ नगरपालिका" },
          { value: "KATHMANDU_SHANKHARAPUR_MUN", label: "	शङ्खरापुर नगरपालिका" },
        ]
      },
      {
        value: "nuwakot", label: "नुवाकोट", palikas: [
          { value: "NUWAKOT_BIDUR_MUN", label: "विदुर नगरपालिका" },
          { value: "NUWAKOT_BELKOTGADI_MUN", label: "बेलकोटगढी नगरपालिका" },
          { value: "NUWAKOT_KAKANI_MUN", label: "ककनी गाउँपालिका" },
          { value: "NUWAKOT_KISPANG_MUN", label: "किस्पाङ गाउँपालिका" },
          { value: "NUWAKOT_TADI_MUN", label: "तादी गाउँपालिका" },
          { value: "NUWAKOT_TARKESHOWER_MUN", label: "तारकेश्वर गाउँपालिका" },
          { value: "NUWAKOT_DUPCHESHOWR_MUN", label: "दुप्चेश्वर गाउँपालिका" },
          { value: "NUWAKOT_PANCHAKANYA_MUN", label: "पञ्चकन्या गाउँपालिका" },
          { value: "NUWAKOT_LIKHU_MUN", label: "लिखु गाउँपालिका" },
          { value: "NUWAKOT_MYAGANG_MUN", label: "म्यगङ गाउँपालिका" },
          { value: "NUWAKOT_SHIWAPURI_MUN", label: "शिवपुरी गाउँपालिका" },
          { value: "NUWAKOT_SURYAGADI_MUN", label: "सुर्यगढी गाउँपालिका" }
        ]
      },
      {
        value: "rasuwa", label: "रसुवा", palikas: [
          { value: "RASUWA_UTTARGAYA_MUN", label: "उत्तरगया गाउँपालिका" },
          { value: "RASUWA_KALIKA_MUN", label: "कालिका गाउँपालिका" },
          { value: "RASUWA_GOSAIKUNDA_MUN", label: "गोसाईकुण्ड गाउँपालिका" },
          { value: "RASUWA_NAUKUNDA_MUN", label: "नौकुण्ड गाउँपालिका" },
          { value: "RASUWA_AAMACHHODINGMO_MUN", label: "आमाछोदिङमो गाउँपालिका" }
        ]
      },
      {
        value: "dhading", label: "धादिङ", palikas: [
          { label: "DHADING_DHUNBESHI_MUN", value: "धुनीबेंशी नगरपालिका" },
          { label: "DHADING_NILAKANTHA_MUN", value: "निलकण्ठ नगरपालिका" },
          { label: "DHADING_KHANIYABAS", value: "खनियाबास गाउँपालिका" },
          { label: "DHADING_GAJURI_MUN", value: "गजुरी गाउँपालिका" },
          { label: "DHADING_GALCHHI_MUN", value: "गल्छी गाउँपालिका" },
          { label: "DHADING_GANGAJAMUNA_MUN", value: "गङ्गाजमुना गाउँपालिका" },
          { label: "DHADING_JWALAMUKHI_MUN", value: "ज्वालामूखी गाउँपालिका" },
          { label: "DHADING_THAKRE_MUN", value: "थाक्रे गाउँपालिका" },
          { label: "DHADING_NETRAWATI_DABAJONG_MUN", value: "नेत्रावती डबजोङ गाउँपालिका" },
          { label: "DHADING_BENIGHAT_RORANG_MUN", value: "बेनीघाट रोराङ्ग गाउँपालिका" },
          { label: "DHADING_RUWI_VYALI_MUN", value: "रुवी भ्याली गाउँपालिका" },
          { label: "DHADING_SIDDHALEKH_MUN", value: "सिद्धलेक गाउँपालिका	" },
          { label: "DHADING_TRIPURASUNDARI_MUN", value: "त्रिपुरासुन्दरी गाउँपालिका	" }
        ]
      },
      {
        value: "makawanpur", label: "मकवानपुर", palikas: [
          { label: "MAKAWANPUR_HETAUDA_MUN", value: "हेटौडा उपमहानगरपालिका" },
          { label: "MAKAWANPUR_THAHA_MUN", value: "थाहा नगरपालिका" },
          { label: "MAKAWANPUR_INDRASAROBAR_MUN", value: "इन्द्रसरोबर गाउँपालिका" },
          { label: "MAKAWANPUR_KAILASH_MUN", value: "कैलाश गाउँपालिका" },
          { label: "MAKAWANPUR_BAKAIYA_MUN", value: "बकैया गाउँपालिका" },
          { label: "MAKAWANPUR_BAGMATI_MUN", value: "बाग्मति गाउँपालिका" },
          { label: "MAKAWANPUR_BHIMFEDI_MUN", value: "भिमफेदी गाउँपालिका" },
          { label: "MAKAWANPUR_MAKAWANPURGADI_MUN", value: "मकवानपुरगढी गाउँपालिका" },
          { label: "MAKAWANPUR_MANAHARI_MUN", value: "मनहरी गाउँपालिका" },
          { label: "MAKAWANPUR_RAKSIRANG_MUN", value: "राक्सिराङ्ग गाउँपालिका" }
        ]
      },
      {
        value: "chitwan", label: "चितवन", palikas: [
          { value: "CHITWAN_BHARATPUR_MUN", label: "भरतपुर महानगरपालिका" },
          { value: "CHITWAN_KALIKA_MUN", label: "कालिका नगरपालिका" },
          { value: "CHITWAN_KHAIRAHANI_MUN", label: "खैरहनी नगरपालिका" },
          { value: "CHITWAN_MADI_MUN", label: "माडी नगरपालिका" },
          { value: "CHITWAN_RATNANAGAR_MUN", label: "रत्ननगर नगरपालिका" },
          { value: "CHITWAN_RAPTI_MUN", label: "राप्ती नगरपालिका" },
          { value: "CHITWAN_ICHCHHAKAMANA_MUN", label: "इच्छाकामना गाउँपालिका" }
        ]
      }
    ]
  },
  {
    value: "GANDAKI_PROVINCE", label: "गण्डकी प्रदेश", districts: [
      {
        value: "gorakha", label: "गोरखा", palikas: [
          { value: "GORAKHA_GORAKHA_MUN", label: "गोरखा नगरपालिका" },
          { value: "GORAKHA_PALUNGTAR_MUN", label: "पालुङटार नगरपालिका" },
          { value: "GORAKHA_BARPAK_SULIKOT_MUN", label: "बारपाक सुलिकोट गाउँपालिका" },
          { value: "GORAKHA_SIRANCHOK_MUN", label: "सिरानचोक गाउँपालिका" },
          { value: "GORAKHA_AAJIRKOT_MUN", label: "अजिरकोट गाउँपालिका" },
          { value: "GORAKHA_AARUGHAT_MUN", label: "आरूघाट गाउँपालिका" },
          { value: "GORAKHA_GANDAKI_MUN", label: "गण्डकी गाउँपालिका" },
          { value: "GORAKHA_CHUMANUWRI_MUN", label: "चुमनुव्री गाउँपालिका" },
          { value: "GORAKHA_DHARCHE_MUN", label: "धार्चे गाउँपालिका" },
          { value: "GORAKHA_BHIMSENTHAPA_MUN", label: "भिमसेनथापा गाउँपालिका" },
          { value: "GORAKHA_SHAHID_LAKHAN_MUN", label: "शहिद लखन गाउँपालिका" }
        ]
      },
      {
        value: "lamjung", label: "लमजुङ", palikas: [
          { value: "LAMJUNG_BESISHAHAR_MUN", label: "बेसीशहर नगरपालिका" },
          { value: "LAMJUNG_MADDHYANEPAL_MUN", label: "मध्यनेपाल नगरपालिका" },
          { value: "LAMJUNG_RAINAS_MUN", label: "रार्इनास नगरपालिका" },
          { value: "LAMJUNG_SUNDARBAJAR_MUN", label: "सुन्दरबजार नगरपालिका" },
          { value: "LAMJUNG_KWHOLASOTHAR_MUN", label: "क्व्होलासोथार गाउँपालिका" },
          { value: "LAMJUNG_DUDHAPOKHARI_MUN", label: "दूधपोखरी गाउँपालिका" },
          { value: "LAMJUNG_DORDI_MUN", label: "दोर्दी गाउँपालिका" },
          { value: "LAMJUNG_MARSYANGDI_MUN", label: "मर्स्याङदी गाउँपालिका" }
        ]
      },
      {
        value: "tanahu", label: "तनहुँ", palikas: [
          { value: "TANAHU_BHANU_MUN", label: "भानु नगरपालिका" },
          { value: "TANAHU_BHIMAD_MUN", label: "भिमाद नगरपालिका" },
          { value: "TANAHU_BYAS_MUN", label: "व्यास नगरपालिका" },
          { value: "TANAHU_SHUKLAGANDAKI_MUN", label: "शुक्लागण्डकी नगरपालिका" },
          { value: "TANAHU_AABUKHAIRAHANI_MUN", label: "आँबुखैरेनी गाउँपालिका" },
          { value: "TANAHU_RISING_MUN", label: "ऋषिङ्ग गाउँपालिका" },
          { value: "TANAHU_GHIRING_MUN", label: "घिरिङ गाउँपालिका" },
          { value: "TANAHU_DEWAGHAT_MUN", label: "देवघाट गाउँपालिका" },
          { value: "TANAHU_MYAGDE_MUN", label: "म्याग्दे गाउँपालिका" },
          { value: "TANAHU_WANDIPUR_MUN", label: "वन्दिपुर गाउँपालिका" }
        ]
      },
      {
        value: "syangja", label: "स्याङ्जा", palikas: [
          { value: "SYANGJA_GALYANG_MUN", label: "गल्याङ नगरपालिका" },
          { value: "SYANGJA_CHAPAKOT_MUN", label: "चापाकोट नगरपालिका" },
          { value: "SYANGJA_PUTALIBAJAR_MUN", label: "पुतलीबजार नगरपालिका" },
          { value: "SYANGJA_BHIRKOT_MUN", label: "भीरकोट नगरपालिका" },
          { value: "SYANGJA_WALING_MUN", label: "वालिङ नगरपालिका" },
          { value: "SYANGJA_ARJUNCHAUPARI_MUN", label: "अर्जुनचौपारी गाउँपालिका" },
          { value: "SYANGJA_AADHIKHOLA_MUN", label: "आँधिखोला गाउँपालिका" },
          { value: "SYANGJA_KALIGANDAKI_MUN", label: "कालीगण्डकी गाउँपालिका" },
          { value: "SYANGJA_FEDIKHOLA_MUN", label: "फेदीखोला गाउँपालिका" },
          { value: "SYANGJA_BIRUWA_MUN", label: "बिरुवा गाउँपालिका" },
          { value: "SYANGJA_HARINAS_MUN", label: "हरिनास गाउँपालिका" }
        ]
      },
      {
        value: "kaski", label: "कास्की", palikas: [
          { value: "KASKI_POKHARA_MUN", label: "पोखरा महानगरपालिका" },
          { value: "KASKI_ANNAPURNA_MUN", label: "अन्नपूर्ण गाउँपालिका" },
          { value: "KASKI_MACHHAPUCHCHHRE_MUN", label: "माछापुच्छ्रे गाउँपालिका" },
          { value: "KASKI_MADI_MUN", label: "मादी गाउँपालिका" },
          { value: "KASKI_RUPA_MUN", label: "रूपा गाउँपालिका" }
        ]
      },
      {
        value: "manang", label: "मनाङ", palikas: [
          { value: "MANANG_CHAME_MUN", label: "चामे गाउँपालिका" },
          { value: "MANANG_NARPA_BHUMI_MUN", label: "नार्पा भूमि गाउँपालिका" },
          { value: "MANANG_NASO_MUN", label: "नासोँ गाउँपालिका" },
          { value: "MANANG_MANANG_NGISYANG_MUN", label: "मनाङ ङिस्याङ गाउँपालिका" }
        ]
      },
      {
        value: "mustang", label: "मुस्ताङ", palikas: [
          { value: "MUSTANG_GHARPAJHONG_MUN", label: "घरपझोङ गाउँपालिका" },
          { value: "MUSTANG_THASANG_MUN", label: "थासाङ गाउँपालिका" },
          { value: "MUSTANG_LOGHEKAR_DAMODARKUNDA_MUN", label: "लो-घेकर दामोदरकुण्ड गाउँपालिका" },
          { value: "MUSTANG_LOMANTHANG_MUN", label: "लोमन्थाङ गाउँपालिका" },
          { value: "MUSTANG_WARAGUNG_MUN", label: "वारागुङ मुक्तिक्षेत्र गाउँपालिका" }
        ]
      },
      {
        value: "myagdi", label: "म्याग्दी", palikas: [
          { value: "MYAGDI_BENI_MUN", label: "बेनी नगरपालिका" },
          { value: "MYAGDI_ANNAPURNA_MUN", label: "अन्नपुर्ण गाउँपालिका" },
          { value: "MYAGDI_DHAWALAGIRI_MUN", label: "धवलागिरी गाउँपालिका" },
          { value: "MYAGDI_MANGALA_MUN", label: "मंगला गाउँपालिका" },
          { value: "MYAGDI_MALIKA_MUN", label: "मालिका गाउँपालिका" },
          { value: "MYAGDI_RAGHUGANGA_MUN", label: "रघुगंगा गाउँपालिका" }
        ]
      },
      {
        value: "parbat", label: "पर्वत", palikas: [
          { value: "PARBAT_KUSHMA_MUN", label: "कुश्मा नगरपालिका" },
          { value: "PARBAT_FALEWAS_MUN", label: "फलेवास नगरपालिका" },
          { value: "PARBAT_JALJALA_MUN", label: "जलजला गाउँपालिका" },
          { value: "PARBAT_PAIYU_MUN", label: "पैयूं गाउँपालिका" },
          { value: "PARBAT_MAHASHILA_MUN", label: "महाशिला गाउँपालिका" },
          { value: "PARBAT_MODI_MUN", label: "मोदी गाउँपालिका" },
          { value: "PARBAT_WIHADI_MUN", label: "विहादी गाउँपालिका" }
        ]
      },
      {
        value: "baglung", label: "बागलुङ", palikas: [
          { value: "BAGLUNG_BAGLUNG_MUN", label: "बागलुङ नगरपालिका" },
          { value: "BAGLUNG_GALKOT_MUN", label: "गल्कोट नगरपालिका" },
          { value: "BAGLUNG_JAIMUNI_MUN", label: "जैमूनी नगरपालिका" },
          { value: "BAGLUNG_DHORPATAN_MUN", label: "ढोरपाटन नगरपालिका" },
          { value: "BAGLUNG_WARENG_MUN", label: "वरेङ गाउँपालिका" },
          { value: "BAGLUNG_KATHEKHOLA_MUN", label: "काठेखोला गाउँपालिका" },
          { value: "BAGLUNG_TAMANKHOLA_MUN", label: "तमानखोला गाउँपालिका" },
          { value: "BAGLUNG_TARAKHOLA_MUN", label: "ताराखोला गाउँपालिका" },
          { value: "BAGLUNG_NISIKHOLA_MUN", label: "निसीखोला गाउँपालिका" },
          { value: "BAGLUNG_WADIGAD_MUN", label: "वडिगाड गाउँपालिका" }

        ]
      },
      {
        value: "nawalparasiSustaPurwa", label: "नवलपरासी (बर्दघाट सुस्ता पूर्व)", palikas: [
          { value: "NAWALPARASI_SUSTA_PURWA_KAWASOTI_MUN", label: "कावासोती नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_GAIDAKOT_MUN", label: "गैडाकोट नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_DEWACHULI_MUN", label: "देवचुली नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_MADHYAWINDU_MUN", label: "मध्यविन्दु नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_BAUDIKALI_MUN", label: "बौदीकाली गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWABULINGTAR_MUN", label: "बुलिङटार गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_WINAYI_MUN", label: "विनयी त्रिवेणी गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PURWA_HUPSEKOT_MUN", label: "हुप्सेकोट गाउँपालिका" }
        ]
      }
    ]
  },
  {
    value: "PROVINCE_5", label: "प्रदेश नं ५", districts: [
      {
        value: "gulmi", label: "गुल्मी", palikas: [
          { value: "GULMI_MUSIKOT_MUN", label: "मुसिकोट नगरपालिका" },
          { value: "GULMI_RESUNGA_MUN", label: "रेसुङ्गा नगरपालिका" },
          { value: "GULMI_ISMA_MUN", label: "	ईस्मा गाउँपालिका" },
          { value: "GULMI_KALIGANDAKI_MUN", label: "कालीगण्डकी गाउँपालिका	" },
          { value: "GULMI_GULMI_DARBAR_MUN", label: "गुल्मी दरबार गाउँपालिका" },
          { value: "GULMI_SATYAWATI_MUN", label: "सत्यवती गाउँपालिका" },
          { value: "GULMI_CHANDRAKOT_MUN", label: "चन्द्रकोट गाउँपालिका" },
          { value: "GULMI_RURUCHHETRA_MUN", label: "रुरुक्षेत्र गाउँपालिका" },
          { value: "GULMI_CHHATRAKOT_MUN", label: "छत्रकोट गाउँपालिका" },
          { value: "GULMI_DHURKOT_MUN", label: "धुर्कोट गाउँपालिका" },
          { value: "GULMI_MADANE_MUN", label: "मदाने गाउँपालिका" },
          { value: "GULMI_MALIKA_MUN", label: "मालिका गाउँपालिका" }
        ]
      },
      {
        value: "palpa", label: "पाल्पा", palikas: [
          { value: "PALPA_RAMPUR_MUN", label: "रामपुर नगरपालिका" },
          { value: "PALPA_TANSEN_MUN", label: "तानसेन नगरपालिका" },
          { value: "PALPA_NISDI_MUN", label: "निस्दी गाउँपालिका" },
          { value: "PALPA_PURWAKHOLA_MUN", label: "पूर्वखोला गाउँपालिका" },
          { value: "PALPA_RAMBHA_MUN", label: "रम्भा गाउँपालिका" },
          { value: "PALPA_MATHAGADI_MUN", label: "माथागढी गाउँपालिका" },
          { value: "PALPA_TINAU_MUN", label: "तिनाउ गाउँपालिका" },
          { value: "PALPA_BAGANASKALI_MUN", label: "बगनासकाली गाउँपालिका" },
          { value: "PALPA_RIBDIKOT_MUN", label: "रिब्दिकोट गाउँपालिका" },
          { value: "PALPA_RAINADEWI_CHHAHARA_MUN", label: "रैनादेवी छहरा गाउँपालिका" }
        ]
      },
      {
        value: "rupandehi", label: "रुपन्देही", palikas: [
          { value: "RUPANDEHI_BUTWAL_MUN", label: "बुटवल उपमहानगरपालिका" },
          { value: "RUPANDEHI_DEWADAHA_MUN", label: "देवदह नगरपालिका" },
          { value: "RUPANDEHI_LUMBINI_SANSKRITIK_MUN", label: "लुम्बिनी सांस्कृतिक नगरपालिका" },
          { value: "RUPANDEHI_SAINAMAINA_MUN", label: "सैनामैना नगरपालिका" },
          { value: "RUPANDEHI_SIDDARTHANAGAR_MUN", label: "सिद्धार्थनगर नगरपालिका" },
          { value: "RUPANDEHI_TILOTTAMA_MUN", label: "तिलोत्तमा नगरपालिका" },
          { value: "RUPANDEHI_GAIDAHAWA_MUN", label: "गैडहवा गाउँपालिका" },
          { value: "RUPANDEHI_KANCHAN_MUN", label: "कन्चन गाउँपालिका" },
          { value: "RUPANDEHI_KOTAHIMAI_MUN", label: "कोटहीमाई गाउँपालिका" },
          { value: "RUPANDEHI_MARCHAWARI_MUN", label: "मर्चवारी गाउँपालिका" },
          { value: "RUPANDEHI_MAYADEWI_MUN", label: "मायादेवी गाउँपालिका" },
          { value: "RUPANDEHI_OMASATIYA_MUN", label: "ओमसतिया गाउँपालिका" },
          { value: "RUPANDEHI_ROHINI_MUN", label: "रोहिणी गाउँपालिका" },
          { value: "RUPANDEHI_SAMMARIMAI_MUN", label: "सम्मरीमाई गाउँपालिका" },
          { value: "RUPANDEHI_SIYARI_MUN", label: "सियारी गाउँपालिका" },
          { value: "RUPANDEHI_SHUDDHODHAN_MUN", label: "शुद्धोधन गाउँपालिका" }
        ]
      },
      {
        value: "kapilwasthu", label: "कपिलवस्तु", palikas: [
          { value: "KAPILWASTHU_KAPILWASTHU_MUN", label: "कपिलवस्तु नगरपालिका" },
          { value: "KAPILWASTHU_BUDDHABHUMI_MUN", label: "बुद्धभुमी नगरपालिका" },
          { value: "KAPILWASTHU_SHIWARAJ_MUN", label: "शिवराज नगरपालिका" },
          { value: "KAPILWASTHU_MAHARAJGANG_MUN", label: "महाराजगंज नगरपालिका" },
          { value: "KAPILWASTHU_KRISHNANAGAR_MUN", label: "कृष्णनगर नगरपालिका" },
          { value: "KAPILWASTHU_BANAGANGA_MUN", label: "बाणगंगा नगरपालिका" },
          { value: "KAPILWASTHU_MAYADEWI_MUN", label: "मायादेवी गाउँपालिका" },
          { value: "KAPILWASTHU_YASODHARA_MUN", label: "यसोधरा गाउँपालिका" },
          { value: "KAPILWASTHU_SUDDHODHAN", label: "सुद्धोधन गाउँपालिका" },
          { value: "KAPILWASTHU_BIJAYANAGAR_MUN", label: "विजयनगर गाउँपालिका" }
        ]
      },
      {
        value: "arghakhachi", label: "अर्घाखाँची", palikas: [
          { value: "ARGHAKHACHI_SANDHIKHARKA_MUN", label: "सन्धिखर्क नगरपालिका" },
          { value: "ARGHAKHACHI_SHITAGANGA_MUN", label: "शितगंगा नगरपालिका" },
          { value: "ARGHAKHACHI_BHUMIKASTHAN_MUN", label: "भूमिकास्थान नगरपालिका" },
          { value: "ARGHAKHACHI_CHHATRADEWA_MUN", label: "छत्रदेव गाउँपालिका" },
          { value: "ARGHAKHACHI_PANINI_MUN", label: "पाणिनी गाउँपालिका" },
          { value: "ARGHAKHACHI_MALARANI_MUN", label: "मालारानी गाउँपालिका" }
        ]
      },
      {
        value: "pyuthan", label: "प्युठान", palikas: [
          { value: "PYUTHAN_PYUTHAN_MUN", label: "प्यूठान नगरपालिका" },
          { value: "PYUTHAN_SWARGADWARI_MUN", label: "स्वर्गद्वारी नगरपालिका" },
          { value: "PYUTHAN_GAUMUKHI_MUN", label: "गौमुखी गाउँपालिका" },
          { value: "PYUTHAN_MANDAWI_MUN", label: "माण्डवी गाउँपालिका" },
          { value: "PYUTHAN_SARUMARANI_MUN", label: "सरुमारानी गाउँपालिका" },
          { value: "PYUTHAN_MALLARANI_MUN", label: "मल्लरानी गाउँपालिका" },
          { value: "PYUTHAN_NAUWAHINI_MUN", label: "नौवहिनी गाउँपालिका" },
          { value: "PYUTHAN_JHIMRUK_MUN", label: "झिमरुक गाउँपालिका" },
          { value: "PYUTHAN_YERAWATI_MUN", label: "ऐरावती गाउँपालिका" }
        ]
      },
      {
        value: "rolpa", label: "रोल्पा", palikas: [
          { value: "ROLPA_ROLPA_MUN", label: "रोल्पा नगरपालिका" },
          { value: "ROLPA_TRIWENI_MUN", label: "त्रिवेणी गाउँपालिका" },
          { value: "ROLPA_PARIWARTAN_MUN", label: "परिवर्तन गाउँपालिका" },
          { value: "ROLPA_MADI_MUN", label: "माडी गाउँपालिका" },
          { value: "ROLPA_RUNTIGADI_MUN", label: "रुन्टीगढी गाउँपालिका" },
          { value: "ROLPA_LUNGRI_MUN", label: "लुङग्री गाउँपालिका" },
          { value: "ROLPA_GANGADEWA_MUN", label: "गंगादेव गाउँपालिका" },
          { value: "ROLPA_SUNCHHAHARI_MUN", label: "सुनछहरी गाउँपालिका" },
          { value: "ROLPA_SUNIL_SMRITI_MUN", label: "सुनिल स्मृति गाउँपालिका" },
          { value: "ROLPA_THAWANG_MUN", label: "थवाङ गाउँपालिका" }
        ]
      },
      {
        value: "dang", label: "दाङ", palikas: [
          { value: "DANG_TULSIPUR_MUN", label: "तुल्सीपुर उपमहानगरपालिका" },
          { value: "DANG_GHORAHI_MUN", label: "घोराही उपमहानगरपालिका" },
          { value: "DANG_LAMAHI_MUN", label: "लमही नगरपालिका" },
          { value: "DANG_BANGALACHULI_MUN", label: "बंगलाचुली गाउँपालिका" },
          { value: "DANG_DANGISHARAN_MUN", label: "दंगीशरण गाउँपालिका" },
          { value: "DANG_GADAWA_MUN", label: "गढवा गाउँपालिका" },
          { value: "DANG_RAJPUR_MUN", label: "राजपुर गाउँपालिका" },
          { value: "DANG_RAPTI_MUN", label: "राप्ती गाउँपालिका" },
          { value: "DANG_SHANTINAGAR_MUN", label: "शान्तिनगर गाउँपालिका" },
          { value: "DANG_BABAI_MUN", label: "बबई गाउँपालिका" }
        ]
      },
      {
        value: "bake", label: "बाँके", palikas: [
          { value: "BAKE_NEPALGANJ_MUN", label: "नेपालगंज उपमहानगरपालिका" },
          { value: "BAKE_KOHALAPUR_MUN", label: "कोहलपुर नगरपालिका" },
          { value: "BAKE_NARAINAPUR_MUN", label: "नरैनापुर गाउँपालिका" },
          { value: "BAKE_RAPTI_SONARI_MUN", label: "राप्ती सोनारी गाउँपालिका" },
          { value: "BAKE_BAIJANATH_MUN", label: "बैजनाथ गाउँपालिका" },
          { value: "BAKE_KHAJURA_MUN", label: "खजुरा गाउँपालिका" },
          { value: "BAKE_DADUWA_MUN", label: "डुडुवा गाउँपालिका" },
          { value: "BAKE_JANAKI_MUN", label: "जानकी गाउँपालिका" }
        ]
      },
      {
        value: "bardiya", label: "बर्दिया", palikas: [
          { value: "BARDIYA_GULARIYA_MUN", label: "गुलरिया नगरपालिका" },
          { value: "BARDIYA_MADHUWAN_MUN", label: "मधुवन नगरपालिका" },
          { value: "BARDIYA_RAJAPUR_MUN", label: "राजापुर नगरपालिका" },
          { value: "BARDIYA_THAKURBABA_MUN", label: "ठाकुरबाबा नगरपालिका" },
          { value: "BARDIYA_BASAGADI_MUN", label: "बाँसगढी नगरपालिका" },
          { value: "BARDIYA_BARBARDIYA_MUN", label: "बारबर्दिया नगरपालिका" },
          { value: "BARDIYA_BADAIYATAL_MUN", label: "बढैयाताल गाउँपालिका" },
          { value: "BARDIYA_GERUWA_MUN", label: "गेरुवा गाउँपालिका" }
        ]
      },
      {
        value: "nawalparasiSustaPaschchim", label: "नवलपरासी (बर्दघाट सुस्ता पश्चिम)", palikas: [
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_BARDAGHAT_MUN", label: "बर्दघाट नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_RAMGRAM_MUN", label: "रामग्राम नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_SUNAWAL_MUN", label: "सुनवल नगरपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_SUSTA_MUN", label: "सुस्ता गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_PALHINANDAN_MUN", label: "पाल्हीनन्दन गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_PRATAPPUR_MUN", label: "प्रतापपुर गाउँपालिका" },
          { value: "NAWALPARASI_SUSTA_PASCHCHIM_SARAWAL_MUN", label: "सरावल गाउँपालिका" }
        ]
      },
      {
        value: "rukumPurwa", label: "रुकुम (पूर्वी भाग)", palikas: [
          { value: "RUKUM_PURWA_PUTHA_UTTARGANGA_MUN", label: "पुथा उत्तरगंगा गाउँपालिका" },
          { value: "RUKUM_PURWA_BHUME_MUN", label: "भूमे गाउँपालिका" },
          { value: "RUKUM_PURWA_SISNE_MUN", label: "सिस्ने गाउँपालिका" }
        ]
      }
    ]
  },
  {
    value: "KARNALI_PROVINCE", label: "कर्णाली प्रदेश", districts: [
      {
        value: "salyan", label: "सल्यान", palikas: [
          { value: "SALYAN_SHARADA_MUN", label: "शारदा नगरपालिका" },
          { value: "SALYAN_BAGCHAUR_MUN", label: "बागचौर नगरपालिका" },
          { value: "SALYAN_BANGAD_MUN", label: "बनगाड कुपिण्डे नगरपालिका" },
          { value: "SALYAN_KALIMATI_MUN", label: "कालिमाटी गाउँपालिका" },
          { value: "SALYAN_TRIBENI_MUN", label: "त्रिवेणी गाउँपालिका" },
          { value: "SALYAN_KAPURKOT_MUN", label: "कपुरकोट गाउँपालिका" },
          { value: "SALYAN_CHHATRESHOWRI_MUN", label: "छत्रेश्वरी गाउँपालिका" },
          { value: "SALYAN_SIDDHA_KUMAKH_MUN", label: "सिद्ध कुमाख गाउँपालिका" },

        ]
      },
      {
        value: "surkhet", label: "सुर्खेत", palikas: [
          { value: "SURKHET_BIRENDRANAGAR_MUN", label: "बीरेन्द्रनगर नगरपालिका" },
          { value: "SURKHET_BHERIGANGA_MUN", label: "भेरीगंगा नगरपालिका" },
          { value: "SURKHET_GURBHAKOT_MUN", label: "गुर्भाकोट नगरपालिका" },
          { value: "SURKHET_PANCHAPURI_MUN", label: "पञ्चपुरी नगरपालिका" },
          { value: "SURKHET_LEKWESHI_MUN", label: "लेकवेशी नगरपालिका" },
          { value: "SURKHET_CHAUKUNE_MUN", label: "चौकुने गाउँपालिका" },
          { value: "SURKHET_BARAHATAL_MUN", label: "बराहताल गाउँपालिका" },
          { value: "SURKHET_CHINGAD_MUN", label: "चिङ्गाड गाउँपालिका" },
          { value: "SURKHET_SIMTA_MUN", label: "सिम्ता गाउँपालिका" }
        ]
      },
      {
        value: "dailekh", label: "दैलेख", palikas: [
          { value: "DAILEKH_NARAYAN_MUN", label: "नारायण नगरपालिका" },
          { value: "DAILEKH_DULLU_MUN", label: "दुल्लु नगरपालिका" },
          { value: "DAILEKH_CHAMUNDA_WINDRASAINI_MUN", label: "चामुण्डा विन्द्रासैनी नगरपालिका" },
          { value: "DAILEKH_AATHBIS_MUN", label: "आठबीस नगरपालिका" },
          { value: "DAILEKH_BHAGAWATIMAI_MUN", label: "भगवतीमाई गाउँपालिका" },
          { value: "DAILEKH_GURAS_MUN", label: "गुराँस गाउँपालिका" },
          { value: "DAILEKH_DUGESHOWER_MUN", label: "डुंगेश्वर गाउँपालिका" },
          { value: "DAILEKH_NAUMULE_MUN", label: "नौमुले गाउँपालिका" },
          { value: "DAILEKH_MAHAWU_MUN", label: "महावु गाउँपालिका" },
          { value: "DAILEKH_BHAIRAWI_MUN", label: "भैरवी गाउँपालिका" },
          { value: "DAILEKH_THATIKADH_MUN", label: "ठाँटीकाँध गाउँपालिका" }
        ]
      },
      {
        value: "jaajarkot", label: "जाजरकोट", palikas: [
          { value: "JAJARKOT_BHERI_MUN", label: "भेरी नगरपालिका" },
          { value: "JAJARKOT_CHHEDAGAD_MUN", label: "छेडागाड नगरपालिका" },
          { value: "JAJARKOT_NALAGAD_MUN", label: "नलगाड नगरपालिका" },
          { value: "JAJARKOT_BAREKOT_MUN", label: "बारेकोट गाउँपालिका" },
          { value: "JAJARKOT_KUSE_MUN", label: "कुसे गाउँपालिका" },
          { value: "JAJARKOT_JUNICHADE_MUN", label: "जुनीचाँदे गाउँपालिका" },
          { value: "JAJARKOT_SHIWALAYA_MUN", label: "शिवालय गाउँपालिका" }
        ]
      },
      {
        value: "dolpa", label: "डोल्पा", palikas: [
          { value: "DOLPA_THULO_BHERI_MUN", label: "ठूली भेरी नगरपालिका" },
          { value: "DOLPA_TRIPURASUNDARI_MUN", label: "त्रिपुरासुन्दरी नगरपालिका" },
          { value: "DOLPA_DOLPO_BUDDHA_MUN", label: "डोल्पो बुद्ध गाउँपालिका" },
          { value: "DOLPA_SE_FOKSUNDO_MUN", label: "शे फोक्सुन्डो गाउँपालिका" },
          { value: "DOLPA_JAGADULLA_MUN", label: "जगदुल्ला गाउँपालिका" },
          { value: "DOLPA_MUDKECHULA_MUN", label: "मुड्केचुला गाउँपालिका" },
          { value: "DOLPA_KAIKE_MUN", label: "काईके गाउँपालिका" },
          { value: "DOLPA_CHHARKA_TANGSONG_MUN", label: "छार्का ताङसोङ गाउँपालिका" }
        ]
      },
      {
        value: "jumla", label: "जुम्ला", palikas: [
          { value: "JUMLA_CHANDANNATH_MUN", label: "चन्दननाथ नगरपालिका" },
          { value: "JUMLA_KANAKASUNDARI_MUN", label: "कनकासुन्दरी गाउँपालिका" },
          { value: "JUMLA_SINJA_MUN", label: "सिंजा गाउँपालिका" },
          { value: "JUMLA_HIMA_MUN", label: "हिमा गाउँपालिका" },
          { value: "JUMLA_TILA_MUN", label: "तिला गाउँपालिका" },
          { value: "JUMLA_GUTHICHAUR_MUN", label: "गुठिचौर गाउँपालिका" },
          { value: "JUMLA_TATOPANI_MUN", label: "तातोपानी गाउँपालिका" },
          { value: "JUMLA_PATARASI_MUN", label: "पातारासी गाउँपालिका" }
        ]
      },
      {
        value: "kalikot", label: "कालिकोट", palikas: [
          { value: "KALIKOT_KHADACHAKRA_MUN", label: "खाँडाचक्र नगरपालिका" },
          { value: "KALIKOT_RASKOT_MUN", label: "रास्कोट नगरपालिका" },
          { value: "KALIKOT_TILAGUFA_MUN", label: "तिलागुफा नगरपालिका" },
          { value: "KALIKOT_PACHALJHARANA_MUN", label: "पचालझरना गाउँपालिका" },
          { value: "KALIKOT_SANNI_TRIWENI_MUN", label: "सान्नी त्रिवेणी गाउँपालिका" },
          { value: "KALIKOT_NARAHARINATH_MUN", label: "नरहरिनाथ गाउँपालिका" },
          { value: "KALIKOT_SHUBHA_KALIKA_MUN", label: "शुभ कालीका गाउँपालिका" },
          { value: "KALIKOT_MAHAWAI_MUN", label: "महावै गाउँपालिका" },
          { value: "KALIKOT_PALATA_MUN", label: "पलाता गाउँपालिका" }
        ]
      },
      {
        value: "mugu", label: "मुगु", palikas: [
          { value: "MUGU_CHHAYANATH_RARA_MUN", label: "छायाँनाथ रारा नगरपालिका" },
          { value: "MUGU_MUGUM_KARMARONG_MUN", label: "मुगुम कार्मारोंग गाउँपालिका" },
          { value: "MUGU_SORU_MUN", label: "सोरु गाउँपालिका" },
          { value: "MUGU_KHATYAD_MUN", label: "खत्याड गाउँपालिका" }
        ]
      },
      {
        value: "humla", label: "हुम्ला", palikas: [
          { value: "HUMLA_SIMKOT_MUN", label: "सिमकोट गाउँपालिका" },
          { value: "HUMLA_NAMKHA_MUN", label: "नाम्खा गाउँपालिका" },
          { value: "HUMLA_KHARPUNATH_MUN", label: "खार्पुनाथ गाउँपालिका" },
          { value: "HUMLA_SARKEGAD_MUN", label: "सर्केगाड गाउँपालिका" },
          { value: "HUMLA_CHANKHELI_MUN", label: "चंखेली गाउँपालिका" },
          { value: "HUMLA_ADANCHULI_MUN", label: "अदानचुली गाउँपालिका" },
          { value: "HUMLA_TAJAKOT_MUN", label: "ताँजाकोट गाउँपालिका" }

        ]
      },
      {
        value: "rukumPaschim", label: "रुकुम (पश्चिम भाग)", palikas: [
          { value: "RUKUM_PASCHIM_MUSIKOT_MUN", label: "मुसिकोट नगरपालिका" },
          { value: "RUKUM_PASCHIM_CHAURAJHARI_MUN", label: "चौरजहारी नगरपालिका" },
          { value: "RUKUM_PASCHIM_AATHBISKOT_MUN", label: "आठबिसकोट नगरपालिका" },
          { value: "RUKUM_PASCHIM_BAFIKOT_MUN", label: "बाँफिकोट गाउँपालिका" },
          { value: "RUKUM_PASCHIM_TRIWENI_MUN", label: "त्रिवेणी गाउँपालिका" },
          { value: "RUKUM_PASCHIM_SANI_BHERI_MUN", label: "सानी भेरी गाउँपालिका" }
        ]
      }
    ]
  },
  {
    value: "SUDURPASHCHIM_PROVINCE", label: "सुदूरपश्चिम प्रदेश", districts: [
      {
        value: "bajura", label: "बाजुरा", palikas: [
          { value: "BAJURA_BADIMALIKA_MUN", label: "बडीमालिका नगरपालिका" },
          { value: "BAJURA_TRIWENI_MUN", label: "त्रिवेणी नगरपालिका" },
          { value: "BAJURA_BUDIGANGA_MUN", label: "बुढीगंगा नगरपालिका" },
          { value: "BAJURA_BUDINANDA_MUN", label: "बुढीनन्दा नगरपालिका" },
          { value: "BAJURA_GAUMUL_MUN", label: "गौमुल गाउँपालिका" },
          { value: "BAJURA_JAGANNATH_MUN", label: "जगन्‍नाथ गाउँपालिका" },
          { value: "BAJURA_SWAMIKARTIK_KHAPAR_MUN", label: "स्वामीकार्तिक खापर गाउँपालिका" },
          { value: "BAJURA_KHAPTAD_CHHEDEDAHA_MUN", label: "खप्तड छेडेदह गाउँपालिका" },
          { value: "BAJURA_HIMALI_MUN", label: "हिमाली गाउँपालिका" }
        ]
      },
      {
        value: "bajhang", label: "बझाङ", palikas: [
          { value: "BAJHANG_JAYAPRITHIWI_MUN", label: "जयपृथ्वी नगरपालिका" },
          { value: "BAJHANG_BUNGAL_MUN", label: "बुंगल नगरपालिका" },
          { value: "BAJHANG_TALAKOT_MUN", label: "तलकोट गाउँपालिका" },
          { value: "BAJHANG_MASTA_MUN", label: "मष्टा गाउँपालिका" },
          { value: "BAJHANG_KHAPTADCHHANNA_MUN", label: "खप्तडछान्ना गाउँपालिका" },
          { value: "BAJHANG_THALARA_MUN", label: "थलारा गाउँपालिका" },
          { value: "BAJHANG_WITTHADCHIR_MUN", label: "वित्थडचिर गाउँपालिका" },
          { value: "BAJHANG_SURMA_MUN", label: "सूर्मा गाउँपालिका" },
          { value: "BAJHANG_CHHABISPATHIBHERA_MUN", label: "छबिसपाथिभेरा गाउँपालिका" },
          { value: "BAJHANG_DURGATHALI_MUN", label: "दुर्गाथली गाउँपालिका" },
          { value: "BAJHANG_KEDHARSUE_MUN", label: "केदारस्युँ गाउँपालिका" },
          { value: "BAJHANG_SAIPAL_MUN", label: "साइपाल गाउँपालिका" }
        ]
      },
      {
        value: "achham", label: "अछाम", palikas: [
          { value: "ACHHAM_MANGALSEN_MUN", label: "मंगलसेन नगरपालिका" },
          { value: "ACHHAM_KAMALBAJAR_MUN", label: "कमलबजार नगरपालिका" },
          { value: "ACHHAM_SAFEBAGAR_MUN", label: "साँफेबगर नगरपालिका" },
          { value: "ACHHAM_PANCHADEWAL_WINAYEK_MUN", label: "पन्चदेवल विनायक नगरपालिका" },
          { value: "ACHHAM_CHAURPATI_MUN", label: "चौरपाटी गाउँपालिका" },
          { value: "ACHHAM_MELLEKH_MUN", label: "मेल्लेख गाउँपालिका" },
          { value: "ACHHAM_BANNIGADI_JAYAGAD_MUN", label: "बान्निगढी जयगढ गाउँपालिका" },
          { value: "ACHHAM_RAMAROSHAN_MUN", label: "रामारोशन गाउँपालिका" },
          { value: "ACHHAM_DHAKARI_MUN", label: "ढकारी गाउँपालिका" },
          { value: "ACHHAM_TURMAKHAD_MUN", label: "तुर्माखाँद गाउँपालिका" }
        ]
      },
      {
        value: "doti", label: "डोटी", palikas: [
          { value: "DOTI_DIPAYEL_SILAGADI_MUN", label: "दिपायल सिलगढी नगरपालिका" },
          { value: "DOTI_SHIKHAR_MUN", label: "शिखर नगरपालिका" },
          { value: "DOTI_PURBACHAUKI_MUN", label: "पूर्वीचौकी गाउँपालिका" },
          { value: "DOTI_BADIKEDAR_MUN", label: "बडीकेदार गाउँपालिका" },
          { value: "DOTI_JORAYAL_MUN", label: "जोरायल गाउँपालिका" },
          { value: "DOTI_SAYAL_MUN", label: "सायल गाउँपालिका" },
          { value: "DOTI_AADARSHA_MUN", label: "आदर्श गाउँपालिका" },
          { value: "DOTI_KIC_MUN", label: "के.आई.सिं. गाउँपालिका" },
          { value: "DOTI_BOGTAN_FUDSIL_MUN", label: "बोगटान फुड्सिल गाउँपालिका" }
        ]
      },
      {
        value: "kailali", label: "कैलाली", palikas: [
          { value: "KAILALI_DHANGADI_MUN", label: "धनगढी उपमहानगरपालिका" },
          { value: "KAILALI_TIKAPUR_MUN", label: "टिकापुर नगरपालिका" },
          { value: "KAILALI_GHOGHADI_MUN", label: "घोडाघोडी नगरपालिका" },
          { value: "KAILALI_LAMKICHUHA_MUN", label: "लम्कीचुहा नगरपालिका" },
          { value: "KAILALI_BHAJANI_MUN", label: "भजनी नगरपालिका" },
          { value: "KAILALI_GODAWARI_MUN", label: "गोदावरी नगरपालिका" },
          { value: "KAILALI_GAURIGANGA_MUN", label: "गौरीगंगा नगरपालिका" },
          { value: "KAILALI_JANAKI_MUN", label: "जानकी गाउँपालिका" },
          { value: "KAILALI_BARDAGORIYA_MUN", label: "बर्दगोरिया गाउँपालिका" },
          { value: "KAILALI_MOHANYAL_MUN", label: "मोहन्याल गाउँपालिका" },
          { value: "KAILALI_KAILARI_MUN", label: "कैलारी गाउँपालिका" },
          { value: "KAILALI_JOSHIPUR_MUN", label: "जोशीपुर गाउँपालिका" },
          { value: "KAILALI_CHURE_MUN", label: "चुरे गाउँपालिका" }
        ]
      },
      {
        value: "kanchanpur", label: "कञ्चनपुर", palikas: [
          { value: "KANCHANPUR_BHIMDATTA_MUN", label: "भीमदत्त नगरपालिका" },
          { value: "KANCHANPUR_PURNAWAS_MUN", label: "पुर्नवास नगरपालिका" },
          { value: "KANCHANPUR_WEDAKOT_MUN", label: "वेदकोट नगरपालिका" },
          { value: "KANCHANPUR_MAHAKALI_MUN", label: "महाकाली नगरपालिका" },
          { value: "KANCHANPUR_SUKLAFATA_MUN", label: "शुक्लाफाँटा नगरपालिका" },
          { value: "KANCHANPUR_BELAURI_MUN", label: "बेलौरी नगरपालिका" },
          { value: "KANCHANPUR_KRISHNAPUR_MUN", label: "कृष्णपुर नगरपालिका" },
          { value: "KANCHANPUR_BELDADI_MUN", label: "बेलडाडी गाउँपालिका" },
          { value: "KANCHANPUR_LALJHADI_MUN", label: "लालझाडी गाउँपालिका" }
        ]
      },
      {
        value: "dadeldhura", label: "डडेल्धुरा", palikas: [
          { value: "DADELDHURA_AMARGADI_MUN", label: "अमरगढी नगरपालिका" },
          { value: "DADELDHURA_PARASHURAM_MUN", label: "परशुराम नगरपालिका" },
          { value: "DADELDHURA_AALITAL_MUN", label: "आलिताल गाउँपालिका" },
          { value: "DADELDHURA_BHAGESHOWER_MUN", label: "भागेश्वर गाउँपालिका" },
          { value: "DADELDHURA_NAWADURGA_MUN", label: "नवदुर्गा गाउँपालिका" },
          { value: "DADELDHURA_AJAYMERU_MUN", label: "अजयमेरु गाउँपालिका" },
          { value: "DADELDHURA_GANNYAPADHURA_MUN", label: "गन्यापधुरा गाउँपालिका" }
        ]
      },
      {
        value: "baitadi", label: "बैतडी", palikas: [
          { value: "BAITADI_DASHARATHACHANDA_MUN", label: "दशरथचन्द नगरपालिका" },
          { value: "BAITADI_PATAN_MUN", label: "पाटन नगरपालिका" },
          { value: "BAITADI_MELAULI_MUN", label: "मेलौली नगरपालिका" },
          { value: "BAITADI_PUCHAURDI_MUN", label: "पुर्चौडी नगरपालिका" },
          { value: "BAITADI_SURNAYA_MUN", label: "सुर्नया गाउँपालिका" },
          { value: "BAITADI_SIGASA_MUN", label: "सिगास गाउँपालिका" },
          { value: "BAITADI_SHIWANATH_MUN", label: "शिवनाथ गाउँपालिका" },
          { value: "BAITADI_PANCHESHOWER_MUN", label: "पञ्चेश्वर गाउँपालिका" },
          { value: "BAITADI_DOGADAKEDAR_MUN", label: "दोगडाकेदार गाउँपालिका" },
          { value: "BAITADI_DILASAINI_MUN", label: "डीलासैनी गाउँपालिका" },
        ]
      },
      {
        value: "darchula", label: "दार्चुला", palikas: [
          { value: "DARCHULA_MAHAKALI_MUN", label: "महाकाली नगरपालिका" },
          { value: "DARCHULA_SHAILYASHIKHAR_MUN", label: "शैल्यशिखर नगरपालिका" },
          { value: "DARCHULA_MALIKARJUN_MUN", label: "मालिकार्जुन गाउँपालिका" },
          { value: "DARCHULA_APIHIMAL_MUN", label: "अपिहिमाल गाउँपालिका" },
          { value: "DARCHULA_DUHU_MUN", label: "दुहुँ गाउँपालिका" },
          { value: "DARCHULA_NAUGAD_MUN", label: "नौगाड गाउँपालिका" },
          { value: "DARCHULA_MARMA_MUN", label: "मार्मा गाउँपालिका" },
          { value: "DARCHULA_LEKAM_MUN", label: "लेकम गाउँपालिका" },
          { value: "DARCHULA_BYAS_MUN", label: "ब्याँस गाउँपालिका" }
        ]
      }
    ]
  }
];

export const PALIKA_TYPES = [
  { value: "MAHANAGAR_PALIKA", label: "महानगरपालिका" },
  { value: "UPAMAHANAGAR_PALIKA", label: "उप-महानगरपालिका" },
  { value: "NAGAR_PALIKA", label: "नगरपालिका" },
  { value: "GAUN_PALIKA", label: "गाउँपालिका " }
];

export const USER_ROLE_OPTIONS = [
  { value: "ROLE_USER", label: "योजना प्रणाली प्रमुख" }
];

export const POSITION_OPTIONS = [
  { value: "ADHYAKSHA", label: "अध्यक्ष" },
  { value: "UPAADHYAKSHA", label: "उपाध्यक्ष" },
  { value: "KOSHAADHYAKSHA", label: "कोषाध्यक्ष" },
  { value: "SACHIB", label: "सचिब" },
  { value: "SADASYA", label: "सदस्य" }
];

export const INSTALLMENT_TYPES = [
  { value: "FIRST", label: "पहिलो" },
  { value: "SECOND", label: "दोस्रो" },
  { value: "THIRD", label: "तेस्रो" },
];

export const YOJANA_DEVELOPMENT_AREA_CATEGORIES = [
  { value: "PURWADHAR_WIKASH_KSHETRA", label: "पुर्वाधार विकास क्षेत्र" },
  { value: "AARTHIK_WIKASH_KSHETRA", label: "आर्थीक विकास क्षेत्र" },
  { value: "SAMAJIK_WIKASH_KSHETRA", label: "सामाजिक विकास क्षेत्र" },
  { value: "WATABARAN_WIKASH_KSHETRA", label: "वातवरण तथा विपद ब्यबस्थापान क्षेत्र" },
  { value: "SANSTHAGAT_WIKASH_KSHETRA", label: "संस्थागत विकास,तथा सेवा प्रवाह क्षेत्र" }
];

export const WARD_OR_MUNICIPALITY_STARIYA_YOJANA = [
  { value: "WARD_STARIYA", label: "वडा स्तरीय योजना" },
  { value: "MUNICIPALITY_STARIYA", label: "नगरपालिका स्तरीय योजना" }
]

export const DONATION_FROM_CATEGORIES = [
  { value: "FROM_CENTRAL", label: "सघंबाट" },
  { value: "FROM_PROVINCE", label: "प्रदेशबाट" },
  { value: "FROM_LOCAL_GOVERNMENT", label: "स्थानीय तहबाट" },
  { value: "FROM_PRIVATE_INSTITUTIONS", label: "गैरसरकारी सघंसंस्थाबाट" },
  { value: "FROM_FOREIGN_INSTITUTIONS", label: "विदेशी दात्री सघंसंस्थाबाट" },
  { value: "FROM_CONSUMER_COMMITTEE", label: "उपभोक्ता समितिबाट" },
  { value: "FROM_OTHERS", label: "अन्य निकायबाट" },
]

export const WARD_OR_MUNICIPALITY_SANCHAALIT_YOJANA = [
  { value: "WARD_STARIYA", label: "वडा" },
  { value: "MUNICIPALITY_STARIYA", label: "नगर" }
]