//----------------------------------------------------
// index.jsx
//----------------------------------------------------

// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core/styles';
import ruLocale from 'date-fns/locale/ru';
import { MobileContextProvider } from 'crm-components/common/MobileContextProvider/MobileContextProvider';
import App from 'crm-containers/App';
import HotApp from 'crm-containers/HotApp';
import configureStore from 'crm-stores/configureStore';
import { LocalizedUtils } from 'crm-components/common/pickers';
import CRMMuiThemeProvider from 'crm-components/common/CRMMuiThemeProvider/CRMMuiThemeProvider';
import LanguageContextProvider from 'crm-components/common/LanguageContextProvider/LanguageContextProvider';

const store = configureStore();

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

const Root = document.getElementById('root');

if (Root !== null) {
    render(
        <Provider store={store}>
            <MobileContextProvider>
                <CRMMuiThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={ruLocale}>
                        <LanguageContextProvider>
                            {process.env.NODE_ENV === 'development' ? <HotApp /> : <App />}
                        </LanguageContextProvider>
                    </MuiPickersUtilsProvider>
                </CRMMuiThemeProvider>
            </MobileContextProvider>
        </Provider>,
        Root,
    );
}



//----------------------------------------------------
// LanguageContextProvider.jsx
//----------------------------------------------------

// @flow

import React, { useState } from 'react';
import type { Node } from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { flattenMessages } from 'crm-i18n/utils';
import translations from 'crm-i18n/locales';

type Props = { children: Node };

addLocaleData([...en, ...ru]);

const IsLanguageContext = React.createContext < Object > (false);

const LanguageContextProvider = ({ children, ...props }: Props) => {
    const language = navigator.language.split(/[-_]/)[0];

    const [locale, setLocale] = useState(language);
    const [messages, setMessages] = useState(flattenMessages(translations[locale]));

    const switchToEnglish = () => {
        setLocale('en');
        setMessages(flattenMessages(translations.en));
    };

    const switchToRussian = () => {
        setLocale('ru');
        setMessages(flattenMessages(translations.ru));
    };

    return (
        <IsLanguageContext.Provider value={{ switchToEnglish, switchToRussian }}>
            <IntlProvider
                key={locale}
                locale={locale}
                messages={messages}
                defaultLocale='ru'
            >
                {children}
            </IntlProvider>
        </IsLanguageContext.Provider>
    );
};

export { IsLanguageContext };
export default LanguageContextProvider;


//----------------------------------------------------
// Translate.jsx
//----------------------------------------------------

// @flow

import React, { useContext } from 'react';
import { IsLanguageContext } from 'crm-components/common/LanguageContextProvider/LanguageContextProvider';
import { FormattedMessage } from 'react-intl';

type Props = {
    classes: Object,
}

const Search = ({ classes }: Props) => {
    const { switchToEnglish, switchToRussian } = useContext(IsLanguageContext);

    return (
        <>
            <p>
                <FormattedMessage
                    id='login.header'
                    defaultMessage='Вход в систему'
                />
            </p>

            <b onClick={switchToEnglish}>En</b>
            <b onClick={switchToRussian}>Ru</b>
        </>
    );
};

export default Search;
