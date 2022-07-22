import { gql } from "@apollo/client";

export const query = gql`
fragment Hero on LandingPage {
  Hero {
    Title
    Description
    Button {
      Link
      Label
      Variant
    }
  }
}

fragment List on LandingPage {
  List {
    Title
    Steps {
      id
      Title
    }
    Description
    Button {
      Link
      Label
      Variant
    }
  }
}

fragment Coverage on LandingPage {
  Coverage {
    Title
    Subtitle
    CoverageCard {
      Icon {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      Title,
      Description,
      Link,
      ButtonLabel
    }
    Button {
      Link
      Label
      Variant
    }
  }
}

fragment Reasons on LandingPage {
  Reasons {
    Title
    Button {
      Link
      Label
      Variant
    }
  }
}

fragment Contact on LandingPage {
  Contact {
    Title
    CallToAction
    PhoneNumber
    ButtonWhatsApp {
      Link
      Label
      Variant
    }
    OpeningHours
  }
}

query LandingPage {
  landingPage {
    data {
      attributes {
        ...Hero
        ...List
        ...Coverage
        ...Reasons
        ...Contact
      }
    }
  }
}
`;
