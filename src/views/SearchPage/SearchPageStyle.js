import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const SearchPageStyle = theme => ({
    container,
    brand: {
      color: "#FFFFFF",
      textAlign: "left"
    },
    title: {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px 0 0"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    mainContent: {
        margin: "100px 30px 0px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
      },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    },
    section: {
        padding: "70px 0",
        paddingTop: "0"
      },
      container,
      title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      navbar: {
        marginBottom: "-20px",
        zIndex: "100",
        position: "relative",
        overflow: "hidden",
        "& header": {
          borderRadius: "0"
        }
      },
      navigation: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "0",
        minHeight: "740px"
      },
      formControl: {
        margin: "0 !important",
        paddingTop: "0"
      },
      inputRootCustomClasses: {
        margin: "0!important"
      },
      searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
      },
      ...headerLinksStyle(theme),
      img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
      },
      imageDropdownButton: {
        padding: "0px",
        top: "4px",
        borderRadius: "50%",
        marginLeft: "5px"
      },
    header: {
        borderRadius: "0px"
    }
  });

export default SearchPageStyle;
