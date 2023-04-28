---
template: ArticlePage
category: General patterns
previewImage: /img/bankid.svg
title: BankID
intro: When we want users to identify themselves BankID is our most common way
  of doing so. Depending on context it varies how we inform the user of the need
  to the identify/sign.
contentTop: ""
---
## W﻿riting

### Copy för BankID

#### Primary button with BankID icon

##### Identifiering direkt

När BankID-identifiering sker för att användaren ska visa att "jag är jag", använder vi begreppet "identifiera".

**Text i knapp:**

Identifiera dig

#### Primary button with text beside button

##### BankID behövs senare

Om en identifiering eller signering behövs senare i flödet vill vi förvarna användaren om att BankID kommer att behövas.

**Text bredvid knappen:**

Du kommer att behöva BankID

**Text i knapp:**

Gå vidare

#### Primary button

##### Steget där du signerar

När BankID-signering används för att godkänna använder vi begreppet Signera och/eller godkänn.

**Text i knapp:**

Godkänn\
och signera

Om något görs innan signering, i detta fall godkänn, så skriver vi det först.

#### Web - error messages

##### bankid_error_expired_transaction:

Tiden rann ut – det tog för lång tid att signera. Försök igen.

##### bankid_error_user_cancel:

Du valde att avbryta signeringen – det kanske var ett misstag? Försök igen eller välkommen tillbaka en annan gång.

##### bankid_error_start_failed:

Tiden rann ut – det tog för lång tid att öppna BankID-appen. Försök igen.

##### bankid_error_already_in_progress:

För många signeringar samtidigt – vänta 5 minuter och testa sen igen.

##### bankid_error_general:

Tekniken är inte med oss just nu – vi är ledsna för det och jobbar med att lösa felet. Kom gärna tillbaka lite senare.

##### error202_saknaBankid

Du verkar sakna ett Mobilt BankID – du behöver BankID på en mobil enhet.

#### App - error messages

##### bankid_error_expired_transaction:

**Tiden rann ut**

Det tog för lång tid att signera. Försök igen.

##### bankid_error_user_cancel:

**Du valde att avbryta signeringen**

Det kanske var ett misstag? Försök igen eller välkommen tillbaka en annan gång.

##### bankid_error_start_failed:

**Tiden rann ut**

Det tog för lång tid att öppna BankID-appen. Försök igen.

##### bankid_error_already_in_progress:

**För många signeringar samtidigt**

Det verkar som du har flera signeringar igång. Vänta 5 minuter och testa sen igen.

##### bankid_error_general:

**Tekniken är inte med oss just nu**

Vi är ledsna för det och jobbar med att lösa felet. Kom gärna tillbaka lite senare.

##### error202_saknaBankid

**Du verkar sakna BankID här**

För att signera behöver du ha ett Mobilt BankID på den här enheten.